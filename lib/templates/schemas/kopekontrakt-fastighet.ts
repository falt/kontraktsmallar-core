import { z } from "zod";

export const kopekontraktFastighetSchema = z.object({
  saljare_namn: z.string().min(1, "Ange säljarens namn"),
  saljare_personnummer: z.string().min(1, "Ange personnummer"),
  saljare_adress: z.string().min(1, "Ange adress"),
  saljare_telefon: z.string().optional().default(""),

  kopare_namn: z.string().min(1, "Ange köparens namn"),
  kopare_personnummer: z.string().min(1, "Ange personnummer"),
  kopare_adress: z.string().min(1, "Ange adress"),
  kopare_telefon: z.string().optional().default(""),

  fastighetsbeteckning: z.string().min(1, "Ange fastighetsbeteckning"),
  fastighet_adress: z.string().min(1, "Ange fastighetens adress"),
  fastighetstyp: z.string().min(1, "Välj fastighetstyp"),
  areal: z.coerce.number().positive("Ange tomtareal"),
  boarea: z.coerce.number().optional().default(0),
  byggar: z.coerce.number().optional().default(0),

  kopeskilling: z.coerce.number().positive("Ange köpeskilling"),
  handpenning: z.coerce.number().positive("Ange handpenning"),
  handpenning_datum: z.string().min(1, "Ange datum för handpenning"),
  slutlikvid_datum: z.string().min(1, "Ange tillträdesdag"),

  laneforbehall: z.string().min(1, "Ange låneförbehåll"),
  laneforbehall_datum: z.string().optional().default(""),
  besiktningsforbehall: z.string().min(1, "Ange besiktningsförbehåll"),
  besiktning_datum: z.string().optional().default(""),

  tillbehor: z.string().optional().default(""),
  servitut: z.string().optional().default(""),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
