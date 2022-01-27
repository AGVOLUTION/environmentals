import fs from "fs/promises";
import _ from "lodash";
import ts, { factory, SyntaxKind } from "typescript";
import { root } from "../src/";
import { Measureable } from "../src/measureable";
import {dev} from "../src/measureables/dev"

(async function () {
    await main();
})();

/**
 * Generate the GQL Enum containing all FQNs
 */
export async function main() {
    const enumObject = JSON.stringify(generateEnumObject(root)["ROOT"], undefined, 4);
    //const categoryEnums = root.children.map(
        //(cat) =>
            //`export const Enum${cat.name} = ${JSON.stringify(
                //generateCategoryEnum(cat),
                //undefined,
                //4
            //)}`
    //);
    
    // generate enums for level below first level categories
    const categoryEnumFileNames = await Promise.all(root.children.map(writeCategoryEnumFile))
    const categoryEnums  = categoryEnumFileNames.map(c=>`export * as ${c[0]}Enums from './${c[0]}'`)

    const resultFile = ts.createSourceFile(
        "gql/index.ts",
        "",
        ts.ScriptTarget.ES2021,
        false,
        ts.ScriptKind.TS
    );
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const result = printer.printNode(ts.EmitHint.Unspecified, generateAstForGqlEnum(), resultFile);
    await fs.writeFile(
        resultFile.fileName,
        `/*\n * THIS IS A GENERATED FILE. DO NOT EDIT !!!\n*/
${categoryEnums.join('\n')}

${result}

export const EnumObject = ${enumObject} `
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
                        factory.createIdentifier("MeasurableParameterNames"),
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
            factory.createCallExpression(factory.createIdentifier("registerEnumType"), undefined, [
                factory.createIdentifier("MeasurableParameterNames"),
                factory.createObjectLiteralExpression(
                    [
                        factory.createPropertyAssignment(
                            factory.createIdentifier("name"),
                            factory.createStringLiteral("MeasurableParameterNames")
                        ),
                    ],
                    false
                ),
            ])
        ),
    ];
    return factory.createSourceFile(
        code,
        factory.createToken(SyntaxKind.EndOfFileToken),
        ts.NodeFlags.None
    );
}

function generateEnumObject(m: Measureable): any {
    if (m.isLeaf) {
        return { [m.name]: m.name };
    }

    let childObjects = [];
    for (const child of m.children) {
        childObjects.push(generateEnumObject(child));
    }
    return { [m.name]: _.merge({}, ...childObjects) };
}

function generateCategoryEnum(m: Measureable) {
    const names = [...m].filter((x) => x.isLeaf).map((x) => x.fqn.replace(`${m.fqn}__`, ""));
    //return names.reduce((prev, curr) => {
    //prev[curr] = curr;
    //return prev;
    //}, {});
    return Object.fromEntries(names.map((x) => [x, x]));
}

async function writeCategoryEnumFile(m:Measureable){
    const enumObjects = m.children.map(child=>[child.name, generateCategoryEnum(child)])
    const exports = enumObjects.map(o=>`export const Enum${o[0]} = ${JSON.stringify(o[1], undefined,4)}`)
    const fileName = `gql/${m.name}.ts`
    const str = `/*\n * THIS IS A GENERATED FILE. DO NOT EDIT !!!\n*/
export const Enum${m.name} = ${JSON.stringify(generateCategoryEnum(m),undefined,4)}

${exports.join("\n")}`
    await fs.writeFile(fileName, str)

    return [m.name, fileName]
}


