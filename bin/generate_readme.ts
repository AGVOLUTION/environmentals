import fs from "fs/promises";
import { getLeafs } from "../src/parameters";
import { ENV } from "../src/parameters/env/base";

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function english() {
    const leafText = getLeafs().map(
        (leaf) => `## ${leaf.fqn}

Property | Value
---------|-------
Name | ${leaf.translation("en-us")}
Description | ${leaf.description}
Unit | ${leaf.unit?.symbol}
${Object.entries(leaf.properties)
    .filter(
        ([key]) =>
            !["name", "translation", "unit", "description", "models"].includes(
                key
            )
    )
    .map(([key, value]) => `${capitalize(key)} | ${value}`)
    .join("\n")}
${
    (leaf as ENV).properties.models
        ?.map(
            (model) =>
                `Model | ${model.name}: ${model.withParameter(leaf as ENV).fqn}`
        )
        .join("\n") ?? ""
}
`
    );
    const content = `<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Environmental Documentation

[Deutsch](./documentation-german.md)

${leafText.join("\n")}
    `;
    await fs.writeFile("./documentation.md", content);
    // also write a copy to the documentation folder, where it will be included
    // in the techdocs
    await fs.writeFile("./documentation/parameters.md", content);
}

async function german() {
    const leafText = getLeafs().map(
        (leaf) => `## ${leaf.fqn}

Eigenschaft | Wert
---------|-------
Name | ${leaf.translation("de-de")}
Einheit | ${leaf.unit?.symbol}
`
    );
    const content = `<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Dokumentation der Umweltparameter

[English](./documentation.md)

${leafText.join("\n")}
    `;
    await fs.writeFile("./documentation-german.md", content);
}

export async function main() {
    await Promise.all([english(), german()]);
}

(async function () {
    await main();
})();
