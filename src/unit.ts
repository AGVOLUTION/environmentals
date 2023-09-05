import { Locale, Translation } from "./localization";

/**
 * Generic class for value ranges
 *
 * @public
 */
export abstract class ValueRange {
    /**
     * Checks if the given value is valid for this value range
     *
     * @public
     */
    public abstract isValid(value: unknown): boolean;
}
/**
 * Class holding information about a continous value range (min and max values).
 *
 * @public
 */
export class ContinousValueRange extends ValueRange {
    constructor(public min: number, public max: number) {
        super();
    }

    public isValid(value: number): boolean {
        return value >= this.min && value <= this.max;
    }

    public toString(): string {
        return `${this.min}-${this.max}`;
    }

    /**
     * Create a new continous value range for positive values
     *
     * This is a shortcut for `new ContinousValueRange(0, Infinity)`
     *
     * @public
     */
    public static positive(): ContinousValueRange {
        return new ContinousValueRange(0, Infinity);
    }
}

/**
 * Class holding information about a discrete value range (possible values).
 * @public
 */
export class DiscreteValueRange extends ValueRange {
    /**
     * Create a new discrete value range with the list of possible values
     *
     * @param values - List of possible values
     */
    constructor(public readonly values: unknown[]) {
        super();
    }

    /**
     * Checks if the given value is valid for this value range (i.e. is one of the possible values
     *
     * @param value - Value to check
     */
    public isValid(value: unknown): boolean {
        return Object.values(this.values).includes(value);
    }
}

class YesNoValues extends DiscreteValueRange {
    constructor() {
        super(["yes", "no"]);
    }
}

export class Unit {
    public readonly symbol: string;
    public readonly _translation?: Translation;

    /**
     * Get the translation for the given locale.
     *
     * @param locale - The locale to use for the translation
     * @returns The translated name of the unit
     */
    public translation(locale: Locale) {
        if (this._translation) {
            if (typeof this._translation === "string") {
                // if the translation is a string, return it for all locales
                return this._translation;
            }
            // otherwise, return the translation for the specified locale
            return this._translation[locale];
        }
        // if no translation is specified, return the symbol
        return this.symbol;
    }

    constructor(
        name: string,
        public readonly valueRange?: ValueRange,
        translation?: Translation
    ) {
        this.symbol = name;
        this._translation = translation;
    }

    public toString() {
        return `Unit '${this.translation("en-us")}' (${this.symbol})`;
    }
}

export const degC = new Unit("°C");
export const kelvin = new Unit("K", ContinousValueRange.positive());
export const percent = new Unit("%", new ContinousValueRange(0, 100), {
    "de-de": "Prozent",
    "en-us": "percent",
});
export const V = new Unit("V"); // Voltage
export const mV = new Unit("mV"); // milliVolt
export const hPa = new Unit("hPa");
export const Jpm2 = new Unit("J/m²");
export const mm = new Unit("mm");
export const yesno = new Unit("yes/no", new YesNoValues());
export const Wpm2 = new Unit("W/m²");
export const mmpsqm = new Unit("mm/m²");
export const kmh = new Unit("km/h", ContinousValueRange.positive());
export const degree = new Unit("°");
export const µSpcm = new Unit("µS/cm");
export const cbar = new Unit("cbar");
export const pF = new Unit("pF");
export const dB = new Unit("dB");
export const dBm = new Unit("dBm");
export const kg = new Unit("kg");
export const kgpdm3 = new Unit("kg/dm³");
export const mmcpkg = new Unit("mm( c )/kg");
export const cm3pdm3 = new Unit("cm³/dm³ (vol%)");
export const gp100g = new Unit("g/100g (%)");
export const gpkg = new Unit("g/kg");
export const ph = new Unit("pH");
export const kgpm3 = new Unit("kg/m³");
export const mmpmm = new Unit("mm/mm");
export const kgpha = new Unit("kg/ha");
/** Gram per milliliter */
export const gpml = new Unit("g/ml");
/** Gram per square meter */
export const gpm2 = new Unit("g/m²");
/** Tons per hectare */
export const tpha = new Unit("t/ha");
