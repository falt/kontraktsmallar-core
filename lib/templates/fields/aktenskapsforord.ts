import type { TemplateField } from "../types";

export const aktenskapsforordFields: TemplateField[] = [
  // Make/Maka 1
  {
    name: "make1_namn",
    label: "Make/Maka 1 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Make/Maka 1",
  },
  {
    name: "make1_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Make/Maka 1",
  },
  {
    name: "make1_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Make/Maka 1",
  },

  // Make/Maka 2
  {
    name: "make2_namn",
    label: "Make/Maka 2 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Make/Maka 2",
  },
  {
    name: "make2_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Make/Maka 2",
  },
  {
    name: "make2_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Make/Maka 2",
  },

  // Status
  {
    name: "tidpunkt",
    label: "Tidpunkt för äktenskapsförord",
    type: "select",
    required: true,
    section: "Äktenskapsförord",
    options: [
      { value: "fore_giftermal", label: "Före giftermål" },
      { value: "under_aktenskap", label: "Under äktenskap" },
    ],
  },

  // Egendom
  {
    name: "reglering",
    label: "Reglering av egendom",
    type: "select",
    required: true,
    section: "Egendomsreglering",
    options: [
      { value: "all_enskild", label: "All egendom ska vara enskild" },
      { value: "viss_enskild", label: "Viss egendom ska vara enskild" },
      { value: "all_giftorattsgods", label: "All egendom ska vara giftorättsgods" },
    ],
  },
  {
    name: "make1_enskild",
    label: "Make/Maka 1 enskild egendom",
    type: "textarea",
    required: false,
    placeholder: "Lista egendom som ska vara enskild för Make/Maka 1...",
    section: "Egendomsreglering",
  },
  {
    name: "make2_enskild",
    label: "Make/Maka 2 enskild egendom",
    type: "textarea",
    required: false,
    placeholder: "Lista egendom som ska vara enskild för Make/Maka 2...",
    section: "Egendomsreglering",
  },
  {
    name: "avkastning",
    label: "Avkastning av enskild egendom",
    type: "select",
    required: true,
    section: "Egendomsreglering",
    options: [
      { value: "enskild", label: "Avkastning är också enskild egendom" },
      { value: "giftorattsgods", label: "Avkastning är giftorättsgods" },
    ],
  },

  // Övrigt
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Detta äktenskapsförord reglerar egendomsförhållanden mellan makarna enligt äktenskapsbalkens bestämmelser. Förordet ska registreras hos Skatteverket för att bli giltigt. Ändring av äktenskapsförord kräver nytt skriftligt avtal.",
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
