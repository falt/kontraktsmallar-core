import { z } from "zod";

export const kopekontraktSchema = z.object({
  // Säljare
  saljare_namn: z.string().min(1, "Ange säljarens namn"),
  saljare_personnummer: z.string().min(1, "Ange säljarens personnummer"),
  saljare_adress: z.string().min(1, "Ange säljarens adress"),
  saljare_telefon: z.string().optional().default(""),

  // Köpare
  kopare_namn: z.string().min(1, "Ange köparens namn"),
  kopare_personnummer: z.string().min(1, "Ange köparens personnummer"),
  kopare_adress: z.string().min(1, "Ange köparens adress"),
  kopare_telefon: z.string().optional().default(""),

  // Objekt
  objekt_beskrivning: z.string().min(1, "Beskriv föremålet"),
  objekt_skick: z.string().min(1, "Ange skick"),

  // Pris och betalning
  kopeskilling: z.coerce.number().positive("Ange en giltig köpeskilling"),
  betalningssatt: z.string().min(1, "Välj betalningssätt"),
  betalningsdag: z.string().min(1, "Ange betalningsdag"),

  // Övriga villkor
  overlatelsedag: z.string().min(1, "Ange överlåtelsedag"),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});

export type KopekontraktData = z.infer<typeof kopekontraktSchema>;
