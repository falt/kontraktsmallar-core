import type { TemplateField } from "../types";

export const aktieagaravtalFields: TemplateField[] = [
  // Bolag
  {
    name: "bolag_namn",
    label: "Bolagsnamn",
    type: "text",
    required: true,
    placeholder: "AB Företaget",
    section: "Bolaget",
  },
  {
    name: "bolag_orgnr",
    label: "Organisationsnummer",
    type: "text",
    required: true,
    placeholder: "XXXXXX-XXXX",
    section: "Bolaget",
  },
  {
    name: "bolag_adress",
    label: "Säte/Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Bolaget",
  },
  {
    name: "totalt_aktier",
    label: "Totalt antal aktier",
    type: "number",
    required: true,
    placeholder: "1000",
    section: "Bolaget",
  },

  // Aktieägare 1
  {
    name: "agare1_namn",
    label: "Aktieägare 1 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Företag AB",
    section: "Aktieägare 1",
  },
  {
    name: "agare1_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX / XXXXXX-XXXX",
    section: "Aktieägare 1",
  },
  {
    name: "agare1_antal_aktier",
    label: "Antal aktier",
    type: "number",
    required: true,
    placeholder: "500",
    section: "Aktieägare 1",
  },
  {
    name: "agare1_andel",
    label: "Ägarandel (%)",
    type: "number",
    required: true,
    placeholder: "50",
    section: "Aktieägare 1",
  },

  // Aktieägare 2
  {
    name: "agare2_namn",
    label: "Aktieägare 2 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Företag AB",
    section: "Aktieägare 2",
  },
  {
    name: "agare2_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX / XXXXXX-XXXX",
    section: "Aktieägare 2",
  },
  {
    name: "agare2_antal_aktier",
    label: "Antal aktier",
    type: "number",
    required: true,
    placeholder: "500",
    section: "Aktieägare 2",
  },
  {
    name: "agare2_andel",
    label: "Ägarandel (%)",
    type: "number",
    required: true,
    placeholder: "50",
    section: "Aktieägare 2",
  },

  // Villkor
  {
    name: "forköpsratt",
    label: "Förköpsrätt vid försäljning",
    type: "select",
    required: true,
    section: "Överlåtelsebegränsningar",
    options: [
      { value: "ja", label: "Ja - övriga ägare har förköpsrätt" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "hembudsklausul",
    label: "Hembudsklausul",
    type: "select",
    required: true,
    section: "Överlåtelsebegränsningar",
    options: [
      { value: "ja", label: "Ja - hembud krävs" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "drag_along",
    label: "Drag-along (medförsäljningsplikt)",
    type: "select",
    required: true,
    section: "Överlåtelsebegränsningar",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "tag_along",
    label: "Tag-along (medförsäljningsrätt)",
    type: "select",
    required: true,
    section: "Överlåtelsebegränsningar",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
    ],
  },

  // Beslutsfattande
  {
    name: "styrelseledamoter",
    label: "Antal styrelseledamöter",
    type: "number",
    required: true,
    placeholder: "3",
    section: "Beslutsfattande",
  },
  {
    name: "kvalificerad_majoritet",
    label: "Beslut som kräver kvalificerad majoritet",
    type: "textarea",
    required: false,
    placeholder: "T.ex. nyemission, ändring av bolagsordning, försäljning av väsentliga tillgångar...",
    section: "Beslutsfattande",
  },

  // Utdelning och konkurrens
  {
    name: "utdelningspolicy",
    label: "Utdelningspolicy",
    type: "textarea",
    required: false,
    placeholder: "T.ex. minst 50% av årets vinst efter skatt...",
    section: "Utdelning och konkurrensförbud",
  },
  {
    name: "konkurrensklausul",
    label: "Konkurrensförbud",
    type: "select",
    required: true,
    section: "Utdelning och konkurrensförbud",
    options: [
      { value: "ja_1ar", label: "Ja - 1 år efter utträde" },
      { value: "ja_2ar", label: "Ja - 2 år efter utträde" },
      { value: "nej", label: "Nej" },
    ],
  },

  // Tvister
  {
    name: "tvistlosning",
    label: "Tvistlösning",
    type: "select",
    required: true,
    section: "Tvister",
    options: [
      { value: "allmän_domstol", label: "Allmän domstol" },
      { value: "skiljedom", label: "Skiljeförfarande" },
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
      "Detta aktieägaravtal reglerar förhållandet mellan aktieägarna och deras rättigheter och skyldigheter avseende bolaget. Avtalet kompletterar bolagsordningen. Vid motstridighet mellan avtalet och bolagsordningen ska avtalets bestämmelser gälla parterna emellan.",
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
