import { z } from "zod";

export const sekretessavtalSchema = z.object({
  part1_namn: z.string().min(1, "Ange Part 1 namn"),
  part1_personnummer: z.string().min(1, "Ange personnummer/org.nr"),
  part1_adress: z.string().min(1, "Ange adress"),

  part2_namn: z.string().min(1, "Ange Part 2 namn"),
  part2_personnummer: z.string().min(1, "Ange personnummer/org.nr"),
  part2_adress: z.string().min(1, "Ange adress"),

  syfte: z.string().min(1, "Beskriv syftet"),
  konfidentiell_info: z.string().min(1, "Beskriv vilken information som omfattas"),
  sekretessperiod: z.string().min(1, "Välj sekretessperiod"),
  avtalstid: z.string().min(1, "Välj avtalstid"),
  vitesbelopp: z.coerce.number().optional().default(0),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
