import { z } from "zod";

export const inneboendekontraktSchema = z.object({
  hyresvard_namn: z.string().min(1, "Ange hyresvärdens namn"),
  hyresvard_personnummer: z.string().min(1, "Ange personnummer"),
  hyresvard_telefon: z.string().optional().default(""),

  hyresgast_namn: z.string().min(1, "Ange inneboendes namn"),
  hyresgast_personnummer: z.string().min(1, "Ange personnummer"),
  hyresgast_telefon: z.string().optional().default(""),
  hyresgast_email: z.string().optional().default(""),

  bostad_adress: z.string().min(1, "Ange bostadens adress"),
  rum_beskrivning: z.string().min(1, "Beskriv rummet"),
  moblerad: z.string().min(1, "Ange möbleringsgrad"),
  gemensamma_utrymmen: z.string().optional().default(""),

  hyra: z.coerce.number().positive("Ange månadshyra"),
  hyra_inklusive: z.string().optional().default(""),
  deposition: z.coerce.number().optional().default(0),
  betalningsdag: z.string().min(1, "Välj betalningsdag"),
  inflyttningsdatum: z.string().min(1, "Ange inflyttningsdatum"),
  kontraktstid: z.string().min(1, "Välj kontraktstid"),
  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),

  husdjur: z.string().min(1, "Ange husdjur"),
  rokning: z.string().min(1, "Ange rökning"),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),

  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
