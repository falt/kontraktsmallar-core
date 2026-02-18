import type { TemplateField } from "../types";

export const skuldebrevFields: TemplateField[] = [
  // Långivare
  {
    name: "langivare_namn",
    label: "Långivarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Långivare",
  },
  {
    name: "langivare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Långivare",
  },
  {
    name: "langivare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Långivare",
  },

  // Låntagare
  {
    name: "lantagare_namn",
    label: "Låntagarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Låntagare",
  },
  {
    name: "lantagare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Låntagare",
  },
  {
    name: "lantagare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Låntagare",
  },

  // Lån
  {
    name: "lanebelopp",
    label: "Lånebelopp (SEK)",
    type: "number",
    required: true,
    placeholder: "100000",
    section: "Lånevillkor",
  },
  {
    name: "ranta",
    label: "Ränta (% per år)",
    type: "number",
    required: true,
    placeholder: "3.5",
    section: "Lånevillkor",
  },
  {
    name: "rantetyp",
    label: "Räntetyp",
    type: "select",
    required: true,
    section: "Lånevillkor",
    options: [
      { value: "fast", label: "Fast ränta" },
      { value: "rantefritt", label: "Räntefritt" },
    ],
  },
  {
    name: "aterbetalning",
    label: "Återbetalningsplan",
    type: "select",
    required: true,
    section: "Lånevillkor",
    options: [
      { value: "manadsvis", label: "Månadsvis amortering" },
      { value: "kvartalsvis", label: "Kvartalsvis amortering" },
      { value: "arsvis", label: "Årsvis amortering" },
      { value: "klumpsumma", label: "Klumpsumma vid förfall" },
    ],
  },
  {
    name: "forfallodag",
    label: "Slutligt förfallodatum",
    type: "date",
    required: true,
    section: "Lånevillkor",
  },
  {
    name: "utbetalningsdatum",
    label: "Utbetalningsdatum",
    type: "date",
    required: true,
    section: "Lånevillkor",
  },

  // Övrigt
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Låntagaren förbinder sig att återbetala lånet enligt överenskomna villkor. Vid utebliven betalning har långivaren rätt att kräva omedelbar återbetalning av hela det återstående beloppet. Dröjsmålsränta utgår enligt räntelagen om inte annat avtalats.",
  },
  {
    name: "ovriga_villkor",
    label: "Övriga villkor",
    type: "textarea",
    required: false,
    placeholder: "T.ex. säkerheter, möjlighet till förtida inlösen...",
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
