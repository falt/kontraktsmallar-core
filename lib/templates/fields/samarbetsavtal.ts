import type { TemplateField } from "../types";

export const samarbetsavtalFields: TemplateField[] = [
  // Part 1
  {
    name: "part1_namn",
    label: "Part 1 företagsnamn",
    type: "text",
    required: true,
    placeholder: "Företag AB",
    section: "Part 1",
  },
  {
    name: "part1_orgnr",
    label: "Organisationsnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
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
  {
    name: "part1_kontaktperson",
    label: "Kontaktperson",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Part 1",
  },

  // Part 2
  {
    name: "part2_namn",
    label: "Part 2 företagsnamn",
    type: "text",
    required: true,
    placeholder: "Företag AB",
    section: "Part 2",
  },
  {
    name: "part2_orgnr",
    label: "Organisationsnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
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
  {
    name: "part2_kontaktperson",
    label: "Kontaktperson",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Part 2",
  },

  // Samarbetet
  {
    name: "samarbetets_syfte",
    label: "Samarbetets syfte och omfattning",
    type: "textarea",
    required: true,
    placeholder: "Beskriv vad samarbetet avser och dess omfattning...",
    section: "Samarbetet",
  },
  {
    name: "part1_ansvar",
    label: "Part 1 ansvar och åtaganden",
    type: "textarea",
    required: true,
    placeholder: "Beskriv Part 1:s ansvar i samarbetet...",
    section: "Samarbetet",
  },
  {
    name: "part2_ansvar",
    label: "Part 2 ansvar och åtaganden",
    type: "textarea",
    required: true,
    placeholder: "Beskriv Part 2:s ansvar i samarbetet...",
    section: "Samarbetet",
  },

  // Period och ekonomi
  {
    name: "startdatum",
    label: "Startdatum",
    type: "date",
    required: true,
    section: "Period och ekonomi",
  },
  {
    name: "avtalstid",
    label: "Avtalstid",
    type: "select",
    required: true,
    section: "Period och ekonomi",
    options: [
      { value: "tillsvidare", label: "Tillsvidare" },
      { value: "6_manader", label: "6 månader" },
      { value: "1_ar", label: "1 år" },
      { value: "2_ar", label: "2 år" },
      { value: "3_ar", label: "3 år" },
    ],
  },
  {
    name: "intaktsfordelning",
    label: "Intäkts-/kostnadsfördelning",
    type: "textarea",
    required: false,
    placeholder: "T.ex. 50/50 fördelning av intäkter, vardera part bär sina kostnader...",
    section: "Period och ekonomi",
  },

  // Rättigheter
  {
    name: "immaterialratt",
    label: "Immateriella rättigheter",
    type: "select",
    required: true,
    section: "Rättigheter och sekretess",
    options: [
      { value: "gemensamt", label: "Gemensamt ägande" },
      { value: "respektive", label: "Respektive parts egendom" },
      { value: "specificeras", label: "Specificeras i avtalet" },
    ],
  },
  {
    name: "sekretess",
    label: "Sekretessklausul",
    type: "select",
    required: true,
    section: "Rättigheter och sekretess",
    options: [
      { value: "ja", label: "Ja - sekretess gäller" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "konkurrensklausul",
    label: "Exklusivitet / Konkurrensklausul",
    type: "select",
    required: true,
    section: "Rättigheter och sekretess",
    options: [
      { value: "exklusivt", label: "Exklusivt samarbete" },
      { value: "icke_exklusivt", label: "Icke-exklusivt" },
    ],
  },

  // Uppsägning
  {
    name: "uppsagningstid",
    label: "Uppsägningstid",
    type: "select",
    required: true,
    section: "Uppsägning",
    options: [
      { value: "1_manad", label: "1 månad" },
      { value: "2_manader", label: "2 månader" },
      { value: "3_manader", label: "3 månader" },
      { value: "6_manader", label: "6 månader" },
    ],
  },
  {
    name: "tvistlosning",
    label: "Tvistlösning",
    type: "select",
    required: true,
    section: "Uppsägning",
    options: [
      { value: "allmän_domstol", label: "Allmän domstol" },
      { value: "skiljedom", label: "Skiljeförfarande" },
      { value: "medling", label: "Medling först, sedan domstol" },
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
      "Parterna åtar sig att i god anda verka för samarbetets bästa. Vardera part ansvarar för sina egna kostnader om inget annat avtalats. Parterna ska regelbundet informera varandra om förhållanden av betydelse för samarbetet.",
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
