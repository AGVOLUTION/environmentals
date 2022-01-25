import fs from "fs/promises";
import ts, { factory, SyntaxKind } from "typescript";
import { root } from "../src/";

(async function () {
    await main();
})();

/**
 * Generate the GQL Enum containing all FQNs
 */
export async function main() {
    const resultFile = ts.createSourceFile(
        "gql/index.ts",
        "",
        ts.ScriptTarget.ES2021,
        false,
        ts.ScriptKind.TS
    );
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const result = printer.printNode(ts.EmitHint.Unspecified, generateAst(), resultFile);
    await fs.writeFile(
        resultFile.fileName,
        `/*\n * THIS IS A GENERATED FILE. DO NOT EDIT !!!\n*/\n${result}`
    );
}

function generateAst() {
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
