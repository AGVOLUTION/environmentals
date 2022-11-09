import { mm } from "../../../unit";
import { CROP } from "../base";

export class LEAF extends CROP {}

export const LAI = new LEAF("LAI", {
    storeInTimestream: true,
    translation: "Leaf Area Index",
});
export const LAI_MAX = new LEAF("LAI_MAX", {
    storeInTimestream: true,
    translation: "Maximal Leaf Area Index",
});
export const STEM_NODE = new LEAF("STEM_NODE", {
    storeInTimestream: true,
    translation: "main stem node number",
});

export const leaf = new CROP("LEAF", { storeInTimestream: false }, [
    LAI,
    LAI_MAX,
    STEM_NODE,
]);
