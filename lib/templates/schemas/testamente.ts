import { z } from "zod";

export const testamenteSchema = z.object({
  testator_namn: z.string().min(1, "Ange testators namn"),
  testator_personnummer: z.string().min(1, "Ange personnummer"),
  testator_adress: z.string().min(1, "Ange adress"),
  civilstand: z.string().min(1, "Ange civilstånd"),

  mottagare1_namn: z.string().min(1, "Ange mottagarens namn"),
  mottagare1_personnummer: z.string().optional().default(""),
  mottagare1_andel: z.string().min(1, "Ange andel eller egendom"),

  mottagare2_namn: z.string().optional().default(""),
  mottagare2_personnummer: z.string().optional().default(""),
  mottagare2_andel: z.string().optional().default(""),

  enskild_egendom: z.string().min(1, "Ange om enskild egendom"),
  sarskilda_onskemal: z.string().optional().default(""),

  standardvillkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
