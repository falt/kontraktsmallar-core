import { z } from "zod";

export const anstallningsavtalSchema = z.object({
  arbetsgivare_namn: z.string().min(1, "Ange företagsnamn"),
  arbetsgivare_orgnr: z.string().min(1, "Ange organisationsnummer"),
  arbetsgivare_adress: z.string().min(1, "Ange adress"),
  arbetsgivare_kontaktperson: z.string().optional().default(""),

  arbetstagare_namn: z.string().min(1, "Ange arbetstagarens namn"),
  arbetstagare_personnummer: z.string().min(1, "Ange personnummer"),
  arbetstagare_adress: z.string().min(1, "Ange adress"),

  befattning: z.string().min(1, "Ange befattning"),
  arbetsplats: z.string().min(1, "Ange arbetsplats"),
  anstallningsform: z.string().min(1, "Välj anställningsform"),
  tilltradadesdatum: z.string().min(1, "Ange tillträdesdatum"),
  arbetstid: z.string().min(1, "Välj arbetstid"),
  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),

  lon: z.coerce.number().positive("Ange månadslön"),
  loneutbetalning: z.string().min(1, "Välj löneutbetalningsdag"),
  semester: z.string().min(1, "Välj semesterdagar"),
  formaner: z.string().optional().default(""),

  kollektivavtal: z.string().min(1, "Ange om kollektivavtal gäller"),
  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
