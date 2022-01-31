import { DEV } from "../base";

export class POSITION extends DEV {}

export const LATITUDE = new POSITION("LATITUDE", {
    translation: { "de-de": "Breitengrad", "en-us": "latitude" },
});
export const LONGITUDE = new POSITION("LONGITUDE", {
    translation: { "de-de": "Längengrad", "en-us": "longitude" },
});

export const position = new POSITION(
    "POSITION",
    { translation: { "de-de": "Position", "en-us": "position" } },
    [LATITUDE, LONGITUDE]
);
