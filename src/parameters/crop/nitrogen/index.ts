import { CROP } from "../base";

export class NITROGEN extends CROP {}

export const CNU = new NITROGEN("CNU", {
    storeInTimestream: true,
    translation: "Cumulative nitrogen uptake",
});

export const nitrogen = new CROP("NITROGEN", { storeInTimestream: false }, [
    CNU,
]);
