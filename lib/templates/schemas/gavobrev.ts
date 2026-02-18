import { z } from "zod";

export const gavobrevSchema = z.object({
  givare_namn: z.string().min(1, "Ange givarens namn"),
  givare_personnummer: z.string().min(1, "Ange personnummer"),
  givare_adress: z.string().min(1, "Ange adress"),

  mottagare_namn: z.string().min(1, "Ange mottagarens namn"),
  mottagare_personnummer: z.string().min(1, "Ange personnummer"),
  mottagare_adress: z.string().min(1, "Ange adress"),

  gava_beskrivning: z.string().min(1, "Beskriv gåvan"),
  gava_varde: z.coerce.number().optional().default(0),
  gava_typ: z.string().min(1, "Välj typ av gåva"),
  enskild_egendom: z.string().min(1, "Ange om enskild egendom"),
  overlamnandedatum: z.string().min(1, "Ange överlämnandedatum"),

  villkor: z.string().optional().default(""),
  standardvillkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
