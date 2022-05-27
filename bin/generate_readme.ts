import fs from "fs/promises";
import { getLeafs } from "../src/parameters";

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function main() {
    const leafText = getLeafs().map(
        (leaf) => `## ${leaf.fqn}

Property | Value
---------|-------
Name | ${leaf.translation("en-us")}
Description | ${leaf.description}
Unit | ${leaf.unit?.symbol}
${Object.entries(leaf.properties)
    .filter(
        ([key]) => !["name", "translation", "unit", "description"].includes(key)
    )
    .map(([key, value]) => `${capitalize(key)} | ${value}`)
    .join("\n")}
`
    );
    const content = `<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Environmental Documentation

${leafText.join("\n")}
    `;
    await fs.writeFile("./documentation.md", content);
}

(async function () {
    await main();
})();
