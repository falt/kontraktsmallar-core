import { z } from "zod";

export const kopekontraktBatSchema = z.object({
  saljare_namn: z.string().min(1, "Ange säljarens namn"),
  saljare_personnummer: z.string().min(1, "Ange personnummer"),
  saljare_adress: z.string().min(1, "Ange adress"),
  saljare_telefon: z.string().optional().default(""),

  kopare_namn: z.string().min(1, "Ange köparens namn"),
  kopare_personnummer: z.string().min(1, "Ange personnummer"),
  kopare_adress: z.string().min(1, "Ange adress"),
  kopare_telefon: z.string().optional().default(""),

  battyp: z.string().min(1, "Välj båttyp"),
  marke: z.string().min(1, "Ange märke"),
  modell: z.string().min(1, "Ange modell"),
  arsmodell: z.coerce.number().positive("Ange årsmodell"),
  langd: z.string().min(1, "Ange längd"),
  registreringsnummer: z.string().optional().default(""),
  hin_nummer: z.string().optional().default(""),

  motor_marke: z.string().optional().default(""),
  motor_effekt: z.coerce.number().optional().default(0),
  motor_timmar: z.coerce.number().optional().default(0),
  drivmedel: z.string().optional().default(""),

  kopeskilling: z.coerce.number().positive("Ange köpeskilling"),
  betalningssatt: z.string().min(1, "Välj betalningssätt"),
  betalningsdag: z.string().min(1, "Ange betalningsdag"),

  tillbehor: z.string().optional().default(""),
  skick: z.string().optional().default(""),

  overlatelsedag: z.string().min(1, "Ange överlåtelsedag"),
  forvaringsplats: z.string().optional().default(""),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
