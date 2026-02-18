import { TemplateConfig } from "./types";

// Fields
import { kopekontraktFields } from "./fields/kopekontrakt";
import { hyreskontraktFields } from "./fields/hyreskontrakt";
import { anstallningsavtalFields } from "./fields/anstallningsavtal";
import { fullmaktFields } from "./fields/fullmakt";
import { skuldebrevFields } from "./fields/skuldebrev";
import { sekretessavtalFields } from "./fields/sekretessavtal";
import { gavobrevFields } from "./fields/gavobrev";
import { samboavtalFields } from "./fields/samboavtal";
import { testamenteFields } from "./fields/testamente";
import { uppsagningHyresavtalFields } from "./fields/uppsagning-hyresavtal";
import { aktenskapsforordFields } from "./fields/aktenskapsforord";
import { bodelningsavtalFields } from "./fields/bodelningsavtal";
import { framtidsfullmaktFields } from "./fields/framtidsfullmakt";
import { kopekontraktBilFields } from "./fields/kopekontrakt-bil";
import { andrahandsuthyrningFields } from "./fields/andrahandsuthyrning";
import { konsultavtalFields } from "./fields/konsultavtal";
import { kopekontraktBatFields } from "./fields/kopekontrakt-bat";
import { inneboendekontraktFields } from "./fields/inneboendekontrakt";
import { aktieagaravtalFields } from "./fields/aktieagaravtal";
import { samarbetsavtalFields } from "./fields/samarbetsavtal";
import { kopekontraktFastighetFields } from "./fields/kopekontrakt-fastighet";

// Schemas
import { kopekontraktSchema } from "./schemas/kopekontrakt";
import { hyreskontraktSchema } from "./schemas/hyreskontrakt";
import { anstallningsavtalSchema } from "./schemas/anstallningsavtal";
import { fullmaktSchema } from "./schemas/fullmakt";
import { skuldebrevSchema } from "./schemas/skuldebrev";
import { sekretessavtalSchema } from "./schemas/sekretessavtal";
import { gavobrevSchema } from "./schemas/gavobrev";
import { samboavtalSchema } from "./schemas/samboavtal";
import { testamenteSchema } from "./schemas/testamente";
import { uppsagningHyresavtalSchema } from "./schemas/uppsagning-hyresavtal";
import { aktenskapsforordSchema } from "./schemas/aktenskapsforord";
import { bodelningsavtalSchema } from "./schemas/bodelningsavtal";
import { framtidsfullmaktSchema } from "./schemas/framtidsfullmakt";
import { kopekontraktBilSchema } from "./schemas/kopekontrakt-bil";
import { andrahandsuthyrningSchema } from "./schemas/andrahandsuthyrning";
import { konsultavtalSchema } from "./schemas/konsultavtal";
import { kopekontraktBatSchema } from "./schemas/kopekontrakt-bat";
import { inneboendekontraktSchema } from "./schemas/inneboendekontrakt";
import { aktieagaravtalSchema } from "./schemas/aktieagaravtal";
import { samarbetsavtalSchema } from "./schemas/samarbetsavtal";
import { kopekontraktFastighetSchema } from "./schemas/kopekontrakt-fastighet";

// HTML templates (legacy, kept for backward compatibility)
import { kopekontraktHtml } from "./html/kopekontrakt";

const templates: Map<string, TemplateConfig> = new Map();

function registerTemplate(config: TemplateConfig) {
  templates.set(config.slug, config);
}

// === KÖP & SÄLJ ===

registerTemplate({
  slug: "kopekontrakt",
  name: "Köpekontrakt",
  description:
    "Köpekontrakt för lös egendom. Används vid försäljning av fordon, möbler, elektronik och andra föremål mellan privatpersoner.",
  category: "köp-sälj",
  fields: kopekontraktFields,
  schema: kopekontraktSchema,
  htmlTemplate: kopekontraktHtml,
  seoTitle: "Köpekontrakt Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis köpekontrakt mall som PDF. Fyll i online och skapa ett professionellt köpekontrakt för bil, båt, möbler eller annan lös egendom.",
});

registerTemplate({
  slug: "kopekontrakt-bil",
  name: "Köpekontrakt Bil",
  description:
    "Köpekontrakt specifikt för bilförsäljning mellan privatpersoner. Innehåller fält för registreringsnummer, mätarställning, besiktning och fordonsuppgifter.",
  category: "köp-sälj",
  fields: kopekontraktBilFields,
  schema: kopekontraktBilSchema,
  htmlTemplate: "",
  seoTitle: "Köpekontrakt Bil Mall - Gratis PDF",
  seoDescription:
    "Gratis köpekontrakt för bil. Fyll i uppgifter om fordon, säljare och köpare online. Ladda ner som PDF direkt.",
});

registerTemplate({
  slug: "kopekontrakt-bat",
  name: "Köpekontrakt Båt",
  description:
    "Köpekontrakt för båtförsäljning mellan privatpersoner. Innehåller fält för båttyp, motor, HIN-nummer och tillbehör.",
  category: "köp-sälj",
  fields: kopekontraktBatFields,
  schema: kopekontraktBatSchema,
  htmlTemplate: "",
  seoTitle: "Köpekontrakt Båt Mall - Gratis PDF",
  seoDescription:
    "Gratis köpekontrakt för båt. Fyll i uppgifter om båt, motor, säljare och köpare. Ladda ner som PDF.",
});

registerTemplate({
  slug: "kopekontrakt-fastighet",
  name: "Köpekontrakt Fastighet",
  description:
    "Köpekontrakt för fastighetsförsäljning. Omfattar fastighetsbeteckning, köpevillkor, handpenning, låneförbehåll och besiktningsförbehåll.",
  category: "köp-sälj",
  fields: kopekontraktFastighetFields,
  schema: kopekontraktFastighetSchema,
  htmlTemplate: "",
  seoTitle: "Köpekontrakt Fastighet Mall - Gratis PDF",
  seoDescription:
    "Gratis köpekontrakt för fastighet. Skapa ett komplett köpekontrakt med handpenning, förbehåll och tillträdesdag.",
});

// === BOSTAD ===

registerTemplate({
  slug: "hyreskontrakt",
  name: "Hyreskontrakt",
  description:
    "Hyreskontrakt för uthyrning av bostad. Omfattar hyresvillkor, deposition, uppsägningstid och andra viktiga bestämmelser.",
  category: "bostad",
  fields: hyreskontraktFields,
  schema: hyreskontraktSchema,
  htmlTemplate: "",
  seoTitle: "Hyreskontrakt Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis hyreskontrakt mall. Skapa ett juridiskt korrekt hyresavtal med alla nödvändiga villkor för uthyrning av bostad.",
});

registerTemplate({
  slug: "andrahandsuthyrning",
  name: "Andrahandsuthyrning",
  description:
    "Avtal för andrahandsuthyrning av lägenhet. Innehåller uppgifter om förstahandshyresgäst, andrahandshyresgäst och hyresvillkor.",
  category: "bostad",
  fields: andrahandsuthyrningFields,
  schema: andrahandsuthyrningSchema,
  htmlTemplate: "",
  seoTitle: "Andrahandsuthyrning Mall - Gratis PDF",
  seoDescription:
    "Gratis mall för andrahandsuthyrning. Skapa ett korrekt andrahandskontrakt med alla villkor för uthyrning i andra hand.",
});

registerTemplate({
  slug: "uppsagning-hyresavtal",
  name: "Uppsägning av hyresavtal",
  description:
    "Mall för uppsägning av hyresavtal. Används av hyresgäst som vill säga upp sitt hyreskontrakt.",
  category: "bostad",
  fields: uppsagningHyresavtalFields,
  schema: uppsagningHyresavtalSchema,
  htmlTemplate: "",
  seoTitle: "Uppsägning Hyresavtal Mall - Gratis PDF",
  seoDescription:
    "Gratis mall för uppsägning av hyresavtal. Fyll i och ladda ner en korrekt uppsägning av ditt hyreskontrakt.",
});

registerTemplate({
  slug: "inneboendekontrakt",
  name: "Inneboendekontrakt",
  description:
    "Kontrakt för inneboende. Reglerar hyra, gemensamma utrymmen, regler och uppsägningstid när du hyr ut ett rum i din bostad.",
  category: "bostad",
  fields: inneboendekontraktFields,
  schema: inneboendekontraktSchema,
  htmlTemplate: "",
  seoTitle: "Inneboendekontrakt Mall - Gratis PDF",
  seoDescription:
    "Gratis inneboendekontrakt mall. Skapa ett korrekt avtal för inneboende med hyra, regler och uppsägningstid.",
});

// === ARBETE ===

registerTemplate({
  slug: "anstallningsavtal",
  name: "Anställningsavtal",
  description:
    "Anställningsavtal mellan arbetsgivare och arbetstagare. Innehåller befattning, lön, arbetstid, semester och uppsägningstid.",
  category: "arbete",
  fields: anstallningsavtalFields,
  schema: anstallningsavtalSchema,
  htmlTemplate: "",
  seoTitle: "Anställningsavtal Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis anställningsavtal mall. Skapa ett komplett anställningsavtal med alla viktiga villkor.",
});

registerTemplate({
  slug: "konsultavtal",
  name: "Konsultavtal",
  description:
    "Konsultavtal mellan uppdragsgivare och konsult. Omfattar uppdragsbeskrivning, arvode, sekretess och immateriella rättigheter.",
  category: "arbete",
  fields: konsultavtalFields,
  schema: konsultavtalSchema,
  htmlTemplate: "",
  seoTitle: "Konsultavtal Mall - Gratis PDF",
  seoDescription:
    "Gratis konsultavtal mall. Skapa ett professionellt konsultavtal med arvode, sekretess och IP-rättigheter.",
});

registerTemplate({
  slug: "sekretessavtal",
  name: "Sekretessavtal (NDA)",
  description:
    "Sekretessavtal (NDA) mellan två parter. Skyddar konfidentiell information vid affärssamarbeten och förhandlingar.",
  category: "arbete",
  fields: sekretessavtalFields,
  schema: sekretessavtalSchema,
  htmlTemplate: "",
  seoTitle: "Sekretessavtal Mall (NDA) - Gratis PDF",
  seoDescription:
    "Ladda ner gratis sekretessavtal (NDA) mall. Skydda er konfidentiella information med ett juridiskt korrekt sekretessavtal.",
});

registerTemplate({
  slug: "aktieagaravtal",
  name: "Aktieägaravtal",
  description:
    "Aktieägaravtal som reglerar förhållandet mellan delägare i aktiebolag. Omfattar beslutsfattande, överlåtelsebegränsningar, utdelningspolicy och exitklausuler.",
  category: "arbete",
  fields: aktieagaravtalFields,
  schema: aktieagaravtalSchema,
  htmlTemplate: "",
  seoTitle: "Aktieägaravtal Mall - Gratis PDF",
  seoDescription:
    "Gratis aktieägaravtal mall. Reglera förhållandet mellan delägare med beslutsordning, överlåtelseregler och exitklausuler.",
});

registerTemplate({
  slug: "samarbetsavtal",
  name: "Samarbetsavtal",
  description:
    "Samarbetsavtal mellan två företag eller parter. Reglerar syfte, ansvarsfördelning, intäktsfördelning, sekretess och immateriella rättigheter.",
  category: "arbete",
  fields: samarbetsavtalFields,
  schema: samarbetsavtalSchema,
  htmlTemplate: "",
  seoTitle: "Samarbetsavtal Mall - Gratis PDF",
  seoDescription:
    "Gratis samarbetsavtal mall. Skapa ett tydligt avtal för samarbete mellan företag med ansvarsfördelning och villkor.",
});

// === JURIDISKT ===

registerTemplate({
  slug: "fullmakt",
  name: "Fullmakt",
  description:
    "Fullmakt som ger en person rätt att agera för en annans räkning. Finns som generell, begränsad, bank- eller processfullmakt.",
  category: "juridiskt",
  fields: fullmaktFields,
  schema: fullmaktSchema,
  htmlTemplate: "",
  seoTitle: "Fullmakt Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis fullmakt mall. Skapa en juridiskt korrekt fullmakt - generell, begränsad eller bankfullmakt.",
});

registerTemplate({
  slug: "framtidsfullmakt",
  name: "Framtidsfullmakt",
  description:
    "Framtidsfullmakt enligt lagen (2017:310). Träder i kraft om du inte längre kan hantera dina angelägenheter på grund av sjukdom eller liknande.",
  category: "juridiskt",
  fields: framtidsfullmaktFields,
  schema: framtidsfullmaktSchema,
  htmlTemplate: "",
  seoTitle: "Framtidsfullmakt Mall - Gratis PDF",
  seoDescription:
    "Gratis framtidsfullmakt mall. Bestäm vem som ska ta hand om dina ärenden om du inte kan det själv.",
});

registerTemplate({
  slug: "testamente",
  name: "Testamente",
  description:
    "Testamente för att bestämma hur din kvarlåtenskap ska fördelas. Uppfyller ärvdabalkens formkrav.",
  category: "juridiskt",
  fields: testamenteFields,
  schema: testamenteSchema,
  htmlTemplate: "",
  seoTitle: "Testamente Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis testamente mall. Bestäm hur din kvarlåtenskap ska fördelas med ett juridiskt korrekt testamente.",
});

// === EKONOMI ===

registerTemplate({
  slug: "skuldebrev",
  name: "Skuldebrev",
  description:
    "Skuldebrev för privatlån mellan privatpersoner. Innehåller lånebelopp, ränta, återbetalningsplan och förfallodatum.",
  category: "ekonomi",
  fields: skuldebrevFields,
  schema: skuldebrevSchema,
  htmlTemplate: "",
  seoTitle: "Skuldebrev Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis skuldebrev mall. Dokumentera privatlån med ränta, amorteringsplan och tydliga villkor.",
});

registerTemplate({
  slug: "gavobrev",
  name: "Gåvobrev",
  description:
    "Gåvobrev för att dokumentera gåvor av pengar, fastigheter, bostadsrätter eller annan egendom. Möjlighet att ange enskild egendom.",
  category: "ekonomi",
  fields: gavobrevFields,
  schema: gavobrevSchema,
  htmlTemplate: "",
  seoTitle: "Gåvobrev Mall - Gratis PDF",
  seoDescription:
    "Gratis gåvobrev mall. Dokumentera gåvor av pengar, fastigheter eller egendom med rätt juridiska formalia.",
});

// === FAMILJ ===

registerTemplate({
  slug: "samboavtal",
  name: "Samboavtal",
  description:
    "Samboavtal som reglerar vad som sker med gemensam egendom vid en separation. Undanta bostad och bohag från bodelning.",
  category: "familj",
  fields: samboavtalFields,
  schema: samboavtalSchema,
  htmlTemplate: "",
  seoTitle: "Samboavtal Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis samboavtal mall. Reglera vad som händer med bostad och bohag vid separation.",
});

registerTemplate({
  slug: "aktenskapsforord",
  name: "Äktenskapsförord",
  description:
    "Äktenskapsförord som reglerar egendomsförhållanden mellan makar. Bestäm vad som ska vara enskild egendom respektive giftorättsgods.",
  category: "familj",
  fields: aktenskapsforordFields,
  schema: aktenskapsforordSchema,
  htmlTemplate: "",
  seoTitle: "Äktenskapsförord Mall - Gratis PDF",
  seoDescription:
    "Gratis äktenskapsförord mall. Bestäm vad som ska vara enskild egendom och skydda er ekonomi vid skilsmässa.",
});

registerTemplate({
  slug: "bodelningsavtal",
  name: "Bodelningsavtal",
  description:
    "Bodelningsavtal vid skilsmässa eller separation. Fördela tillgångar och skulder rättvist mellan parterna.",
  category: "familj",
  fields: bodelningsavtalFields,
  schema: bodelningsavtalSchema,
  htmlTemplate: "",
  seoTitle: "Bodelningsavtal Mall - Gratis PDF",
  seoDescription:
    "Ladda ner gratis bodelningsavtal mall. Fördela tillgångar och skulder korrekt vid skilsmässa eller separation.",
});

export function getTemplate(slug: string): TemplateConfig | undefined {
  return templates.get(slug);
}

export function getAllTemplates(): TemplateConfig[] {
  return Array.from(templates.values());
}

export function getTemplatesByCategory(
  category: string
): TemplateConfig[] {
  return getAllTemplates().filter((t) => t.category === category);
}

export function getRelatedTemplates(
  slug: string,
  limit: number = 3
): TemplateConfig[] {
  const template = getTemplate(slug);
  if (!template) return [];

  const sameCategory = getAllTemplates().filter(
    (t) => t.category === template.category && t.slug !== slug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const otherCategories = getAllTemplates().filter(
    (t) => t.category !== template.category
  );
  return [...sameCategory, ...otherCategories].slice(0, limit);
}

export function getCategories(): { slug: string; name: string }[] {
  return [
    { slug: "köp-sälj", name: "Köp & Sälj" },
    { slug: "bostad", name: "Bostad" },
    { slug: "arbete", name: "Arbete" },
    { slug: "juridiskt", name: "Juridiskt" },
    { slug: "ekonomi", name: "Ekonomi" },
    { slug: "familj", name: "Familj" },
  ];
}
