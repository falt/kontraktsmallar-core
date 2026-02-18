import { z } from "zod";

export const uppsagningHyresavtalSchema = z.object({
  avsandare_namn: z.string().min(1, "Ange ditt namn"),
  avsandare_personnummer: z.string().min(1, "Ange personnummer"),
  avsandare_adress: z.string().min(1, "Ange adress"),
  avsandare_telefon: z.string().optional().default(""),
  avsandare_email: z.string().optional().default(""),

  mottagare_namn: z.string().min(1, "Ange hyresvärdens namn"),
  mottagare_adress: z.string().min(1, "Ange hyresvärdens adress"),

  lagenhet_adress: z.string().min(1, "Ange lägenhetens adress"),
  kontraktsdatum: z.string().min(1, "Ange hyresavtalets datum"),
  uppsagningsorsak: z.string().min(1, "Välj orsak"),
  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),
  sista_hyresdag: z.string().min(1, "Ange sista hyresdag"),

  standardvillkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
