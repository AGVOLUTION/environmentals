import { NUM } from "./base";
import { env } from "./env";

export const num = new NUM("NUM", { storeInTimestream: false }, [env]);
