import type { TemplateField } from "../types";

export const framtidsfullmaktFields: TemplateField[] = [
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

  // Fullmaktshavare
  {
    name: "fullmaktshavare_namn",
    label: "Fullmaktshavarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Fullmaktshavare",
  },
  {
    name: "fullmaktshavare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Fullmaktshavare",
  },
  {
    name: "fullmaktshavare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Fullmaktshavare",
  },
  {
    name: "fullmaktshavare_relation",
    label: "Relation till fullmaktsgivare",
    type: "text",
    required: false,
    placeholder: "T.ex. barn, make/maka, vän",
    section: "Fullmaktshavare",
  },

  // Ersättare (valfri)
  {
    name: "ersattare_namn",
    label: "Ersättare namn (valfri)",
    type: "text",
    required: false,
    placeholder: "Förnamn Efternamn",
    section: "Ersättare (valfri)",
  },
  {
    name: "ersattare_personnummer",
    label: "Personnummer",
    type: "text",
    required: false,
    placeholder: "YYYYMMDD-XXXX",
    section: "Ersättare (valfri)",
  },

  // Omfattning
  {
    name: "ekonomiska_angelagenheter",
    label: "Ekonomiska angelägenheter",
    type: "select",
    required: true,
    section: "Fullmaktens omfattning",
    options: [
      { value: "ja", label: "Ja - ingår" },
      { value: "nej", label: "Nej - ingår ej" },
    ],
  },
  {
    name: "personliga_angelagenheter",
    label: "Personliga angelägenheter",
    type: "select",
    required: true,
    section: "Fullmaktens omfattning",
    options: [
      { value: "ja", label: "Ja - ingår" },
      { value: "nej", label: "Nej - ingår ej" },
    ],
  },
  {
    name: "fastighetsforsakrning",
    label: "Rätt att sälja fastighet/bostadsrätt",
    type: "select",
    required: true,
    section: "Fullmaktens omfattning",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "sarskilda_instruktioner",
    label: "Särskilda instruktioner",
    type: "textarea",
    required: false,
    placeholder: "T.ex. begränsningar, önskemål om vård...",
    section: "Fullmaktens omfattning",
  },

  // Granskning
  {
    name: "granskare",
    label: "Granskare av fullmaktshavaren",
    type: "select",
    required: true,
    section: "Granskning",
    options: [
      { value: "overformyndarnamnden", label: "Överförmyndarnämnden" },
      { value: "namngiven_person", label: "Namngiven person" },
      { value: "ingen", label: "Ingen särskild granskare" },
    ],
  },

  // Underskrift
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Underskrift",
    defaultValue:
      "Denna framtidsfullmakt träder i kraft den dag fullmaktsgivaren på grund av sjukdom, psykisk störning, försvagat hälsotillstånd eller liknande förhållande varaktigt och i huvudsak inte längre kan ha hand om de angelägenheter som fullmakten avser. Fullmakten gäller enligt lagen (2017:310) om framtidsfullmakter.",
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
