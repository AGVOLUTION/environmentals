import { FullyQualifiedName, Environmental } from "../environmental";
import { env } from "./env";
export { env } from "./env";
import { dev } from "./dev";
export { dev } from "./dev";
import { model } from "./model";
export { model } from "./model";
import { obj } from "./obj";
export { obj } from "./obj";

/**
 * The root node for the environmentals tree
 */
export const root = new Environmental("ROOT", { storeInTimestream: false }, [
    env,
    dev,
    model,
    obj,
]);

/**
 * Deserialize a FullyQualifiedName (FQN) to the object
 *
 * @param fqn - String with the FullyQualifiedName
 */
export function deserialize(fqn: FullyQualifiedName) {
    return root.find(fqn.split("__"));
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
