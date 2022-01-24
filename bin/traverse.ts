import {root} from "../src";
import {DEV} from "../src/measureables/dev/base";
import {ATMO, T} from "../src/measureables/env/atmo";

function main(){
    const leafs = [...root]
    for (const leaf of leafs) {
        console.log(leaf.fqn, leaf.properties.unit?.toString())
    }


    acceptDev(T)
}

function acceptDev(dev: DEV){
    dev.fqn
}


main()
