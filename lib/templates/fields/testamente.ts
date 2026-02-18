import type { TemplateField } from "../types";

export const testamenteFields: TemplateField[] = [
  // Testator
  {
    name: "testator_namn",
    label: "Testators namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Testator",
  },
  {
    name: "testator_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Testator",
  },
  {
    name: "testator_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Testator",
  },
  {
    name: "civilstand",
    label: "Civilstånd",
    type: "select",
    required: true,
    section: "Testator",
    options: [
      { value: "ogift", label: "Ogift" },
      { value: "gift", label: "Gift" },
      { value: "sambo", label: "Sambo" },
      { value: "skild", label: "Skild" },
      { value: "ankling", label: "Änka/Änkling" },
    ],
  },

  // Testamentstagare 1
  {
    name: "mottagare1_namn",
    label: "Mottagare 1 namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Organisation",
    section: "Testamentstagare",
  },
  {
    name: "mottagare1_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: false,
    placeholder: "YYYYMMDD-XXXX",
    section: "Testamentstagare",
  },
  {
    name: "mottagare1_andel",
    label: "Andel / Specifik egendom",
    type: "textarea",
    required: true,
    placeholder: "T.ex. 50% av kvarlåtenskapen / Sommarstugan i Dalarna",
    section: "Testamentstagare",
  },

  // Testamentstagare 2 (valfri)
  {
    name: "mottagare2_namn",
    label: "Mottagare 2 namn (valfri)",
    type: "text",
    required: false,
    placeholder: "Förnamn Efternamn / Organisation",
    section: "Testamentstagare 2 (valfri)",
  },
  {
    name: "mottagare2_personnummer",
    label: "Personnummer / Org.nr",
    type: "text",
    required: false,
    placeholder: "YYYYMMDD-XXXX",
    section: "Testamentstagare 2 (valfri)",
  },
  {
    name: "mottagare2_andel",
    label: "Andel / Specifik egendom",
    type: "textarea",
    required: false,
    placeholder: "T.ex. resterande kvarlåtenskap",
    section: "Testamentstagare 2 (valfri)",
  },

  // Villkor
  {
    name: "enskild_egendom",
    label: "Ska arvet vara enskild egendom?",
    type: "select",
    required: true,
    section: "Villkor",
    options: [
      { value: "ja", label: "Ja - enskild egendom" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "sarskilda_onskemal",
    label: "Särskilda önskemål",
    type: "textarea",
    required: false,
    placeholder: "T.ex. önskemål om begravning, specifika fördelningar...",
    section: "Villkor",
  },

  // Underskrift
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Underskrift",
    defaultValue:
      "Detta testamente upphäver alla tidigare testamenten. Testamentet är upprättat i enlighet med ärvdabalkens formkrav och är bevittnat av två samtidigt närvarande vittnen som inte är jäviga.",
  },
  {
    name: "ort",
    label: "Ort",
    type: "text",
    required: true,
    placeholder: "Stockholm",
    section: "Underskrift",
  },
  {
    name: "datum",
    label: "Datum",
    type: "date",
    required: true,
    section: "Underskrift",
  },
];
