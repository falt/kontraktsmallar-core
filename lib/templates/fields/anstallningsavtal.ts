import type { TemplateField } from "../types";

export const anstallningsavtalFields: TemplateField[] = [
  // Arbetsgivare
  {
    name: "arbetsgivare_namn",
    label: "Företagsnamn",
    type: "text",
    required: true,
    placeholder: "AB Företaget",
    section: "Arbetsgivare",
  },
  {
    name: "arbetsgivare_orgnr",
    label: "Organisationsnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
    section: "Arbetsgivare",
  },
  {
    name: "arbetsgivare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Arbetsgivare",
  },
  {
    name: "arbetsgivare_kontaktperson",
    label: "Kontaktperson",
    type: "text",
    required: false,
    placeholder: "Förnamn Efternamn",
    section: "Arbetsgivare",
  },

  // Arbetstagare
  {
    name: "arbetstagare_namn",
    label: "Arbetstagarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Arbetstagare",
  },
  {
    name: "arbetstagare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Arbetstagare",
  },
  {
    name: "arbetstagare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Arbetstagare",
  },

  // Anställning
  {
    name: "befattning",
    label: "Befattning/Titel",
    type: "text",
    required: true,
    placeholder: "T.ex. Systemutvecklare",
    section: "Anställningsvillkor",
  },
  {
    name: "arbetsplats",
    label: "Arbetsplats",
    type: "text",
    required: true,
    placeholder: "Kontorets adress",
    section: "Anställningsvillkor",
  },
  {
    name: "anstallningsform",
    label: "Anställningsform",
    type: "select",
    required: true,
    section: "Anställningsvillkor",
    options: [
      { value: "tillsvidare", label: "Tillsvidareanställning" },
      { value: "visstid", label: "Visstidsanställning" },
      { value: "provanstallning", label: "Provanställning (6 mån)" },
    ],
  },
  {
    name: "tilltradadesdatum",
    label: "Tillträdesdatum",
    type: "date",
    required: true,
    section: "Anställningsvillkor",
  },
  {
    name: "arbetstid",
    label: "Arbetstid",
    type: "select",
    required: true,
    section: "Anställningsvillkor",
    options: [
      { value: "heltid", label: "Heltid (40 tim/vecka)" },
      { value: "deltid_75", label: "Deltid 75%" },
      { value: "deltid_50", label: "Deltid 50%" },
    ],
  },
  {
    name: "uppsagningstid",
    label: "Uppsägningstid",
    type: "select",
    required: true,
    section: "Anställningsvillkor",
    options: [
      { value: "1_manad", label: "1 månad" },
      { value: "2_manader", label: "2 månader" },
      { value: "3_manader", label: "3 månader" },
    ],
  },

  // Lön
  {
    name: "lon",
    label: "Månadslön (SEK)",
    type: "number",
    required: true,
    placeholder: "35000",
    section: "Lön och förmåner",
  },
  {
    name: "loneutbetalning",
    label: "Löneutbetalningsdag",
    type: "select",
    required: true,
    section: "Lön och förmåner",
    options: [
      { value: "25", label: "Den 25:e varje månad" },
      { value: "sista", label: "Sista vardagen varje månad" },
    ],
  },
  {
    name: "semester",
    label: "Semesterdagar per år",
    type: "select",
    required: true,
    section: "Lön och förmåner",
    options: [
      { value: "25", label: "25 dagar" },
      { value: "28", label: "28 dagar" },
      { value: "30", label: "30 dagar" },
    ],
  },
  {
    name: "formaner",
    label: "Övriga förmåner",
    type: "textarea",
    required: false,
    placeholder: "T.ex. friskvårdsbidrag, tjänstepension, mobiltelefon...",
    section: "Lön och förmåner",
  },

  // Kollektivavtal
  {
    name: "kollektivavtal",
    label: "Kollektivavtal",
    type: "select",
    required: true,
    section: "Övrigt",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övrigt",
    defaultValue:
      "Anställningen regleras av detta avtal samt gällande arbetsrättslig lagstiftning. Arbetstagaren förbinder sig att inte under anställningstiden bedriva med arbetsgivaren konkurrerande verksamhet. Semesterrätt enligt semesterlagen.",
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
