import { ENV } from "../env/base";
import { dryMatter } from "./dryMatter";
import { leaf } from "./leaf";
import { massYield } from "./massYield";
import { nitrogen } from "./nitrogen";
import { pheno } from "./pheno";
import { water } from "./water";
import { yieldPotential } from "./yieldPotential";

export const crop = new ENV("CROP", { storeInTimestream: false }, [
    pheno,
    dryMatter,
    leaf,
    massYield,
    nitrogen,
    water,
    yieldPotential,
]);
