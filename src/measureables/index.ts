import { FullyQualifiedName, Measureable } from "../measureable";
import { env } from "./env";
export { env } from "./env";
import { dev } from "./dev";
export { dev } from "./dev";
import { model } from "./model";
export { model } from "./model";

export const root = new Measureable("ROOT", {}, [env, dev, model]);

export function deserialize(fqn: FullyQualifiedName) {
    return root.find(fqn.split("__"));
}

/**
 * Get the leaf nodes
 */
export const getLeafs = () => [...root].filter((x) => x.isLeaf);
