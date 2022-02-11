import { DEV } from "../base";

export class ALERT extends DEV {}

export const TRIGGERED = new ALERT("TRIGGERED", {
    description: "A device alert (motion, theft detection) was triggered",
    storeInTimestream: true,
    translation: { "de-de": "Alarm ausgelöst", "en-us": "Alarm triggered" },
    format: "d",
});
export const ARMED = new ALERT("ARMED", {
    storeInTimestream: true,
    description:
        "The internal alert (motion, theft detection) is active and listening for trigger events",
    translation: { "de-de": "Alarm aktiv", "en-us": "Alarm active" },
    format: "d",
});

export const alert = new ALERT("ALERT", { storeInTimestream: false }, [
    TRIGGERED,
    ARMED,
]);
