import { z } from "zod";

export const konsultavtalSchema = z.object({
  uppdragsgivare_namn: z.string().min(1, "Ange företagsnamn"),
  uppdragsgivare_orgnr: z.string().min(1, "Ange organisationsnummer"),
  uppdragsgivare_adress: z.string().min(1, "Ange adress"),
  uppdragsgivare_kontaktperson: z.string().min(1, "Ange kontaktperson"),

  konsult_namn: z.string().min(1, "Ange konsultens namn"),
  konsult_orgnr: z.string().min(1, "Ange org.nr/personnummer"),
  konsult_adress: z.string().min(1, "Ange adress"),
  konsult_kontaktperson: z.string().optional().default(""),

  uppdragsbeskrivning: z.string().min(1, "Beskriv uppdraget"),
  startdatum: z.string().min(1, "Ange startdatum"),
  slutdatum: z.string().optional().default(""),
  arbetsplats: z.string().optional().default(""),

  arvode: z.coerce.number().positive("Ange arvode"),
  arvodestyp: z.string().min(1, "Välj arvodestyp"),
  betalningsvillkor: z.string().min(1, "Välj betalningsvillkor"),

  sekretess: z.string().min(1, "Ange sekretess"),
  immaterialratt: z.string().min(1, "Ange immateriella rättigheter"),

  uppsagningstid: z.string().min(1, "Välj uppsägningstid"),

  standardvillkor: z.string().optional().default(""),
  ovriga_villkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
