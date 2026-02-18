import type { TemplateField } from "../types";

export const bodelningsavtalFields: TemplateField[] = [
  // Part 1
  {
    name: "part1_namn",
    label: "Part 1 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Part 1",
  },
  {
    name: "part1_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
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
    label: "Part 2 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Part 2",
  },
  {
    name: "part2_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
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

  // Anledning
  {
    name: "anledning",
    label: "Anledning till bodelning",
    type: "select",
    required: true,
    section: "Bodelningen",
    options: [
      { value: "skilsmassa", label: "Skilsmässa" },
      { value: "separation_sambo", label: "Separation (sambor)" },
      { value: "under_aktenskap", label: "Under bestående äktenskap" },
    ],
  },

  // Egendom Part 1
  {
    name: "part1_tillgangar",
    label: "Part 1 tillgångar",
    type: "textarea",
    required: true,
    placeholder: "Lista tillgångar med värde, t.ex. Bostad: 2 000 000 kr, Bil: 150 000 kr...",
    section: "Egendomsfördelning",
  },
  {
    name: "part1_skulder",
    label: "Part 1 skulder",
    type: "textarea",
    required: false,
    placeholder: "Lista skulder med belopp...",
    section: "Egendomsfördelning",
  },

  // Egendom Part 2
  {
    name: "part2_tillgangar",
    label: "Part 2 tillgångar",
    type: "textarea",
    required: true,
    placeholder: "Lista tillgångar med värde...",
    section: "Egendomsfördelning",
  },
  {
    name: "part2_skulder",
    label: "Part 2 skulder",
    type: "textarea",
    required: false,
    placeholder: "Lista skulder med belopp...",
    section: "Egendomsfördelning",
  },

  // Kompensation
  {
    name: "kompensation",
    label: "Bodelningslikvid / Kompensation",
    type: "textarea",
    required: false,
    placeholder: "T.ex. Part 1 betalar 200 000 kr till Part 2...",
    section: "Kompensation",
  },

  // Övrigt
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Parterna har i samförstånd kommit överens om fördelning av gemensam egendom enligt nedan. Genom undertecknande av detta avtal förklarar båda parter att bodelningen är slutgiltig och att inga ytterligare anspråk kan riktas mot den andra parten avseende den egendom som omfattas av avtalet.",
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
