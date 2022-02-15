//import fs from "fs/promises";
import fs from "fs-extra";
import * as Models from "../src/parameters/env/atmo/models";
import _ from "lodash";
import ts, { factory, SyntaxKind } from "typescript";
import { root } from "../src/";
import { Environmental, FullyQualifiedName } from "../src/environmental";
import { atmo } from "../src/parameters/env/atmo";

const DESTINATION_FOLDER = "generated/gql";
const GENERATED_HINT = "/*\n * THIS IS A GENERATED FILE. DO NOT EDIT !!!\n*/";

(async function () {
    await main();
})();

/**
 * Generate the GQL Enum containing all FQNs
 */
export async function main() {
    await fs.ensureDir(DESTINATION_FOLDER);
    const enumObject = JSON.stringify(
        generateEnumObjectForTree(root)["ROOT"],
        undefined,
        4
    );

    // generate enums for level below first level categories
    const categoryEnumFileNames = await Promise.all(
        root.children.map(writeCategoryEnumFile)
    );
    const categoryEnums = categoryEnumFileNames.map(
        (c) => `export * as ${c[0]}Enums from './${c[0]}'`
    );

    const resultFile = ts.createSourceFile(
        `${DESTINATION_FOLDER}/index.ts`,
        "",
        ts.ScriptTarget.ES2021,
        false,
        ts.ScriptKind.TS
    );
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const result = printer.printNode(
        ts.EmitHint.Unspecified,
        generateAstForGqlEnum(),
        resultFile
    );

    const storeInTimestreamList = generateStoreInTimestreamList();
    const modelNames = generateModelsObject();

    await fs.writeFile(
        resultFile.fileName,
        `/*\n * THIS IS A GENERATED FILE. DO NOT EDIT !!!\n*/
${categoryEnums.join("\n")}

${result}

export const EnumObject = ${enumObject}
${storeInTimestreamList}
${modelNames}
`
    );
}

function generateAstForGqlEnum() {
    const leafs = [...root].filter((x) => x.isLeaf);
    const code = [
        factory.createImportDeclaration(
            undefined,
            undefined,
            factory.createImportClause(
                false,
                undefined,
                factory.createNamedImports([
                    factory.createImportSpecifier(
                        false,
                        undefined,
                        factory.createIdentifier("registerEnumType")
                    ),
                ])
            ),
            factory.createStringLiteral("type-graphql"),
            undefined
        ),
        factory.createVariableStatement(
            [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            factory.createVariableDeclarationList(
                [
                    factory.createVariableDeclaration(
                        factory.createIdentifier("EnvironmentalParameterNames"),
                        undefined,
                        undefined,
                        factory.createObjectLiteralExpression(
                            leafs
                                .map((l) => l.fqn) // transform to fqns
                                .map(
                                    (
                                        fqn // create properties from it
                                    ) =>
                                        factory.createPropertyAssignment(
                                            factory.createIdentifier(fqn),
                                            factory.createStringLiteral(fqn)
                                        )
                                ),

                            true
                        )
                    ),
                ],
                ts.NodeFlags.Const
            )
        ),
        factory.createExpressionStatement(
            factory.createCallExpression(
                factory.createIdentifier("registerEnumType"),
                undefined,
                [
                    factory.createIdentifier("EnvironmentalParameterNames"),
                    factory.createObjectLiteralExpression(
                        [
                            factory.createPropertyAssignment(
                                factory.createIdentifier("name"),
                                factory.createStringLiteral(
                                    "EnvironmentalParameterNames"
                                )
                            ),
                        ],
                        false
                    ),
                ]
            )
        ),
    ];
    return factory.createSourceFile(
        code,
        factory.createToken(SyntaxKind.EndOfFileToken),
        ts.NodeFlags.None
    );
}

/**
 * Generate an enum object for the given environmental and all of it's children
 *
 * @param m -
 * @returns
 */
function generateEnumObjectForTree(m: Environmental): any {
    if (m.isLeaf) {
        return { [m.name]: m.name };
    }

    let childObjects = [];
    for (const child of m.children) {
        childObjects.push(generateEnumObjectForTree(child));
    }
    return { [m.name]: _.merge({}, ...childObjects) };
}

function generateCategoryEnum(m: Environmental) {
    const names = [...m]
        .filter((x) => x.isLeaf)
        .map((x) => x.fqn.replace(`${m.fqn}__`, ""));
    return Object.fromEntries(names.map((x) => [x, x]));
}

async function writeCategoryEnumFile(m: Environmental) {
    const enumObjects = m.children.map((child) => [
        child.name,
        generateCategoryEnum(child),
    ]);
    const exports = enumObjects.map(
        (o) =>
            `export const Enum${o[0]} = ${JSON.stringify(o[1], undefined, 4)}`
    );
    const fileName = `${DESTINATION_FOLDER}/${m.name}.ts`;
    const str = `${GENERATED_HINT}
export const Enum${m.name} = ${JSON.stringify(
        generateCategoryEnum(m),
        undefined,
        4
    )}

${exports.join("\n")}`;
    await fs.writeFile(fileName, str);

    return [m.name, fileName];
}

function generateStoreInTimestreamList() {
    const storeParams = [...root].filter((x) => x.storeInTimestream);
    const sourceCode = `export const StoreInTimestreamParameters = ${JSON.stringify(
        Object.values(generateEnumObject(storeParams)),
        undefined,
        4
    )} as const`;
    return sourceCode;
}

function generateModelsObject() {
    const strings = Object.values(Models)
        .map(
            (m) => `/**\n * Provides
${[...m.provides.values()].map((p) => `  - ${p.fqn}`).join("\n")}
 */
${m.name}:'${m.name}'`
        )
        .join(",\n");
    return `export const ModelNames = {\n${strings}} as const`;
}

function generateEnumObject(environmentals: Environmental[]) {
    const entries = environmentals.map((e) => [e.fqn, e.fqn]);
    return Object.fromEntries(entries);
}
