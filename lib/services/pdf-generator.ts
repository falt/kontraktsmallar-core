import PDFDocument from "pdfkit";
import { getTemplate } from "../templates/registry";
import type { TemplateField } from "../templates/types";

const COLORS = {
  black: "#1a1a1a",
  darkGray: "#333333",
  mediumGray: "#666666",
  lightGray: "#999999",
  border: "#d0d0d0",
  bgSection: "#f0f2f5",
  bgField: "#fafafa",
  white: "#ffffff",
  blank: "#cccccc",
};

const FONTS = {
  regular: "Helvetica",
  bold: "Helvetica-Bold",
  oblique: "Helvetica-Oblique",
};

const LAYOUT = {
  marginTop: 50,
  marginBottom: 60,
  marginLeft: 50,
  marginRight: 50,
  pageWidth: 595.28,
  pageHeight: 841.89,
  cellPadding: 6,
  cellGap: 0, // no gap - shared borders
  fieldHeight: 38,
  textareaHeight: 60,
  get contentWidth() {
    return this.pageWidth - this.marginLeft - this.marginRight;
  },
  get maxY() {
    return this.pageHeight - this.marginBottom;
  },
};

interface GenerateOptions {
  blank?: boolean;
}

interface SectionData {
  title: string;
  fields: TemplateField[];
  values: Record<string, string>;
}

// ─── Signature box renderer ──────────────────────────────

function renderSignatureBox(
  doc: PDFKit.PDFDocument,
  sig: { role: string; name: string },
  x: number,
  y: number,
  width: number,
  height: number,
  blank: boolean
) {
  const pad = LAYOUT.cellPadding;

  doc
    .rect(x, y, width, height)
    .lineWidth(0.5)
    .strokeColor(COLORS.border)
    .stroke();

  doc
    .fillColor(COLORS.mediumGray)
    .fontSize(7)
    .font(FONTS.regular)
    .text(sig.role, x + pad, y + pad, {
      width: width - pad * 2,
      lineBreak: false,
    });

  const lineY = y + height - 24;
  doc
    .moveTo(x + pad, lineY)
    .lineTo(x + width - pad, lineY)
    .lineWidth(0.5)
    .strokeColor(COLORS.black)
    .stroke();

  doc
    .fillColor(COLORS.mediumGray)
    .fontSize(7)
    .font(FONTS.regular)
    .text("Namnf\u00f6rtydligande:", x + pad, lineY + 3);

  if (!blank && sig.name) {
    doc
      .fillColor(COLORS.black)
      .fontSize(8)
      .font(FONTS.regular)
      .text(sig.name, x + pad + 75, lineY + 3, {
        width: width - pad * 2 - 75,
        lineBreak: false,
      });
  }
}

// ─── Witness box renderer ────────────────────────────────

function renderWitnessBox(
  doc: PDFKit.PDFDocument,
  label: string,
  x: number,
  y: number,
  width: number,
  height: number,
  blank: boolean
) {
  const pad = LAYOUT.cellPadding;

  doc
    .rect(x, y, width, height)
    .lineWidth(0.5)
    .strokeColor(COLORS.border)
    .stroke();

  doc
    .fillColor(COLORS.mediumGray)
    .fontSize(7)
    .font(FONTS.regular)
    .text(label, x + pad, y + pad);

  const lineY = y + height - 32;
  doc
    .moveTo(x + pad, lineY)
    .lineTo(x + width - pad, lineY)
    .lineWidth(0.5)
    .strokeColor(COLORS.black)
    .stroke();

  doc
    .fillColor(COLORS.mediumGray)
    .fontSize(7)
    .font(FONTS.regular)
    .text("Namnf\u00f6rtydligande:", x + pad, lineY + 3);

  if (blank) {
    // blank line for name
  }

  doc
    .fillColor(COLORS.mediumGray)
    .fontSize(7)
    .font(FONTS.regular)
    .text("Adress:", x + pad, lineY + 15);
}

// ─── Main export ────────────────────────────────────────────

export async function generatePdf(
  templateSlug: string,
  data: Record<string, string>,
  options: GenerateOptions = {}
): Promise<Buffer> {
  const template = getTemplate(templateSlug);
  if (!template) {
    throw new Error(`Mall "${templateSlug}" hittades inte`);
  }

  const { blank = false } = options;

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margins: {
          top: LAYOUT.marginTop,
          bottom: LAYOUT.marginBottom,
          left: LAYOUT.marginLeft,
          right: LAYOUT.marginRight,
        },
        bufferPages: true,
        info: {
          Title: template.name,
          Author: "Kontraktsmallar.se",
          Subject: template.description,
        },
      });

      const chunks: Buffer[] = [];
      doc.on("data", (chunk: Buffer) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      let y = LAYOUT.marginTop;

      // ─── Helper: check page break ───
      function ensureSpace(needed: number) {
        if (y + needed > LAYOUT.maxY) {
          doc.addPage();
          y = LAYOUT.marginTop;
        }
      }

      // ─── Helper: draw a bordered cell ───
      function drawCell(
        x: number,
        cellY: number,
        width: number,
        height: number,
        options?: { fill?: string }
      ) {
        if (options?.fill) {
          doc
            .rect(x, cellY, width, height)
            .fillAndStroke(options.fill, COLORS.border);
        } else {
          doc
            .rect(x, cellY, width, height)
            .lineWidth(0.5)
            .strokeColor(COLORS.border)
            .stroke();
        }
      }

      // ─── Helper: render a field as a labeled cell ───
      function renderFieldCell(
        label: string,
        value: string,
        field: TemplateField,
        x: number,
        cellWidth: number,
        cellHeight: number
      ) {
        const pad = LAYOUT.cellPadding;

        // Draw cell border
        drawCell(x, y, cellWidth, cellHeight);

        // Label (small, gray, top of cell)
        doc
          .fillColor(COLORS.mediumGray)
          .fontSize(7)
          .font(FONTS.regular)
          .text(label, x + pad, y + pad, {
            width: cellWidth - pad * 2,
            lineBreak: false,
          });

        // Value (below label)
        let displayValue = value;
        if (field.type === "select" && field.options) {
          const opt = field.options.find((o: { value: string; label: string }) => o.value === value);
          if (opt) displayValue = opt.label;
        }

        if (blank) {
          // empty cell - no value
        } else {
          doc
            .fillColor(COLORS.black)
            .fontSize(9.5)
            .font(FONTS.regular)
            .text(displayValue || "\u2014", x + pad, y + pad + 11, {
              width: cellWidth - pad * 2,
              height: cellHeight - pad - 13,
              lineGap: 2,
            });
        }
      }

      // ─── Helper: render section header ───
      function renderSectionHeader(title: string) {
        ensureSpace(20 + LAYOUT.fieldHeight);

        doc
          .fillColor(COLORS.black)
          .fontSize(11)
          .font(FONTS.bold)
          .text(title, LAYOUT.marginLeft, y);

        y += 16;
      }

      // ═══════════════════════════════════════════
      // TITLE
      // ═══════════════════════════════════════════

      doc
        .fillColor(COLORS.black)
        .fontSize(16)
        .font(FONTS.bold)
        .text(template.name, LAYOUT.marginLeft, y, {
          align: "center",
          width: LAYOUT.contentWidth,
        });

      y += 30;

      // ═══════════════════════════════════════════
      // SECTIONS (from template fields)
      // ═══════════════════════════════════════════

      const excludedFields = new Set([
        "standardvillkor",
        "ovriga_villkor",
        "sarskilda_villkor",
        "ort",
        "datum",
      ]);

      const sections = groupFieldsBySection(template.fields);

      for (const section of sections) {
        const visibleFields = section.fields.filter(
          (f) => !excludedFields.has(f.name)
        );

        if (visibleFields.length === 0) continue;

        renderSectionHeader(section.title);

        // Separate regular fields and textarea fields
        const regularFields = visibleFields.filter(
          (f) => f.type !== "textarea"
        );
        const textareaFields = visibleFields.filter(
          (f) => f.type === "textarea"
        );

        // Render regular fields in 2-column grid
        const colWidth = LAYOUT.contentWidth / 2;
        const isOdd = regularFields.length % 2 !== 0;

        for (let i = 0; i < regularFields.length; i += 2) {
          ensureSpace(LAYOUT.fieldHeight);

          // Last field alone? Full width
          if (isOdd && i === regularFields.length - 1) {
            const f1 = regularFields[i];
            renderFieldCell(
              f1.label,
              data[f1.name] ?? "",
              f1,
              LAYOUT.marginLeft,
              LAYOUT.contentWidth,
              LAYOUT.fieldHeight
            );
          } else {
            const f1 = regularFields[i];
            renderFieldCell(
              f1.label,
              data[f1.name] ?? "",
              f1,
              LAYOUT.marginLeft,
              colWidth,
              LAYOUT.fieldHeight
            );

            const f2 = regularFields[i + 1];
            renderFieldCell(
              f2.label,
              data[f2.name] ?? "",
              f2,
              LAYOUT.marginLeft + colWidth,
              colWidth,
              LAYOUT.fieldHeight
            );
          }

          y += LAYOUT.fieldHeight;
        }

        // Render textarea fields full width
        for (const field of textareaFields) {
          const height = LAYOUT.textareaHeight;
          ensureSpace(height);

          renderFieldCell(
            field.label,
            data[field.name] ?? "",
            field,
            LAYOUT.marginLeft,
            LAYOUT.contentWidth,
            height
          );

          y += height;
        }

        y += 12;
      }

      // ═══════════════════════════════════════════
      // CONDITIONS
      // ═══════════════════════════════════════════

      const conditionsText =
        data["standardvillkor"] || getConditionsText(templateSlug);

      if (conditionsText) {
        renderSectionHeader("Villkor");

        // Measure text height for the conditions box
        const points = conditionsText
          .split(/(?<=\.)\s+/)
          .filter((p) => p.trim().length > 0);

        const condText = points
          .map((p, i) => `${i + 1}. ${p.trim()}`)
          .join("\n");

        const textHeight = doc
          .fontSize(9)
          .font(FONTS.regular)
          .heightOfString(condText, {
            width: LAYOUT.contentWidth - LAYOUT.cellPadding * 2,
            lineGap: 3,
          });

        const boxHeight = textHeight + LAYOUT.cellPadding * 2 + 4;
        ensureSpace(boxHeight);

        drawCell(LAYOUT.marginLeft, y, LAYOUT.contentWidth, boxHeight);

        doc
          .fillColor(COLORS.darkGray)
          .fontSize(9)
          .font(FONTS.regular)
          .text(condText, LAYOUT.marginLeft + LAYOUT.cellPadding, y + LAYOUT.cellPadding, {
            width: LAYOUT.contentWidth - LAYOUT.cellPadding * 2,
            lineGap: 3,
          });

        y += boxHeight + 12;
      }

      // ═══════════════════════════════════════════
      // ÖVRIGA VILLKOR (user-defined)
      // ═══════════════════════════════════════════

      const extraConditions =
        data["ovriga_villkor"] || data["sarskilda_villkor"] || "";

      if (extraConditions.trim() || blank) {
        renderSectionHeader("\u00D6vriga villkor");

        const height = blank ? 70 : Math.max(50, doc
          .fontSize(9)
          .font(FONTS.regular)
          .heightOfString(extraConditions, {
            width: LAYOUT.contentWidth - LAYOUT.cellPadding * 2,
            lineGap: 3,
          }) + LAYOUT.cellPadding * 2 + 4);

        ensureSpace(height);

        drawCell(LAYOUT.marginLeft, y, LAYOUT.contentWidth, height);

        if (!blank && extraConditions.trim()) {
          doc
            .fillColor(COLORS.darkGray)
            .fontSize(9)
            .font(FONTS.regular)
            .text(
              extraConditions,
              LAYOUT.marginLeft + LAYOUT.cellPadding,
              y + LAYOUT.cellPadding,
              {
                width: LAYOUT.contentWidth - LAYOUT.cellPadding * 2,
                lineGap: 3,
              }
            );
        }

        y += height + 12;
      }

      // ═══════════════════════════════════════════
      // SIGNATURES
      // ═══════════════════════════════════════════

      ensureSpace(140);
      renderSectionHeader("Underskrifter");

      // Closing text
      const closingText = getClosingText(templateSlug);
      doc
        .fillColor(COLORS.mediumGray)
        .fontSize(8.5)
        .font(FONTS.oblique)
        .text(closingText, LAYOUT.marginLeft, y + 2, {
          width: LAYOUT.contentWidth,
          lineGap: 2,
        });

      y = doc.y + 14;

      // Ort och datum in a cell
      ensureSpace(LAYOUT.fieldHeight);

      const ort = blank ? "" : (data["ort"] || "");
      const datum = blank ? "" : (data["datum"] || "");
      const ortDatum = `${ort}${ort && datum ? ", den " : ""}${datum}`;

      renderFieldCell(
        "Ort och datum",
        ortDatum,
        { name: "ort_datum", label: "Ort och datum", type: "text", required: false, section: "" } as TemplateField,
        LAYOUT.marginLeft,
        LAYOUT.contentWidth,
        LAYOUT.fieldHeight
      );

      y += LAYOUT.fieldHeight + 16;

      // Signature blocks in boxes
      const signatories = getSignatories(templateSlug, data);
      const sigWidth = LAYOUT.contentWidth / 2;
      const sigHeight = 70;

      for (let i = 0; i < signatories.length; i += 2) {
        ensureSpace(sigHeight);

        renderSignatureBox(
          doc,
          signatories[i],
          LAYOUT.marginLeft,
          y,
          sigWidth,
          sigHeight,
          blank
        );

        if (i + 1 < signatories.length) {
          renderSignatureBox(
            doc,
            signatories[i + 1],
            LAYOUT.marginLeft + sigWidth,
            y,
            sigWidth,
            sigHeight,
            blank
          );
        } else {
          drawCell(LAYOUT.marginLeft + sigWidth, y, sigWidth, sigHeight);
        }

        y += sigHeight;
      }

      // ═══════════════════════════════════════════
      // WITNESS BLOCKS (for templates that need them)
      // ═══════════════════════════════════════════

      const witnessCount = getWitnessCount(templateSlug);

      if (witnessCount > 0) {
        y += 14;
        ensureSpace(100);

        doc
          .fillColor(COLORS.mediumGray)
          .fontSize(8.5)
          .font(FONTS.oblique)
          .text(
            getWitnessText(templateSlug),
            LAYOUT.marginLeft,
            y,
            { width: LAYOUT.contentWidth }
          );

        y = doc.y + 10;

        for (let w = 0; w < witnessCount; w += 2) {
          ensureSpace(sigHeight);

          renderWitnessBox(
            doc,
            `Vittne ${w + 1}`,
            LAYOUT.marginLeft,
            y,
            sigWidth,
            sigHeight,
            blank
          );

          if (w + 1 < witnessCount) {
            renderWitnessBox(
              doc,
              `Vittne ${w + 2}`,
              LAYOUT.marginLeft + sigWidth,
              y,
              sigWidth,
              sigHeight,
              blank
            );
          } else {
            drawCell(LAYOUT.marginLeft + sigWidth, y, sigWidth, sigHeight);
          }

          y += sigHeight;
        }
      }

      // ═══════════════════════════════════════════
      // PAGE NUMBERS & FOOTER
      // ═══════════════════════════════════════════

      const range = doc.bufferedPageRange();
      const pageCount = range.count;

      for (let i = range.start; i < range.start + pageCount; i++) {
        doc.switchToPage(i);

        // Temporarily remove bottom margin so text() doesn't create new pages
        const origBottom = doc.page.margins.bottom;
        doc.page.margins.bottom = 0;

        const footerY = LAYOUT.pageHeight - 42;

        // Thin rule above footer
        doc
          .moveTo(LAYOUT.marginLeft, footerY - 4)
          .lineTo(LAYOUT.marginLeft + LAYOUT.contentWidth, footerY - 4)
          .lineWidth(0.3)
          .strokeColor(COLORS.border)
          .stroke();

        // Page number: Sida X (Y)
        doc
          .fillColor(COLORS.lightGray)
          .fontSize(8)
          .font(FONTS.regular)
          .text(
            `Sida ${i + 1} (${pageCount})  \u2022  Kontraktsmallar.se`,
            LAYOUT.marginLeft,
            footerY,
            {
              align: "center",
              width: LAYOUT.contentWidth,
              lineBreak: false,
            }
          );

        // Restore margin
        doc.page.margins.bottom = origBottom;
      }

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

// ─── Group fields by section ────────────────────────────

function groupFieldsBySection(fields: TemplateField[]): SectionData[] {
  const sections: Map<string, TemplateField[]> = new Map();

  for (const field of fields) {
    if (!sections.has(field.section)) {
      sections.set(field.section, []);
    }
    sections.get(field.section)!.push(field);
  }

  return Array.from(sections.entries()).map(([title, sectionFields]) => ({
    title,
    fields: sectionFields,
    values: {},
  }));
}

// ─── Signatories ────────────────────────────────────────

function getSignatories(
  slug: string,
  data: Record<string, string>
): { role: string; name: string }[] {
  switch (slug) {
    case "kopekontrakt":
    case "kopekontrakt-bil":
    case "kopekontrakt-bat":
    case "kopekontrakt-fastighet":
      return [
        { role: "S\u00e4ljarens underskrift", name: data["saljare_namn"] || "" },
        { role: "K\u00f6parens underskrift", name: data["kopare_namn"] || "" },
      ];
    case "hyreskontrakt":
    case "andrahandsuthyrning":
    case "inneboendekontrakt":
      return [
        { role: "Hyresv\u00e4rdens underskrift", name: data["hyresvard_namn"] || "" },
        { role: "Hyresg\u00e4stens underskrift", name: data["hyresgast_namn"] || "" },
      ];
    case "anstallningsavtal":
      return [
        { role: "Arbetsgivarens underskrift", name: data["arbetsgivare_namn"] || "" },
        { role: "Arbetstagarens underskrift", name: data["arbetstagare_namn"] || "" },
      ];
    case "fullmakt":
    case "framtidsfullmakt":
      return [
        { role: "Fullmaktsgivarens underskrift", name: data["fullmaktsgivare_namn"] || "" },
      ];
    case "skuldebrev":
      return [
        { role: "L\u00e5ntagarens underskrift", name: data["lantagare_namn"] || "" },
        { role: "L\u00e5ngivarens underskrift", name: data["langivare_namn"] || "" },
      ];
    case "sekretessavtal":
    case "samarbetsavtal":
    case "bodelningsavtal":
      return [
        { role: "Part 1 underskrift", name: data["part1_namn"] || "" },
        { role: "Part 2 underskrift", name: data["part2_namn"] || "" },
      ];
    case "gavobrev":
      return [
        { role: "Givarens underskrift", name: data["givare_namn"] || "" },
        { role: "Mottagarens underskrift", name: data["mottagare_namn"] || "" },
      ];
    case "samboavtal":
      return [
        { role: "Sambo 1 underskrift", name: data["sambo1_namn"] || "" },
        { role: "Sambo 2 underskrift", name: data["sambo2_namn"] || "" },
      ];
    case "aktenskapsforord":
      return [
        { role: "Make/Maka 1 underskrift", name: data["make1_namn"] || "" },
        { role: "Make/Maka 2 underskrift", name: data["make2_namn"] || "" },
      ];
    case "testamente":
      return [
        { role: "Testators underskrift", name: data["testator_namn"] || "" },
      ];
    case "uppsagning-hyresavtal":
      return [
        { role: "Avs\u00e4ndarens underskrift", name: data["avsandare_namn"] || "" },
      ];
    case "konsultavtal":
      return [
        { role: "Uppdragsgivarens underskrift", name: data["uppdragsgivare_namn"] || "" },
        { role: "Konsultens underskrift", name: data["konsult_namn"] || "" },
      ];
    case "aktieagaravtal":
      return [
        { role: "Aktie\u00e4gare 1 underskrift", name: data["agare1_namn"] || "" },
        { role: "Aktie\u00e4gare 2 underskrift", name: data["agare2_namn"] || "" },
      ];
    default:
      return [];
  }
}

// ─── Conditions text ────────────────────────────────────

function getConditionsText(slug: string): string {
  switch (slug) {
    case "kopekontrakt":
    case "kopekontrakt-bil":
    case "kopekontrakt-bat":
      return "F\u00f6rs\u00e4ljningen sker i befintligt skick om inget annat anges. K\u00f6paren har besiktigat objektet och godk\u00e4nner dess skick. \u00c4gander\u00e4tt och risk \u00f6verg\u00e5r till k\u00f6paren vid \u00f6verl\u00e5telsetillf\u00e4llet. S\u00e4ljaren garanterar att objektet inte \u00e4r beh\u00e4ftat med skulder, pantr\u00e4tter eller andra belastningar.";
    case "kopekontrakt-fastighet":
      return "Fastigheten \u00f6verl\u00e5ts i befintligt skick. K\u00f6paren har beretts tillf\u00e4lle att besiktiga fastigheten och godtar dess skick. K\u00f6paren \u00f6vertar ansvaret f\u00f6r fastigheten fr\u00e5n och med tilltr\u00e4desdagen. S\u00e4ljaren garanterar att fastigheten inte belastas av andra inteckningar, servitut eller nyttjander\u00e4tter \u00e4n vad som framg\u00e5r av detta avtal. Lagfart ska s\u00f6kas av k\u00f6paren inom tre m\u00e5nader fr\u00e5n tilltr\u00e4det.";
    case "hyreskontrakt":
      return "Hyresg\u00e4sten f\u00f6rbinder sig att v\u00e4l v\u00e5rda l\u00e4genheten och inte utan hyresv\u00e4rdens skriftliga medgivande \u00f6verl\u00e5ta hyresr\u00e4tten eller uppl\u00e5ta l\u00e4genheten i andra hand. Hyresg\u00e4sten ansvarar f\u00f6r skador som uppst\u00e5r genom eget v\u00e5llande. Vid avflyttning ska l\u00e4genheten \u00e5terst\u00e4llas i det skick den var vid inflyttning, med h\u00e4nsyn till normalt slitage.";
    case "anstallningsavtal":
      return "Anst\u00e4llningen regleras av detta avtal samt g\u00e4llande arbetsr\u00e4ttslig lagstiftning. Arbetstagaren f\u00f6rbinder sig att inte under anst\u00e4llningstiden bedriva med arbetsgivaren konkurrerande verksamhet. Semesterr\u00e4tt enligt semesterlagen.";
    case "fullmakt":
      return "Fullmakten g\u00e4ller tills den uttryckligen \u00e5terkallas av fullmaktsgivaren. Fullm\u00e4ktigen ska handla i fullmaktsgivarens intresse och inom ramen f\u00f6r fullmaktens omfattning.";
    case "framtidsfullmakt":
      return "Denna framtidsfullmakt tr\u00e4der i kraft den dag fullmaktsgivaren p\u00e5 grund av sjukdom, psykisk st\u00f6rning, f\u00f6rsvagat h\u00e4lsotillst\u00e5nd eller liknande f\u00f6rh\u00e5llande varaktigt och i huvudsak inte l\u00e4ngre kan ha hand om de angel\u00e4genheter som fullmakten avser. Fullmakten g\u00e4ller enligt lagen (2017:310) om framtidsfullmakter.";
    case "skuldebrev":
      return "L\u00e5ntagaren f\u00f6rbinder sig att \u00e5terbetala l\u00e5net enligt \u00f6verenskomna villkor. Vid utebliven betalning har l\u00e5ngivaren r\u00e4tt att kr\u00e4va omedelbar \u00e5terbetalning av hela det \u00e5terst\u00e5ende beloppet. Dr\u00f6jsm\u00e5lsr\u00e4nta utg\u00e5r enligt r\u00e4ntelagen om inte annat avtalats.";
    case "sekretessavtal":
      return "Parterna f\u00f6rbinder sig att inte r\u00f6ja konfidentiell information som de f\u00e5tt del av genom samarbetet. Sekretessen g\u00e4ller under avtalstiden och d\u00e4refter under den period som anges i avtalet. Konfidentiell information omfattar all information, oavsett form, som inte \u00e4r allm\u00e4nt k\u00e4nd.";
    case "gavobrev":
      return "G\u00e5van \u00f6verl\u00e4mnas utan villkor om inget annat anges nedan. G\u00e5van \u00e4r mottagarens enskilda egendom om s\u00e5 anges. G\u00e5vogivaren avst\u00e5r fr\u00e5n r\u00e4tten att \u00e5terkalla g\u00e5van efter undertecknande.";
    case "samboavtal":
      return "Detta samboavtal inneb\u00e4r att samboegendom helt eller delvis undantas fr\u00e5n bodelning enligt sambolagen (2003:376). Avtalet g\u00e4ller fr\u00e5n undertecknandet och tills det ers\u00e4tts av nytt avtal eller upph\u00e4vs skriftligen av b\u00e5da parter.";
    case "aktenskapsforord":
      return "Detta \u00e4ktenskapsf\u00f6rord reglerar egendomsf\u00f6rh\u00e5llanden mellan makarna enligt \u00e4ktenskapsbalkens best\u00e4mmelser. F\u00f6rordet ska registreras hos Skatteverket f\u00f6r att bli giltigt. \u00c4ndring av \u00e4ktenskapsf\u00f6rord kr\u00e4ver nytt skriftligt avtal.";
    case "bodelningsavtal":
      return "Parterna har i samf\u00f6rst\u00e5nd kommit \u00f6verens om f\u00f6rdelning av gemensam egendom enligt nedan. Genom undertecknande av detta avtal f\u00f6rklarar b\u00e5da parter att bodelningen \u00e4r slutgiltig och att inga ytterligare anspr\u00e5k kan riktas mot den andra parten avseende den egendom som omfattas av avtalet.";
    case "testamente":
      return "Detta testamente upph\u00e4ver alla tidigare testamenten. Testamentet \u00e4r uppr\u00e4ttat i enlighet med \u00e4rvdabalkens formkrav och \u00e4r bevittnat av tv\u00e5 samtidigt n\u00e4rvarande vittnen som inte \u00e4r j\u00e4viga.";
    case "uppsagning-hyresavtal":
      return "Upps\u00e4gningen sker i enlighet med hyresavtalets best\u00e4mmelser och g\u00e4llande lagstiftning. Hyresg\u00e4sten ansvarar f\u00f6r att l\u00e4genheten \u00e4r st\u00e4dad och i gott skick vid avflyttning.";
    case "andrahandsuthyrning":
      return "Andrahandshyresg\u00e4sten f\u00e5r inte utan hyresv\u00e4rdens medgivande uppl\u00e5ta l\u00e4genheten till annan. Hyresv\u00e4rdens godk\u00e4nnande av andrahandsuthyrningen har inh\u00e4mtats. Andrahandshyresg\u00e4sten ansvarar f\u00f6r eventuella skador ut\u00f6ver normalt slitage.";
    case "konsultavtal":
      return "Konsulten utf\u00f6r uppdraget som sj\u00e4lvst\u00e4ndig uppdragstagare och \u00e4r inte att betrakta som anst\u00e4lld. Konsulten ansvarar sj\u00e4lv f\u00f6r skatter och sociala avgifter. Immateriella r\u00e4ttigheter till arbetsresultat tillfalller uppdragsgivaren om inget annat avtalats.";
    case "inneboendekontrakt":
      return "Den inneboende f\u00f6rbinder sig att f\u00f6lja bostadens ordningsregler och visa h\u00e4nsyn till \u00f6vriga boende. Rummet f\u00e5r inte uppl\u00e5tas till annan person. Den inneboende ansvarar f\u00f6r skador som uppst\u00e5r genom eget v\u00e5llande.";
    case "aktieagaravtal":
      return "Detta aktie\u00e4garavtal reglerar f\u00f6rh\u00e5llandet mellan aktie\u00e4garna och deras r\u00e4ttigheter och skyldigheter avseende bolaget. Avtalet kompletterar bolagsordningen. Vid motstridighet mellan avtalet och bolagsordningen ska avtalets best\u00e4mmelser g\u00e4lla parterna emellan.";
    case "samarbetsavtal":
      return "Parterna \u00e5tar sig att i god anda verka f\u00f6r samarbetets b\u00e4sta. Vardera part ansvarar f\u00f6r sina egna kostnader om inget annat avtalats. Parterna ska regelbundet informera varandra om f\u00f6rh\u00e5llanden av betydelse f\u00f6r samarbetet.";
    default:
      return "";
  }
}

// ─── Closing text ───────────────────────────────────────

function getClosingText(slug: string): string {
  switch (slug) {
    case "testamente":
      return "Detta testamente \u00e4r uppr\u00e4ttat i ett (1) original som f\u00f6rvaras av testatorn.";
    case "uppsagning-hyresavtal":
      return "Denna upps\u00e4gning b\u00f6r skickas med rekommenderat brev f\u00f6r att s\u00e4kerst\u00e4lla leverans.";
    case "aktenskapsforord":
      return "Detta \u00e4ktenskapsf\u00f6rord \u00e4r uppr\u00e4ttat i tv\u00e5 (2) likalydande exemplar, varav makarna tagit var sitt. Avtalet ska registreras hos Skatteverket f\u00f6r att bli giltigt.";
    default:
      return "Detta avtal \u00e4r uppr\u00e4ttat i tv\u00e5 (2) likalydande exemplar, varav parterna tagit var sitt.";
  }
}

// ─── Witness configuration ──────────────────────────────

function getWitnessCount(slug: string): number {
  switch (slug) {
    case "testamente":
    case "framtidsfullmakt":
      return 2;
    case "kopekontrakt-fastighet":
      return 2;
    default:
      return 0;
  }
}

function getWitnessText(slug: string): string {
  switch (slug) {
    case "testamente":
      return "Vi intygar att testatorn vid fullt och sunt f\u00f6rst\u00e5nd och av fri vilja undertecknat detta testamente i v\u00e5r samtidiga n\u00e4rvaro.";
    case "framtidsfullmakt":
      return "Vi intygar att fullmaktsgivaren vid sunt och fullt f\u00f6rst\u00e5nd och av fri vilja undertecknat denna framtidsfullmakt i v\u00e5r samtidiga n\u00e4rvaro.";
    case "kopekontrakt-fastighet":
      return "Vi intygar att b\u00e5da parter undertecknat detta k\u00f6pekontrakt i v\u00e5r samtidiga n\u00e4rvaro.";
    default:
      return "";
  }
}
