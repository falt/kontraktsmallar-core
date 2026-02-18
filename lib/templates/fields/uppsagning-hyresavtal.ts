import type { TemplateField } from "../types";

export const uppsagningHyresavtalFields: TemplateField[] = [
  // Avsändare
  {
    name: "avsandare_namn",
    label: "Avsändarens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Avsändare",
  },
  {
    name: "avsandare_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Avsändare",
  },
  {
    name: "avsandare_adress",
    label: "Nuvarande adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Avsändare",
  },
  {
    name: "avsandare_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Avsändare",
  },
  {
    name: "avsandare_email",
    label: "E-post",
    type: "email",
    required: false,
    placeholder: "namn@exempel.se",
    section: "Avsändare",
  },

  // Mottagare (hyresvärd)
  {
    name: "mottagare_namn",
    label: "Hyresvärdens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn / Fastighetsbolaget AB",
    section: "Mottagare (hyresvärd)",
  },
  {
    name: "mottagare_adress",
    label: "Adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, postnummer, ort",
    section: "Mottagare (hyresvärd)",
  },

  // Hyresavtal
  {
    name: "lagenhet_adress",
    label: "Lägenhetens adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, lägenhetsnummer",
    section: "Hyresavtalet",
  },
  {
    name: "kontraktsdatum",
    label: "Hyresavtalets datum",
    type: "date",
    required: true,
    section: "Hyresavtalet",
  },
  {
    name: "uppsagningsorsak",
    label: "Orsak till uppsägning",
    type: "select",
    required: true,
    section: "Hyresavtalet",
    options: [
      { value: "flytt", label: "Flytt" },
      { value: "personliga_skal", label: "Personliga skäl" },
      { value: "arbete", label: "Arbetsrelaterad flytt" },
      { value: "annat", label: "Annat" },
    ],
  },
  {
    name: "uppsagningstid",
    label: "Uppsägningstid",
    type: "select",
    required: true,
    section: "Hyresavtalet",
    options: [
      { value: "1_manad", label: "1 månad" },
      { value: "2_manader", label: "2 månader" },
      { value: "3_manader", label: "3 månader" },
    ],
  },
  {
    name: "sista_hyresdag",
    label: "Önskat sista hyresdag",
    type: "date",
    required: true,
    section: "Hyresavtalet",
  },

  // Underskrift
  {
    name: "standardvillkor",
    label: "Standardvillkor",
    type: "textarea",
    required: false,
    section: "Underskrift",
    defaultValue:
      "Uppsägningen sker i enlighet med hyresavtalets bestämmelser och gällande lagstiftning. Hyresgästen ansvarar för att lägenheten är städad och i gott skick vid avflyttning.",
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
