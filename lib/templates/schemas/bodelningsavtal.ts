import { z } from "zod";

export const bodelningsavtalSchema = z.object({
  part1_namn: z.string().min(1, "Ange namn"),
  part1_personnummer: z.string().min(1, "Ange personnummer"),
  part1_adress: z.string().min(1, "Ange adress"),

  part2_namn: z.string().min(1, "Ange namn"),
  part2_personnummer: z.string().min(1, "Ange personnummer"),
  part2_adress: z.string().min(1, "Ange adress"),

  anledning: z.string().min(1, "Välj anledning"),

  part1_tillgangar: z.string().min(1, "Lista Part 1 tillgångar"),
  part1_skulder: z.string().optional().default(""),
  part2_tillgangar: z.string().min(1, "Lista Part 2 tillgångar"),
  part2_skulder: z.string().optional().default(""),

  kompensation: z.string().optional().default(""),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
