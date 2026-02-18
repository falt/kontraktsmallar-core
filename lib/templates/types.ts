import type { z } from "zod";

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "email"
  | "phone"
  | "select"
  | "checkbox";

export interface SelectOption {
  value: string;
  label: string;
}

export interface TemplateField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
  section: string;
  options?: SelectOption[];
  defaultValue?: string;
}

export interface TemplateConfig {
  slug: string;
  name: string;
  description: string;
  category: string;
  fields: TemplateField[];
  schema: z.ZodObject<Record<string, z.ZodType>>;
  htmlTemplate: string;
  seoTitle: string;
  seoDescription: string;
}

export type TemplateCategory =
  | "köp-sälj"
  | "bostad"
  | "arbete"
  | "juridiskt"
  | "ekonomi"
  | "familj";
