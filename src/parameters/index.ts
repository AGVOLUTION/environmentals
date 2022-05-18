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
import { sat } from "./sat";
export { sat } from "./sat";

let _whitelist: FullyQualifiedName[] | undefined = undefined;
let _blacklist: FullyQualifiedName[] | undefined = undefined;

/**
 * Initialize the black-/whitelist for this package
 *
 * Take a look at {@link tryFiltered} to learn more about the filter mechanism
 *
 * @param [whitelist] - List of parameters always to consider while deserializing
 * @param [blacklist] - List of parameters which should not be considered while deserializing
 */
export function initialize({
    whitelist,
    blacklist,
}: {
    whitelist?: FullyQualifiedName[];
    blacklist?: FullyQualifiedName[];
}) {
    _whitelist = whitelist;
    _blacklist = blacklist;
}

/**
 * The root node for the environmentals tree
 */
export const root = new Environmental("ROOT", { storeInTimestream: false }, [
    env,
    dev,
    obj,
    sat,
]);

function isFqnPathElements(x: any): x is FqnPathElements {
    return Array.isArray(x);
}

/**
 * Deserialize a FullyQualifiedName (FQN) to the object
 *
 * @param fqn - String with the FullyQualifiedName
 * @throws {Error} - Throws an Error when the supplied FQN could not be resolved or a incorrect MODEL fqn was provided
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
 * Try to deserialize a FQN, but consider black-/whitelist
 *
 * This function can be used to narrow down the resolved Parameters, for example for User
 * Interfaces, where certain Parameters should not be displayed.
 *
 * For this function to work you have to call {@link initialize} first and provide either a
 * whitelist or a blacklist or both.
 * Parameters on the whitelist are always considered, even if also on the blacklist. If there is a
 * whitelist provided, only the Parameters on that list will be returned.
 * In the next step, Parameters from the blacklist are filtered out. If the Parameter is on neiher list, the
 * function behaves just like {@link tryDeserialize}
 *
 * @param fqn - String with the FullyQualifiedName
 */
export function tryFiltered(fqn: FullyQualifiedName) {
    if (_whitelist) {
        // if a whitelist exists, only those params will be considered
        if (_whitelist.includes(fqn)) {
            // if on whitelist do search for it
            return tryDeserialize(fqn);
        }
        // if not on whitelist, do not consider any further
        return undefined;
    }

    if (_blacklist?.includes(fqn)) {
        // if on blacklist don't search
        return undefined;
    }
    // on neither list, normal handling
    return tryDeserialize(fqn);
}

/**
 * Get the leaf nodes
 */
export const getLeafs = () => [...root].filter((x) => x.isLeaf);
