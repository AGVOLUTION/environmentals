import { ModelTypes, Model } from "../../../model";

export const AG_BODEN = new Model(ModelTypes.Imagery, "AG_BODEN", {
    storeInTimestream: false,
});

export const AGV = new Model(ModelTypes.Imagery, "AGV", {
    storeInTimestream: false,
});

export const H2O = new Model(ModelTypes.Imagery, "H2O", {
    storeInTimestream: false,
});
export const KCL = new Model(ModelTypes.Imagery, "KCL", {
    storeInTimestream: false,
});

export const VDLUFA_CAL = new Model(ModelTypes.Imagery, "VDLUFA_CAL", {
    storeInTimestream: false,
});
export const VDLUFA_CAT = new Model(ModelTypes.Imagery, "VDLUFA_CAT", {
    storeInTimestream: false,
});
