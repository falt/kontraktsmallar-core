import { z } from "zod";

export const samarbetsavtalSchema = z.object({
  part1_namn: z.string().min(1, "Ange företagsnamn"),
  part1_orgnr: z.string().min(1, "Ange organisationsnummer"),
  part1_adress: z.string().min(1, "Ange adress"),
  part1_kontaktperson: z.string().min(1, "Ange kontaktperson"),

  part2_namn: z.string().min(1, "Ange företagsnamn"),
  part2_orgnr: z.string().min(1, "Ange organisationsnummer"),
  part2_adress: z.string().min(1, "Ange adress"),
  part2_kontaktperson: z.string().min(1, "Ange kontaktperson"),

  samarbetets_syfte: z.string().min(1, "Beskriv samarbetets syfte"),
  part1_ansvar: z.string().min(1, "Beskriv Part 1:s ansvar"),
  part2_ansvar: z.string().min(1, "Beskriv Part 2:s ansvar"),

  startdatum: z.string().min(1, "Ange startdatum"),
  avtalstid: z.string().min(1, "Välj avtalstid"),
  intaktsfordelning: z.string().optional().default(""),

  immaterialratt: z.string().min(1, "Ange immateriella rättigheter"),
  sekretess: z.string().min(1, "Ange sekretess"),
  konkurrensklausul: z.string().min(1, "Ange exklusivitet"),

  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),
  tvistlosning: z.string().min(1, "Välj tvistlösning"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
