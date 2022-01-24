import { FullyQualifiedName, Measureable } from "../measureable";
import { env } from "./env";
export { env } from "./env";
import { dev } from "./dev";
export { dev } from "./dev";

export const root = new Measureable("ROOT", {},[env, dev]);

export function deserialize(fqn: FullyQualifiedName) {
    return root.find(fqn.split("__"));
}
