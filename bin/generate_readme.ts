import fs from 'fs/promises'
import {getLeafs} from "../src/parameters"

export async function main(){
    const leafText = getLeafs().map(leaf=>`## ${leaf.fqn}

Property | Value
---------|-------
Name | ${leaf.translation('en-us')}
Description | ${leaf.description}
Unit | ${leaf.unit?.symbol}
`)
    const content = `<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Environmental Documentation

${leafText.join('\n')}
    `
    await fs.writeFile('./documentation.md', content)
}

(async function() {
    await main()
}());
