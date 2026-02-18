import { z } from "zod";

export const kopekontraktBilSchema = z.object({
  saljare_namn: z.string().min(1, "Ange säljarens namn"),
  saljare_personnummer: z.string().min(1, "Ange personnummer"),
  saljare_adress: z.string().min(1, "Ange adress"),
  saljare_telefon: z.string().optional().default(""),

  kopare_namn: z.string().min(1, "Ange köparens namn"),
  kopare_personnummer: z.string().min(1, "Ange personnummer"),
  kopare_adress: z.string().min(1, "Ange adress"),
  kopare_telefon: z.string().optional().default(""),

  marke: z.string().min(1, "Ange märke"),
  modell: z.string().min(1, "Ange modell"),
  arsmodell: z.coerce.number().positive("Ange årsmodell"),
  registreringsnummer: z.string().min(1, "Ange registreringsnummer"),
  chassinummer: z.string().optional().default(""),
  matarstallning: z.coerce.number().min(0, "Ange mätarställning"),
  farg: z.string().optional().default(""),
  bransle: z.string().min(1, "Välj bränsletyp"),

  kopeskilling: z.coerce.number().positive("Ange köpeskilling"),
  betalningssatt: z.string().min(1, "Välj betalningssätt"),
  betalningsdag: z.string().min(1, "Ange betalningsdag"),

  besiktning: z.string().min(1, "Ange besiktningsstatus"),
  garantier: z.string().optional().default(""),

  overlatelsedag: z.string().min(1, "Ange överlåtelsedag"),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
