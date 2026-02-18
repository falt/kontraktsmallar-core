import type { TemplateField } from "../types";

export const samboavtalFields: TemplateField[] = [
  // Sambo 1
  {
    name: "sambo1_namn",
    label: "Sambo 1 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Sambo 1",
  },
  {
    name: "sambo1_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Sambo 1",
  },
  {
    name: "sambo1_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Sambo 1",
  },

  // Sambo 2
  {
    name: "sambo2_namn",
    label: "Sambo 2 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Sambo 2",
  },
  {
    name: "sambo2_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Sambo 2",
  },
  {
    name: "sambo2_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Sambo 2",
  },

  // Avtalets innehåll
  {
    name: "gemensam_bostad",
    label: "Gemensam bostad",
    type: "text",
    required: true,
    placeholder: "Adress till gemensam bostad",
    section: "Samboegendom",
  },
  {
    name: "bodelning_bostad",
    label: "Bostad vid bodelning",
    type: "select",
    required: true,
    section: "Samboegendom",
    options: [
      { value: "undantas", label: "Undantas helt från bodelning" },
      { value: "ingar", label: "Ingår i bodelning" },
    ],
  },
  {
    name: "bodelning_bohag",
    label: "Bohag vid bodelning",
    type: "select",
    required: true,
    section: "Samboegendom",
    options: [
      { value: "undantas", label: "Undantas helt från bodelning" },
      { value: "ingar", label: "Ingår i bodelning" },
    ],
  },
  {
    name: "sarskild_egendom",
    label: "Egendom som undantas",
    type: "textarea",
    required: false,
    placeholder: "Lista specifik egendom som undantas från bodelning...",
    section: "Samboegendom",
  },

  // Övrigt
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Detta samboavtal innebär att samboegendom helt eller delvis undantas från bodelning enligt sambolagen (2003:376). Avtalet gäller från undertecknandet och tills det ersätts av nytt avtal eller upphävs skriftligen av båda parter.",
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
