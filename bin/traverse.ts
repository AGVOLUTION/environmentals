import {root} from "../src";
import {DEV} from "../src/measureables/dev/base";
import {ATMO, T} from "../src/measureables/env/atmo";
import {ENV} from "../src/measureables/env/base";

function main(){
    const leafs = root.traverse()
    for (const leaf of leafs) {
        console.log(leaf.fqn)
    }

    acceptDev(T)
}

function acceptDev(dev: DEV){
    dev.fqn
}

function acceptEnv(env:ATMO){
    env.fqn
}

main()
