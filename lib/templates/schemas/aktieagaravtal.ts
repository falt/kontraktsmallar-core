import { z } from "zod";

export const aktieagaravtalSchema = z.object({
  bolag_namn: z.string().min(1, "Ange bolagsnamn"),
  bolag_orgnr: z.string().min(1, "Ange organisationsnummer"),
  bolag_adress: z.string().min(1, "Ange adress"),
  totalt_aktier: z.coerce.number().positive("Ange totalt antal aktier"),

  agare1_namn: z.string().min(1, "Ange namn"),
  agare1_personnummer: z.string().min(1, "Ange personnummer/org.nr"),
  agare1_antal_aktier: z.coerce.number().positive("Ange antal aktier"),
  agare1_andel: z.coerce.number().min(0).max(100, "Ange giltig procent"),

  agare2_namn: z.string().min(1, "Ange namn"),
  agare2_personnummer: z.string().min(1, "Ange personnummer/org.nr"),
  agare2_antal_aktier: z.coerce.number().positive("Ange antal aktier"),
  agare2_andel: z.coerce.number().min(0).max(100, "Ange giltig procent"),

  forköpsratt: z.string().min(1, "Ange förköpsrätt"),
  hembudsklausul: z.string().min(1, "Ange hembudsklausul"),
  drag_along: z.string().min(1, "Ange drag-along"),
  tag_along: z.string().min(1, "Ange tag-along"),

  styrelseledamoter: z.coerce.number().positive("Ange antal ledamöter"),
  kvalificerad_majoritet: z.string().optional().default(""),

  utdelningspolicy: z.string().optional().default(""),
  konkurrensklausul: z.string().min(1, "Ange konkurrensförbud"),

  tvistlosning: z.string().min(1, "Välj tvistlösning"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
