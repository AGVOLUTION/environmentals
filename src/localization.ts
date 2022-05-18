/// Module for simple l18n support

/**
 * List of supported locales
 */
export const Locales = ["en-us", "de-de"] as const;
/**
 * A single Locale language code
 */
export type Locale = typeof Locales[number];
/**
 * An object defining the translations according to their language code.
 *
 * If only a string provided, this value will be used for all languages.
 */
export type Translation =
    | {
          [k in typeof Locales[number]]: string;
      }
    | string;
