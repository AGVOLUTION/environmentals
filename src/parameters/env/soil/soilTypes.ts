import { DiscreteValueRange, Unit } from "../../../unit";

/**
 * Possible soil types
 */
export class SoilTypes extends DiscreteValueRange {
    constructor() {
        super([
            "Ls2",
            "Ls3",
            "Ls4",
            "Lt2",
            "Lt3",
            "Lts",
            "Lu",
            "Sl2",
            "Sl3",
            "Sl4",
            "Slu",
            "Ss",
            "St2",
            "St3",
            "Su2",
            "Su3",
            "Su4",
            "Tl",
            "Ts2",
            "Ts3",
            "Ts4",
            "Tt",
            "Tu2",
            "Tu3",
            "Tu4",
            "Uls",
            "Us",
            "Ut2",
            "Ut3",
            "Ut4",
            "Uu",
            "fS",
            "fSgs",
            "fSms",
            "gS",
            "gSfs",
            "gSms",
            "mS",
            "mSfs",
            "mSgs",
        ]);
    }
}

export const SoilTypeNames = new Unit("Soil types", new SoilTypes());
