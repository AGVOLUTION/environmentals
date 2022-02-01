import { Locale, Locales } from "../src/localization";
import { ensureDirSync, writeFileSync } from "fs-extra";
import { root } from "../src";

function getTranslations(locale: Locale) {
    const translations = Object.fromEntries(
        Array.from(root, (node) => [node.fqn, node.translation(locale)])
    );
    return translations;
}

function writeTranslationFile(locale: Locale) {
    const translations = getTranslations(locale);
    ensureDirSync("translations");
    writeFileSync(
        `translations/${locale}.json`,
        JSON.stringify(translations, undefined, 4)
    );
}

export function main() {
    Locales.map(writeTranslationFile);
}

main();
