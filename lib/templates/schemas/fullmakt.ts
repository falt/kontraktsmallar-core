import { z } from "zod";

export const fullmaktSchema = z.object({
  fullmaktsgivare_namn: z.string().min(1, "Ange fullmaktsgivarens namn"),
  fullmaktsgivare_personnummer: z.string().min(1, "Ange personnummer"),
  fullmaktsgivare_adress: z.string().min(1, "Ange adress"),
  fullmaktsgivare_telefon: z.string().optional().default(""),

  fullmaktig_namn: z.string().min(1, "Ange ombudets namn"),
  fullmaktig_personnummer: z.string().min(1, "Ange personnummer"),
  fullmaktig_adress: z.string().min(1, "Ange adress"),

  fullmaktstyp: z.string().min(1, "Välj typ av fullmakt"),
  fullmaktens_omfattning: z.string().min(1, "Beskriv fullmaktens omfattning"),
  giltighetstid: z.string().min(1, "Välj giltighetstid"),
  giltig_till: z.string().optional().default(""),

  standardvillkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
