import fs from 'fs/promises'
import {getLeafs} from "../src/measureables"

export async function main(){
    const leafText = getLeafs().map(leaf=>`## ${leaf.fqn}

Property | Value
---------|-------
Description | ${leaf.description}
Unit | ${leaf.unit?.symbol}
`)
    const content = `<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Measureable Documentation

${leafText.join('\n')}
    `
    await fs.writeFile('./documentation.md', content)
}

(async function() {
    await main()
}());
