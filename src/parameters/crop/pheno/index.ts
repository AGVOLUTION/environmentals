import { mm } from "../../../unit";
import { CROP } from "../base";

export class PHENO extends CROP {}

export const ACTUALRD = new CROP("ACTUALRD", {
    storeInTimestream: true,
    translation: "Actual rooting depth",
    unit: mm,
});
export const CBD = new CROP("CBD", {
    storeInTimestream: true,
    translation: "Cumulative biological day",
});

export const pheno = new CROP("PHENO", { storeInTimestream: false }, [
    ACTUALRD,
    CBD,
]);
