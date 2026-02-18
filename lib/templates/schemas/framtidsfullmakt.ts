import { z } from "zod";

export const framtidsfullmaktSchema = z.object({
  fullmaktsgivare_namn: z.string().min(1, "Ange fullmaktsgivarens namn"),
  fullmaktsgivare_personnummer: z.string().min(1, "Ange personnummer"),
  fullmaktsgivare_adress: z.string().min(1, "Ange adress"),

  fullmaktshavare_namn: z.string().min(1, "Ange fullmaktshavarens namn"),
  fullmaktshavare_personnummer: z.string().min(1, "Ange personnummer"),
  fullmaktshavare_adress: z.string().min(1, "Ange adress"),
  fullmaktshavare_relation: z.string().optional().default(""),

  ersattare_namn: z.string().optional().default(""),
  ersattare_personnummer: z.string().optional().default(""),

  ekonomiska_angelagenheter: z.string().min(1, "Ange ekonomiska angelägenheter"),
  personliga_angelagenheter: z.string().min(1, "Ange personliga angelägenheter"),
  fastighetsforsakrning: z.string().min(1, "Ange fastighetsrätt"),
  sarskilda_instruktioner: z.string().optional().default(""),

  granskare: z.string().min(1, "Välj granskare"),

  standardvillkor: z.string().optional().default(""),
  ort: z.string().min(1, "Ange ort"),
  datum: z.string().min(1, "Ange datum"),
});
