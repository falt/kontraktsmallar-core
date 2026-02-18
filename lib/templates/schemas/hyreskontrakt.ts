import { z } from "zod";

export const hyreskontraktSchema = z.object({
  hyresvard_namn: z.string().min(1, "Ange hyresvärdens namn"),
  hyresvard_personnummer: z.string().min(1, "Ange personnummer/org.nr"),
  hyresvard_adress: z.string().min(1, "Ange hyresvärdens adress"),
  hyresvard_telefon: z.string().optional().default(""),

  hyresgast_namn: z.string().min(1, "Ange hyresgästens namn"),
  hyresgast_personnummer: z.string().min(1, "Ange personnummer"),
  hyresgast_telefon: z.string().optional().default(""),
  hyresgast_email: z.string().optional().default(""),

  objekt_adress: z.string().min(1, "Ange lägenhetens adress"),
  objekt_typ: z.string().min(1, "Välj typ av bostad"),
  objekt_storlek: z.coerce.number().positive("Ange storlek"),
  antal_rum: z.string().min(1, "Välj antal rum"),

  hyra: z.coerce.number().positive("Ange månadshyra"),
  deposition: z.coerce.number().optional().default(0),
  betalningsdag: z.string().min(1, "Välj betalningsdag"),
  inflyttningsdatum: z.string().min(1, "Ange inflyttningsdatum"),
  kontraktstid: z.string().min(1, "Välj kontraktstid"),
  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
