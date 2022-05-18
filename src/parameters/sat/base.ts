import { Environmental } from "../../environmental";
import assert from "assert";

export class SAT extends Environmental {
    /**
     * Return the normalized name of this parameter
     *
     * That is mostly the lower case version of the human readable name from the translation
     * property. This will be used to assemble the resource bucket string
     *
     * @returns Normalized name
     */
    public get normalizedName(): string {
        return this.translation("en-us").toLowerCase().replace(/\s/g, "");
    }

    /**
     * Return the resourceBucket of this parameter
     *
     * The resourceBucket describes the storage path in S3 of this data type
     *
     * @example
     * "satellite/sentinel2/cloudless"
     *
     * @returns resourceBucket
     */
    public get resourceBucket(): string {
        if (this.normalizedName === "satellite") {
            // base case
            return "satellite";
        }

        if (this.parent! instanceof SAT) {
            // recursive case
            return `${this.parent.resourceBucket}/${this.normalizedName}`;
        }

        assert.fail(
            "SAT.resourceBucket: parent is not a SAT. This indicates an error in the declaration hierarchy and must be fixed in code."
        );
    }
}
