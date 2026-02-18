import { z } from "zod";

export const aktenskapsforordSchema = z.object({
  make1_namn: z.string().min(1, "Ange namn"),
  make1_personnummer: z.string().min(1, "Ange personnummer"),
  make1_adress: z.string().min(1, "Ange adress"),

  make2_namn: z.string().min(1, "Ange namn"),
  make2_personnummer: z.string().min(1, "Ange personnummer"),
  make2_adress: z.string().min(1, "Ange adress"),

  tidpunkt: z.string().min(1, "Ange tidpunkt"),

  reglering: z.string().min(1, "Välj reglering"),
  make1_enskild: z.string().optional().default(""),
  make2_enskild: z.string().optional().default(""),
  avkastning: z.string().min(1, "Välj avkastningsreglering"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
