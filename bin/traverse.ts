import { root } from "../src";
import { DEV } from "../src/parameters/dev/base";
import { T } from "../src/parameters/env/atmo";

function main() {
    const leafs = [...root];
    for (const leaf of leafs.filter((x) => x.isLeaf)) {
        console.log(leaf.fqn, leaf.properties.unit?.toString());
    }

    acceptDev(T);
}

function acceptDev(dev: DEV) {
    dev.fqn;
}

main();
