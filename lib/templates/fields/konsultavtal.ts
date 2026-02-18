import type { TemplateField } from "../types";

export const konsultavtalFields: TemplateField[] = [
  // Uppdragsgivare
  {
    name: "uppdragsgivare_namn",
    label: "Uppdragsgivarens företagsnamn",
    type: "text",
    required: true,
    placeholder: "AB Företaget",
    section: "Uppdragsgivare",
  },
  {
    name: "uppdragsgivare_orgnr",
    label: "Organisationsnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
    section: "Uppdragsgivare",
  },
  {
    name: "uppdragsgivare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Uppdragsgivare",
  },
  {
    name: "uppdragsgivare_kontaktperson",
    label: "Kontaktperson",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Uppdragsgivare",
  },

  // Konsult
  {
    name: "konsult_namn",
    label: "Konsultens namn/företag",
    type: "text",
    required: true,
    placeholder: "Konsulten AB / Förnamn Efternamn",
    section: "Konsult",
  },
  {
    name: "konsult_orgnr",
    label: "Organisationsnummer / Personnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
    section: "Konsult",
  },
  {
    name: "konsult_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Konsult",
  },
  {
    name: "konsult_kontaktperson",
    label: "Kontaktperson (om företag)",
    type: "text",
    required: false,
    placeholder: "Förnamn Efternamn",
    section: "Konsult",
  },

  // Uppdraget
  {
    name: "uppdragsbeskrivning",
    label: "Uppdragsbeskrivning",
    type: "textarea",
    required: true,
    placeholder: "Beskriv uppdraget i detalj...",
    section: "Uppdraget",
  },
  {
    name: "startdatum",
    label: "Startdatum",
    type: "date",
    required: true,
    section: "Uppdraget",
  },
  {
    name: "slutdatum",
    label: "Slutdatum",
    type: "date",
    required: false,
    section: "Uppdraget",
  },
  {
    name: "arbetsplats",
    label: "Arbetsplats",
    type: "text",
    required: false,
    placeholder: "T.ex. kundens kontor, distans",
    section: "Uppdraget",
  },

  // Ersättning
  {
    name: "arvode",
    label: "Arvode (SEK exkl. moms)",
    type: "number",
    required: true,
    placeholder: "850",
    section: "Ersättning",
  },
  {
    name: "arvodestyp",
    label: "Arvodestyp",
    type: "select",
    required: true,
    section: "Ersättning",
    options: [
      { value: "per_timme", label: "Per timme" },
      { value: "fast_pris", label: "Fast pris" },
      { value: "per_manad", label: "Per månad" },
    ],
  },
  {
    name: "betalningsvillkor",
    label: "Betalningsvillkor",
    type: "select",
    required: true,
    section: "Ersättning",
    options: [
      { value: "15_dagar", label: "15 dagar netto" },
      { value: "30_dagar", label: "30 dagar netto" },
      { value: "forskott", label: "Förskottsbetalning" },
    ],
  },

  // Sekretess och IP
  {
    name: "sekretess",
    label: "Sekretessklausul",
    type: "select",
    required: true,
    section: "Sekretess och rättigheter",
    options: [
      { value: "ja", label: "Ja - sekretess gäller" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "immaterialratt",
    label: "Immateriella rättigheter tillfaller",
    type: "select",
    required: true,
    section: "Sekretess och rättigheter",
    options: [
      { value: "uppdragsgivare", label: "Uppdragsgivaren" },
      { value: "konsult", label: "Konsulten" },
      { value: "gemensamt", label: "Gemensamt" },
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
      "Konsulten utför uppdraget som självständig uppdragstagare och är inte att betrakta som anställd. Konsulten ansvarar själv för skatter och sociala avgifter. Immateriella rättigheter till arbetsresultat tillfaller uppdragsgivaren om inget annat avtalats.",
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
