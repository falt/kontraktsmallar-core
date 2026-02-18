import { z } from "zod";

export const samboavtalSchema = z.object({
  sambo1_namn: z.string().min(1, "Ange namn"),
  sambo1_personnummer: z.string().min(1, "Ange personnummer"),
  sambo1_adress: z.string().min(1, "Ange adress"),

  sambo2_namn: z.string().min(1, "Ange namn"),
  sambo2_personnummer: z.string().min(1, "Ange personnummer"),
  sambo2_adress: z.string().min(1, "Ange adress"),

  gemensam_bostad: z.string().min(1, "Ange gemensam bostad"),
  bodelning_bostad: z.string().min(1, "Välj bostad vid bodelning"),
  bodelning_bohag: z.string().min(1, "Välj bohag vid bodelning"),
  sarskild_egendom: z.string().optional().default(""),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
