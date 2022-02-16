import { ModelTypes, Model } from "../../../model";

export const SNOW_MAUS = new Model(ModelTypes.Numerical, "SNOW_MAUS", {
    storeInTimestream: false,
});

export const ETO = new Model(ModelTypes.Numerical, "ETO", {
    storeInTimestream: false,
});
export const ETC = new Model(ModelTypes.Imagery, "ETC", {
    storeInTimestream: false,
});
