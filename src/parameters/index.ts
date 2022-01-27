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
export const root = new Environmental("ROOT", {}, [env, dev, model, obj]);

/**
 * Deserialize a FullyQualifiedName (FQN) to the object
 *
 * @param fqn - String with the FullyQualifiedName
 */
export function deserialize(fqn: FullyQualifiedName) {
    return root.find(fqn.split("__"));
}

/**
 * Get the leaf nodes
 */
export const getLeafs = () => [...root].filter((x) => x.isLeaf);
