
/**
 * ---------------------------------------------------------------------
 * Language setup
 * ---------------------------------------------------------------------
 * - Defines which language keys exist in localized fields.
 * - Currently supports English ("en") and German ("de").
 * - Can be extended with more keys (e.g., "da") by updating LocalizedString.
 */
export type Lang = keyof LocalizedString;

export interface LocalizedString {
  en: string;
  de: string;
}
