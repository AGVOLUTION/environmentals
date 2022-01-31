import { Locale, Locales } from "../src/localisation";
import { writeFile, ensureDir } from "fs-extra";
import { root } from "../src";

function getTranslations(locale: Locale) {
    const translations = Object.fromEntries(
        Array.from(root, (node) => [node.fqn, node.translation(locale)])
    );
    return translations;
}

async function writeTranslationFile(locale: Locale) {
    const translations = getTranslations(locale);
    await ensureDir("src/translations");
    await writeFile(`src/translations/${locale}.json`, JSON.stringify(translations, undefined, 4));
}

export async function main() {
    await Promise.all(Locales.map(writeTranslationFile));
}

(async function () {
    await main();
})();
