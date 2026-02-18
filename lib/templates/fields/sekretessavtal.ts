import type { TemplateField } from "../types";

export const sekretessavtalFields: TemplateField[] = [
  // Part 1
  {
    name: "part1_namn",
    label: "Part 1 (namn/företag)",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Företag AB",
    section: "Part 1",
  },
  {
    name: "part1_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX / XXXXXX-XXXX",
    section: "Part 1",
  },
  {
    name: "part1_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Part 1",
  },

  // Part 2
  {
    name: "part2_namn",
    label: "Part 2 (namn/företag)",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Företag AB",
    section: "Part 2",
  },
  {
    name: "part2_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX / XXXXXX-XXXX",
    section: "Part 2",
  },
  {
    name: "part2_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Part 2",
  },

  // Sekretess
  {
    name: "syfte",
    label: "Syfte med informationsutbyte",
    type: "textarea",
    required: true,
    placeholder: "Beskriv varför parterna utbyter konfidentiell information...",
    section: "Sekretessvillkor",
  },
  {
    name: "konfidentiell_info",
    label: "Typ av konfidentiell information",
    type: "textarea",
    required: true,
    placeholder: "T.ex. affärsplaner, kunddata, teknisk dokumentation...",
    section: "Sekretessvillkor",
  },
  {
    name: "sekretessperiod",
    label: "Sekretessperiod efter avtalets upphörande",
    type: "select",
    required: true,
    section: "Sekretessvillkor",
    options: [
      { value: "1_ar", label: "1 år" },
      { value: "2_ar", label: "2 år" },
      { value: "3_ar", label: "3 år" },
      { value: "5_ar", label: "5 år" },
      { value: "10_ar", label: "10 år" },
    ],
  },
  {
    name: "avtalstid",
    label: "Avtalstid",
    type: "select",
    required: true,
    section: "Sekretessvillkor",
    options: [
      { value: "tillsvidare", label: "Tillsvidare" },
      { value: "1_ar", label: "1 år" },
      { value: "2_ar", label: "2 år" },
      { value: "projekt", label: "Under projektets varaktighet" },
    ],
  },
  {
    name: "vitesbelopp",
    label: "Vitesbelopp vid brott (SEK)",
    type: "number",
    required: false,
    placeholder: "100000",
    section: "Sekretessvillkor",
  },

  // Övrigt
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Parterna förbinder sig att inte röja konfidentiell information som de fått del av genom samarbetet. Sekretessen gäller under avtalstiden och därefter under den period som anges i avtalet. Konfidentiell information omfattar all information, oavsett form, som inte är allmänt känd.",
  },
  {
    name: "ovriga_villkor",
    label: "Övriga villkor",
    type: "textarea",
    required: false,
    placeholder: "Eventuella tilläggsvillkor...",
    section: "Övrigt",
  },
  {
    name: "ort",
    label: "Ort",
    type: "text",
    required: true,
    placeholder: "Stockholm",
    section: "Övrigt",
  },
  {
    name: "datum",
    label: "Datum",
    type: "date",
    required: true,
    section: "Övrigt",
  },
];
