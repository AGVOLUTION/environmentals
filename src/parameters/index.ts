import { FullyQualifiedName, Environmental } from "../environmental";
import { env } from "./env";
export { env } from "./env";
import { dev } from "./dev";
export { dev } from "./dev";
import { obj } from "./obj";
import { FqnPathElements } from "..";
import { ENV } from "./env/base";
import { Model } from "../model";
export { obj } from "./obj";

/**
 * The root node for the environmentals tree
 */
export const root = new Environmental("ROOT", { storeInTimestream: false }, [
    env,
    dev,
    obj,
]);

function isFqnPathElements(x: any): x is FqnPathElements {
    return Array.isArray(x);
}

/**
 * Deserialize a FullyQualifiedName (FQN) to the object
 *
 * @param fqn - String with the FullyQualifiedName
 */
export function deserialize(
    fqn: FullyQualifiedName | FqnPathElements
): Environmental {
    const fqnPath = isFqnPathElements(fqn) ? fqn : fqn.split("__");
    if (fqnPath[0] == "MODEL") {
        // special case models: We need to get the actual param from the string
        let param;
        let modelName = "";
        try {
            param = deserialize(fqnPath.slice(2));
        } catch (error) {
            // try again without the last element as we have apparently a complete model fqn
            param = deserialize(fqnPath.slice(2, -1));
            modelName = fqnPath[fqnPath.length - 1];
        }

        if (param instanceof ENV) {
            // we found the actual requested parameter. So we can return the actual model with the
            // requested parameter attached to it
            const model: Model | undefined = modelName
                ? param.properties.models?.find((x) => x.name === modelName)
                : param.model;
            if (model) {
                return model.withParameter(param);
            }
        }
        throw new Error(
            "Provided a MODEL FQN for a parameter which has no models defined"
        );
    }
    return root.find(fqnPath);
}

/**
 * Try to deserialize a FQN to it's object.
 *
 * If no object can be found, undefined will be returned.
 *
 * @param fqn - String with the FullyQualifiedName
 */
export function tryDeserialize(fqn: FullyQualifiedName) {
    try {
        return deserialize(fqn);
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return undefined;
    }
}

/**
 * Get the leaf nodes
 */
export const getLeafs = () => [...root].filter((x) => x.isLeaf);
