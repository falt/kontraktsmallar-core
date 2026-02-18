import type { TemplateField } from "../types";

export const fullmaktFields: TemplateField[] = [
  // Fullmaktsgivare
  {
    name: "fullmaktsgivare_namn",
    label: "Fullmaktsgivarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Fullmaktsgivare",
  },
  {
    name: "fullmaktsgivare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Fullmaktsgivare",
  },
  {
    name: "fullmaktsgivare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Fullmaktsgivare",
  },
  {
    name: "fullmaktsgivare_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Fullmaktsgivare",
  },

  // Fullmäktig (ombud)
  {
    name: "fullmaktig_namn",
    label: "Ombudets namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Fullmäktig (ombud)",
  },
  {
    name: "fullmaktig_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Fullmäktig (ombud)",
  },
  {
    name: "fullmaktig_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Fullmäktig (ombud)",
  },

  // Fullmaktens omfattning
  {
    name: "fullmaktstyp",
    label: "Typ av fullmakt",
    type: "select",
    required: true,
    section: "Fullmaktens omfattning",
    options: [
      { value: "generell", label: "Generell fullmakt" },
      { value: "begransad", label: "Begränsad fullmakt" },
      { value: "bankfullmakt", label: "Bankfullmakt" },
      { value: "processfullmakt", label: "Processfullmakt" },
    ],
  },
  {
    name: "fullmaktens_omfattning",
    label: "Detaljerad beskrivning",
    type: "textarea",
    required: true,
    placeholder: "Beskriv vad fullmäktigen har rätt att göra...",
    section: "Fullmaktens omfattning",
  },
  {
    name: "giltighetstid",
    label: "Giltighetstid",
    type: "select",
    required: true,
    section: "Fullmaktens omfattning",
    options: [
      { value: "tillsvidare", label: "Tillsvidare" },
      { value: "6_manader", label: "6 månader" },
      { value: "1_ar", label: "1 år" },
      { value: "specifikt_datum", label: "Till specifikt datum" },
    ],
  },
  {
    name: "giltig_till",
    label: "Giltig till och med",
    type: "date",
    required: false,
    section: "Fullmaktens omfattning",
  },

  // Underskrift
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Underskrift",
    defaultValue:
      "Fullmakten gäller tills den uttryckligen återkallas av fullmaktsgivaren. Fullmäktigen ska handla i fullmaktsgivarens intresse och inom ramen för fullmaktens omfattning.",
  },
  {
    name: "ort",
    label: "Ort",
    type: "text",
    required: true,
    placeholder: "Stockholm",
    section: "Underskrift",
  },
  {
    name: "datum",
    label: "Datum",
    type: "date",
    required: true,
    section: "Underskrift",
  },
];
