import { root } from "../src/";
import fs from "fs";
import ts from "typescript";

type EnumObject = Record<string, string>;

function main() {
    const enumObject = getEnumObject();
    fs.writeFileSync("gql/index.ts", getFileContent(enumObject));
    console.log("Successfully written to gql/index.ts");
}

main();

function getFileContent(enumbObject: EnumObject) {
    return `import {registerEnumType} from "type-graphql";
export const MeasurableParameterNames = ${JSON.stringify(enumbObject)};
registerEnumType(MeasurableParameterNames, { name: "MeasurableParameterNames" }); 
`;
}

function getEnumObject() {
    const leafs = [...root].filter((x) => x.isLeaf);
    const enumObject = leafs.reduce<EnumObject>((p, c) => {
        p[c.fqn] = c.fqn;
        return p;
    }, {});
    return enumObject;
}
