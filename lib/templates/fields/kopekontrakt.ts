import type { TemplateField } from "../types";

export const kopekontraktFields: TemplateField[] = [
  // Säljare
  {
    name: "saljare_namn",
    label: "Säljarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Säljare",
  },
  {
    name: "saljare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Säljare",
  },
  {
    name: "saljare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Säljare",
  },
  {
    name: "saljare_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Säljare",
  },

  // Köpare
  {
    name: "kopare_namn",
    label: "Köparens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Köpare",
  },
  {
    name: "kopare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Köpare",
  },
  {
    name: "kopare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Köpare",
  },
  {
    name: "kopare_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Köpare",
  },

  // Objekt
  {
    name: "objekt_beskrivning",
    label: "Beskrivning av föremål",
    type: "textarea",
    required: true,
    placeholder: "T.ex. Volvo V70, 2018, reg.nr ABC 123",
    section: "Objekt",
  },
  {
    name: "objekt_skick",
    label: "Skick",
    type: "select",
    required: true,
    section: "Objekt",
    options: [
      { value: "nytt", label: "Nytt / oanvänt" },
      { value: "mycket_bra", label: "Mycket bra skick" },
      { value: "bra", label: "Bra skick" },
      { value: "acceptabelt", label: "Acceptabelt skick" },
      { value: "dåligt", label: "Dåligt skick" },
    ],
  },

  // Pris och betalning
  {
    name: "kopeskilling",
    label: "Köpeskilling (SEK)",
    type: "number",
    required: true,
    placeholder: "50000",
    section: "Pris och betalning",
  },
  {
    name: "betalningssatt",
    label: "Betalningssätt",
    type: "select",
    required: true,
    section: "Pris och betalning",
    options: [
      { value: "kontant", label: "Kontant" },
      { value: "bankoverföring", label: "Banköverföring" },
      { value: "swish", label: "Swish" },
    ],
  },
  {
    name: "betalningsdag",
    label: "Betalningsdag",
    type: "date",
    required: true,
    section: "Pris och betalning",
  },

  // Övriga villkor
  {
    name: "overlatelsedag",
    label: "Överlåtelsedag",
    type: "date",
    required: true,
    section: "Övriga villkor",
  },
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Övriga villkor",
    defaultValue:
      "Försäljningen sker i befintligt skick om inget annat anges. Köparen har besiktigat objektet och godkänner dess skick. Äganderätt och risk övergår till köparen vid överlåtelsetillfället. Säljaren garanterar att objektet inte är behäftat med skulder, panträtter eller andra belastningar.",
  },
  {
    name: "ovriga_villkor",
    label: "Övriga villkor",
    type: "textarea",
    required: false,
    placeholder: "Eventuella tilläggsvillkor...",
    section: "Övriga villkor",
  },
  {
    name: "ort",
    label: "Ort",
    type: "text",
    required: true,
    placeholder: "Stockholm",
    section: "Övriga villkor",
  },
  {
    name: "datum",
    label: "Datum",
    type: "date",
    required: true,
    section: "Övriga villkor",
  },
];
