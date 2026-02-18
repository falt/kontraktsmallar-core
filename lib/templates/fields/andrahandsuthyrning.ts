import type { TemplateField } from "../types";

export const andrahandsuthyrningFields: TemplateField[] = [
  // Hyresvärd (förstahandshyresgäst)
  {
    name: "hyresvard_namn",
    label: "Förstahandshyresgästens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Förstahandshyresgäst",
  },
  {
    name: "hyresvard_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Förstahandshyresgäst",
  },
  {
    name: "hyresvard_adress",
    label: "Kontaktadress",
    type: "text",
    required: true,
    placeholder: "Adress under uthyrningsperioden",
    section: "Förstahandshyresgäst",
  },
  {
    name: "hyresvard_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Förstahandshyresgäst",
  },

  // Andrahandshyresgäst
  {
    name: "hyresgast_namn",
    label: "Andrahandshyresgästens namn",
    type: "text",
    required: true,
    placeholder: "Förnamn Efternamn",
    section: "Andrahandshyresgäst",
  },
  {
    name: "hyresgast_personnummer",
    label: "Personnummer",
    type: "text",
    required: true,
    placeholder: "YYYYMMDD-XXXX",
    section: "Andrahandshyresgäst",
  },
  {
    name: "hyresgast_telefon",
    label: "Telefon",
    type: "phone",
    required: false,
    placeholder: "07X-XXX XX XX",
    section: "Andrahandshyresgäst",
  },
  {
    name: "hyresgast_email",
    label: "E-post",
    type: "email",
    required: false,
    placeholder: "namn@exempel.se",
    section: "Andrahandshyresgäst",
  },

  // Lägenheten
  {
    name: "objekt_adress",
    label: "Lägenhetens adress",
    type: "text",
    required: true,
    placeholder: "Gatuadress, lägenhetsnummer, ort",
    section: "Hyresobjekt",
  },
  {
    name: "objekt_storlek",
    label: "Storlek (kvm)",
    type: "number",
    required: true,
    placeholder: "55",
    section: "Hyresobjekt",
  },
  {
    name: "moblerad",
    label: "Möblerad",
    type: "select",
    required: true,
    section: "Hyresobjekt",
    options: [
      { value: "ja", label: "Ja - möblerad" },
      { value: "nej", label: "Nej - omöblerad" },
      { value: "delvis", label: "Delvis möblerad" },
    ],
  },

  // Villkor
  {
    name: "hyra",
    label: "Månadshyra (SEK)",
    type: "number",
    required: true,
    placeholder: "7500",
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
    name: "startdatum",
    label: "Startdatum",
    type: "date",
    required: true,
    section: "Hyresvillkor",
  },
  {
    name: "slutdatum",
    label: "Slutdatum",
    type: "date",
    required: true,
    section: "Hyresvillkor",
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
  {
    name: "godkannande",
    label: "Hyresvärdens/brf:s godkännande",
    type: "select",
    required: true,
    section: "Hyresvillkor",
    options: [
      { value: "ja", label: "Ja - godkännande inhämtat" },
      { value: "nej", label: "Nej - ännu ej inhämtat" },
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
      "Andrahandshyresgästen får inte utan hyresvärdens medgivande upplåta lägenheten till annan. Hyresvärdens godkännande av andrahandsuthyrningen har inhämtats. Andrahandshyresgästen ansvarar för eventuella skador utöver normalt slitage.",
  },
  {
    name: "ovriga_villkor",
    label: "Övriga villkor",
    type: "textarea",
    required: false,
    placeholder: "T.ex. husdjur ej tillåtet, rökning förbjuden...",
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
