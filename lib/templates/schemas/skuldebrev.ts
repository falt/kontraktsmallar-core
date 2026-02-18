import { z } from "zod";

export const skuldebrevSchema = z.object({
  langivare_namn: z.string().min(1, "Ange långivarens namn"),
  langivare_personnummer: z.string().min(1, "Ange personnummer"),
  langivare_adress: z.string().min(1, "Ange adress"),

  lantagare_namn: z.string().min(1, "Ange låntagarens namn"),
  lantagare_personnummer: z.string().min(1, "Ange personnummer"),
  lantagare_adress: z.string().min(1, "Ange adress"),

  lanebelopp: z.coerce.number().positive("Ange lånebelopp"),
  ranta: z.coerce.number().min(0, "Ange ränta"),
  rantetyp: z.string().min(1, "Välj räntetyp"),
  aterbetalning: z.string().min(1, "Välj återbetalningsplan"),
  forfallodag: z.string().min(1, "Ange förfallodatum"),
  utbetalningsdatum: z.string().min(1, "Ange utbetalningsdatum"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
