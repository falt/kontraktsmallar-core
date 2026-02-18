import { getTemplate, getAllTemplates } from "./registry";
import type { TemplateConfig } from "./types";

const CURATED_POPULAR_SLUGS = [
  "kopekontrakt",
  "hyreskontrakt", 
  "anstallningsavtal",
  "fullmakt",
  "sekretessavtal",
  "samboavtal",
];

export function getPopularTemplates(limit: number = 6): TemplateConfig[] {
  return getCuratedTemplates(limit);
}

export function getMostPopularTemplate(): TemplateConfig {
  const popular = getPopularTemplates(1);
  return popular[0] ?? getAllTemplates()[0];
}

function getCuratedTemplates(limit: number): TemplateConfig[] {
  return CURATED_POPULAR_SLUGS.slice(0, limit)
    .map((slug) => getTemplate(slug))
    .filter((t): t is TemplateConfig => t !== undefined);
}
