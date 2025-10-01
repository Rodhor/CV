import cvJson from "./cv.json";

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
 * - These describe the raw JSON data shape as it exists in cv.json.
 * - They keep LocalizedString fields (e.g., position, degree) intact.
 */
interface JSONWorkPlace {
  organization: string;
  location: string;
  position: LocalizedString;
  startDate: string;
  endDate?: string;
  descriptionShort: LocalizedString;
  descriptionLong: LocalizedString;
  highlights?: LocalizedString[];
}

interface JSONEducation {
  organization: string;
  location: string;
  fieldOfStudy: LocalizedString;
  degree: LocalizedString;
  startDate: string;
  endDate?: string;
  descriptionShort: LocalizedString;
  descriptionLong: LocalizedString;
}

/**
 * ---------------------------------------------------------------------
 * Localized view interfaces
 * ---------------------------------------------------------------------
 * - These describe the flattened, language-specific representation.
 * - After transformation, all LocalizedString fields are converted
 *   into plain strings in the selected language.
 */
interface LocalizedWorkPlace {
  organization: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  descriptionShort: string;
  descriptionLong: string;
  highlights: string[];
}

interface LocalizedEducation {
  organization: string;
  location: string;
  fieldOfStudy: string;
  degree: string;
  startDate: string;
  endDate?: string;
  descriptionShort: string;
  descriptionLong: string;
}

/**
 * ---------------------------------------------------------------------
 * Load JSON into typed constants
 * ---------------------------------------------------------------------
 * - Split raw cv.json data into workplaces and education entries.
 * - These remain in their JSON representation until transformed.
 */
const workplaces: JSONWorkPlace[] = cvJson.work;
const education: JSONEducation[] = cvJson.education;

/**
 * ---------------------------------------------------------------------
 * Transformation helpers
 * ---------------------------------------------------------------------
 * - These functions flatten the raw JSON data into localized views.
 * - They accept a language key (Lang) and return only strings in that language.
 */

/**
 * Transform workplace entries into a language-specific representation.
 * - Converts highlights array into a plain string[] for the chosen language.
 */
export function getWorkspaceByLanguage(lang: Lang): LocalizedWorkPlace[] {
  return workplaces.map((wp) => ({
    organization: wp.organization,
    location: wp.location,
    position: wp.position[lang],
    startDate: wp.startDate,
    endDate: wp.endDate,
    descriptionShort: wp.descriptionShort[lang],
    descriptionLong: wp.descriptionLong[lang],
    highlights: wp.highlights?.map((h) => h[lang]) ?? [],
  }));
}

/**
 * Transform education entries into a language-specific representation.
 */
export function getEducationByLanguage(lang: Lang): LocalizedEducation[] {
  return education.map((e) => ({
    organization: e.organization,
    location: e.location,
    startDate: e.startDate,
    endDate: e.endDate,
    descriptionShort: e.descriptionShort[lang],
    descriptionLong: e.descriptionLong[lang],
    fieldOfStudy: e.fieldOfStudy[lang],
    degree: e.degree[lang],
  }));
}
