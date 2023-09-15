import { tpha } from "../../../unit";
import { CROP } from "../base";

export class YIELD_POTENTIAL extends CROP {}

export const ABSOLUTE = new YIELD_POTENTIAL("ABSOLUTE", {
    storeInTimestream: false,
    description: "Combined output from EMS and Lookup",
    unit: tpha,
});

export const yieldPotential = new YIELD_POTENTIAL(
    "YIELD_POTENTIAL",
    { storeInTimestream: false },
    [ABSOLUTE]
);
