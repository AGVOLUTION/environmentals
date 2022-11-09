import { CROP } from "../base";

export class DRY_MATTER extends CROP {}

export const DAILY_GROWTH = new DRY_MATTER("DAILY_GROWTH", {
    storeInTimestream: true,
});

export const dryMatter = new CROP("DRY_MATTER", { storeInTimestream: false }, [
    DAILY_GROWTH,
]);
