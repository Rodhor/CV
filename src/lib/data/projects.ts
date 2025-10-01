import projectJson from "./projects.json";

/**
 * ---------------------------------------------------------------------
 * Language setup
 * ---------------------------------------------------------------------
 * - Defines which language keys exist in localized fields.
 * - Currently supports English ("en") and German ("de").
 * - Can be extended with more keys (e.g., "da") by updating LocalizedString.
 */
type Lang = keyof LocalizedString;

interface LocalizedString {
  en: string;
  de: string;
}

/**
 * ---------------------------------------------------------------------
 * JSON schema interfaces
 * ---------------------------------------------------------------------
 * - These describe the raw JSON data shape as it exists in projects.json.
 * - LocalizedString is used for multi-language text fields.
 */
interface Link {
  label: string;
  url: string;
}

interface JSONProject {
  title: LocalizedString;
  descriptionShort: LocalizedString;
  descriptionLong: LocalizedString;
  technologies: string[];
  links: Link[];
  icon: string;
}

/**
 * ---------------------------------------------------------------------
 * Localized view interfaces
 * ---------------------------------------------------------------------
 * - These describe the flattened, language-specific representation.
 * - After transformation, all LocalizedString fields are converted
 *   into plain strings in the selected language.
 */
interface LocalizedProject {
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  technologies: string[];
  links: Link[];
  icon: string;
}

/**
 * ---------------------------------------------------------------------
 * Load JSON into typed constant
 * ---------------------------------------------------------------------
 * - Raw data loaded directly from projects.json.
 * - Matches JSONProject schema until transformed.
 */
const projects: JSONProject[] = projectJson.projects;

/**
 * ---------------------------------------------------------------------
 * Transformation helpers
 * ---------------------------------------------------------------------
 */

/**
 * Transform project entries into a language-specific representation.
 * - Returns a clean LocalizedProject[].
 */
export function getProjectsByLanguage(lang: Lang): LocalizedProject[] {
  return projects.map((p) => ({
    title: p.title[lang],
    descriptionShort: p.descriptionShort[lang],
    descriptionLong: p.descriptionLong[lang],
    technologies: p.technologies,
    links: p.links,
    icon: p.icon,
  }));
}
