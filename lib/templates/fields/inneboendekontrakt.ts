import type { TemplateField } from "../types";

export const inneboendekontraktFields: TemplateField[] = [
  // Hyresvärd
  {
    name: "hyresvard_namn",
    label: "Hyresvärdens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Hyresvärd",
  },
  {
    name: "hyresvard_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Hyresvärd",
  },
  {
    name: "hyresvard_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Hyresvärd",
  },

  // Inneboende
  {
    name: "hyresgast_namn",
    label: "Inneboendes namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Inneboende",
  },
  {
    name: "hyresgast_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Inneboende",
  },
  {
    name: "hyresgast_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Inneboende",
  },
  {
    name: "hyresgast_email",
    label: "E-post",
    type: "email",
    required: false,
    placeholder: "namn@exempel.se",
    section: "Inneboende",
  },

  // Bostaden
  {
    name: "bostad_adress",
    label: "Bostadens adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Bostaden",
  },
  {
    name: "rum_beskrivning",
    label: "Rum som hyrs ut",
    type: "text",
    required: true,
    placeholder: "T.ex. Sovrum 2, ca 12 kvm",
    section: "Bostaden",
  },
  {
    name: "moblerad",
    label: "Möblerat",
    type: "select",
    required: true,
    section: "Bostaden",
    options: [
      { value: "ja", label: "Ja - möblerat" },
      { value: "nej", label: "Nej - omöblerat" },
    ],
  },
  {
    name: "gemensamma_utrymmen",
    label: "Tillgång till gemensamma utrymmen",
    type: "textarea",
    required: false,
    placeholder: "T.ex. kök, badrum, vardagsrum, tvättstuga...",
    section: "Bostaden",
  },

  // Villkor
  {
    name: "hyra",
    label: "Månadshyra (SEK)",
    type: "number",
    required: true,
    placeholder: "4500",
    section: "Hyresvillkor",
  },
  {
    name: "hyra_inklusive",
    label: "Hyran inkluderar",
    type: "textarea",
    required: false,
    placeholder: "T.ex. el, vatten, wifi, städning av gemensamma utrymmen...",
    section: "Hyresvillkor",
  },
  {
    name: "deposition",
    label: "Deposition (SEK)",
    type: "number",
    required: false,
    placeholder: "0",
    section: "Hyresvillkor",
  },
  {
    name: "betalningsdag",
    label: "Betalningsdag",
    type: "select",
    required: true,
    section: "Hyresvillkor",
    options: [
      { value: "sista", label: "Sista vardagen" },
      { value: "1", label: "Den 1:a" },
      { value: "25", label: "Den 25:e" },
    ],
  },
  {
    name: "inflyttningsdatum",
    label: "Inflyttningsdatum",
    type: "date",
    required: true,
    section: "Hyresvillkor",
  },
  {
    name: "kontraktstid",
    label: "Kontraktstid",
    type: "select",
    required: true,
    section: "Hyresvillkor",
    options: [
      { value: "tillsvidare", label: "Tillsvidare" },
      { value: "3_manader", label: "3 månader" },
      { value: "6_manader", label: "6 månader" },
      { value: "1_ar", label: "1 år" },
    ],
  },
  {
    name: "uppsagningstid",
    label: "Uppsägningstid",
    type: "select",
    required: true,
    section: "Hyresvillkor",
    options: [
      { value: "1_manad", label: "1 månad" },
      { value: "2_manader", label: "2 månader" },
      { value: "3_manader", label: "3 månader" },
    ],
  },

  // Regler
  {
    name: "husdjur",
    label: "Husdjur tillåtet",
    type: "select",
    required: true,
    section: "Regler",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
    ],
  },
  {
    name: "rokning",
    label: "Rökning tillåten",
    type: "select",
    required: true,
    section: "Regler",
    options: [
      { value: "ja", label: "Ja" },
      { value: "nej", label: "Nej" },
      { value: "utomhus", label: "Endast utomhus" },
    ],
  },
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Regler",
    defaultValue:
      "Den inneboende förbinder sig att följa bostadens ordningsregler och visa hänsyn till övriga boende. Rummet får inte upplåtas till annan person. Den inneboende ansvarar för skador som uppstår genom eget vållande.",
  },
  {
    name: "ovriga_villkor",
    label: "Övriga villkor och regler",
    type: "textarea",
    required: false,
    placeholder: "T.ex. tystnad efter kl 22, besök, nycklar...",
    section: "Regler",
  },

  // Underskrift
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
