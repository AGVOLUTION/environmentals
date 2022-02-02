import { Environmental } from "../../environmental";
import { yesno } from "../../unit";

export class MODEL extends Environmental {}

namespace num {
    export class NUM extends MODEL {}

    namespace env {
        export class ENV extends NUM {}

        namespace atmo {
            export class ATMO extends ENV {}

            namespace snow {
                export class SNOW extends ATMO {}

                namespace height {
                    export class HEIGHT extends SNOW {}
                    export const SNOW_MAUS = new HEIGHT("SNOW_MAUS", {});
                    export const height = new SNOW("HEIGHT", {}, [SNOW_MAUS]);
                }

                namespace insulation {
                    export class INSULATION extends SNOW {}
                    export const SNOW_MAUS = new INSULATION("SNOW_MAUS", {
                        description:
                            "Indicates it there was an insulation induced by the snow layer",
                        unit: yesno,
                    });
                    export const insulation = new SNOW("INSULATION", {}, [
                        SNOW_MAUS,
                    ]);
                }

                namespace melt {
                    export class MELT extends SNOW {}
                    export const SNOW_MAUS = new MELT("SNOW_MAUS", {});
                    export const melt = new SNOW("MELT", {}, [SNOW_MAUS]);
                }
                export const snow = new ATMO("SNOW", {}, [
                    height.height,
                    insulation.insulation,
                    melt.melt,
                ]);
            }
            export const atmo = new ENV("ATMO", {}, [snow.snow]);
        }
        export const env = new ENV("ENV", {}, [atmo.atmo]);
    }
    export const num = new NUM("NUM", {}, [env.env]);
}

export const model = new MODEL("MODEL", {}, [num.num]);
