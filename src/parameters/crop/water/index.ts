import { mm } from "../../../unit";
import { CROP } from "../base";

export class WATER extends CROP {}

export const DEVELOPMENT_STRESS = new WATER("DEVELOPMENT_STRESS", {
    storeInTimestream: true,
    translation: "Development water stress",
});
export const LEAF_STRESS = new WATER("LEAF_STRESS", {
    storeInTimestream: true,
    translation: "Leaf water stress",
});
export const GROWTH_STRESS = new WATER("GROWTH_STRESS", {
    storeInTimestream: true,
    translation: "Growth water stress",
});

export const water = new CROP("WATER", { storeInTimestream: false }, [
    DEVELOPMENT_STRESS,
    LEAF_STRESS,
    GROWTH_STRESS,
]);
