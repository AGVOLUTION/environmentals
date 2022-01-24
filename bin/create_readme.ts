import fs from 'fs'
import {getLeafs} from "../src/measureables"

function main(){
    const leafText = getLeafs().map(leaf=>`## ${leaf.fqn}

Property | Value
---------|-------
Description | ${leaf.description}
Unit | ${leaf.unit?.symbol}
`)
    const content = `# Measureable Documentation

${leafText.join('\n')}
    `
    fs.writeFileSync('./documentation.md', content)
}

main()
