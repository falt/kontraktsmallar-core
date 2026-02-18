import type { TemplateField } from "../types";

export const gavobrevFields: TemplateField[] = [
  // Givare
  {
    name: "givare_namn",
    label: "Givarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Givare",
  },
  {
    name: "givare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Givare",
  },
  {
    name: "givare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Givare",
  },

  // Mottagare
  {
    name: "mottagare_namn",
    label: "Mottagarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Mottagare",
  },
  {
    name: "mottagare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Mottagare",
  },
  {
    name: "mottagare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Mottagare",
  },

  // Gåva
  {
    name: "gava_beskrivning",
    label: "Beskrivning av gåvan",
    type: "textarea",
    required: true,
    placeholder: "T.ex. 500 000 kr kontant, aktier i AB Företaget...",
    section: "Gåva",
  },
  {
    name: "gava_varde",
    label: "Uppskattat värde (SEK)",
    type: "number",
    required: false,
    placeholder: "500000",
    section: "Gåva",
  },
  {
    name: "gava_typ",
    label: "Typ av gåva",
    type: "select",
    required: true,
    section: "Gåva",
    options: [
      { value: "pengar", label: "Pengar" },
      { value: "fastighet", label: "Fastighet" },
      { value: "bostadsratt", label: "Bostadsrätt" },
      { value: "los_egendom", label: "Lös egendom" },
      { value: "aktier", label: "Aktier/värdepapper" },
    ],
  },
  {
    name: "enskild_egendom",
    label: "Ska gåvan vara enskild egendom?",
    type: "select",
    required: true,
    section: "Gåva",
    options: [
      { value: "ja", label: "Ja - enskild egendom" },
      { value: "nej", label: "Nej - giftorättsgods" },
    ],
  },
  {
    name: "overlamnandedatum",
    label: "Överlämnandedatum",
    type: "date",
    required: true,
    section: "Gåva",
  },

  // Villkor
  {
    name: "villkor",
    label: "Eventuella villkor för gåvan",
    type: "textarea",
    required: false,
    placeholder: "T.ex. gåvan får inte säljas inom 5 år...",
    section: "Villkor",
  },
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Villkor",
    defaultValue:
      "Gåvan överlämnas utan villkor om inget annat anges nedan. Gåvan är mottagarens enskilda egendom om så anges. Gåvogivaren avstår från rätten att återkalla gåvan efter undertecknande.",
  },
  {
    name: "ort",
    label: "Ort",
    type: "text",
    required: true,
    placeholder: "Stockholm",
    section: "Villkor",
  },
  {
    name: "datum",
    label: "Datum",
    type: "date",
    required: true,
    section: "Villkor",
  },
];
