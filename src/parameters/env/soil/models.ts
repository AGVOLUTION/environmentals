import { ModelTypes, Model } from "../../../model";

export const AG_BODEN = new Model(ModelTypes.Imagery, "AG_BODEN", {
    storeInTimestream: false,
});

export const AGV = new Model(ModelTypes.Imagery, "AGV", {
    storeInTimestream: false,
});
