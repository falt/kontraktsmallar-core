import { z } from "zod";

export const andrahandsuthyrningSchema = z.object({
  hyresvard_namn: z.string().min(1, "Ange förstahandshyresgästens namn"),
  hyresvard_personnummer: z.string().min(1, "Ange personnummer"),
  hyresvard_adress: z.string().min(1, "Ange kontaktadress"),
  hyresvard_telefon: z.string().optional().default(""),

  hyresgast_namn: z.string().min(1, "Ange andrahandshyresgästens namn"),
  hyresgast_personnummer: z.string().min(1, "Ange personnummer"),
  hyresgast_telefon: z.string().optional().default(""),
  hyresgast_email: z.string().optional().default(""),

  objekt_adress: z.string().min(1, "Ange lägenhetens adress"),
  objekt_storlek: z.coerce.number().positive("Ange storlek"),
  moblerad: z.string().min(1, "Ange möbleringsgrad"),

  hyra: z.coerce.number().positive("Ange månadshyra"),
  deposition: z.coerce.number().optional().default(0),
  startdatum: z.string().min(1, "Ange startdatum"),
  slutdatum: z.string().min(1, "Ange slutdatum"),
  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),
  godkannande: z.string().min(1, "Ange godkännande"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
