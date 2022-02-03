import fs from "fs-extra";

main()

function main() {
    const rootPackage = JSON.parse(fs.readFileSync("package.json", { encoding: "utf8" }));
    let gqlPackage = JSON.parse(
        fs.readFileSync("generated/gql/package.json", { encoding: "utf8" })
    );
    gqlPackage.version = rootPackage.version;
    fs.writeFileSync("generated/gql/package.json", JSON.stringify(gqlPackage, undefined, 4));
}
