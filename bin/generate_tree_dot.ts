import { root } from "../src";

/**
 * Outputs the currently implemented parameters as a tree in DOT format.
 * Pipe this to graphviz to create an PNG or SVG
 *
 * ts-node bin/generate_tree_dot | dot -Tsvg /tmp/tree.svg
 */
function main() {
    const edges = new Set(
        root
            .map((m, children) => children.map((c) => `${m.fqn} -> ${c.fqn}`))
            .filter((x) => x.length > 0)
            .flat()
    );
    const nodes = [...root]
        .map((n) => `${n.fqn} [label="${n.name}"]`)
        .join("\n");
    const dot = [...edges].join("\n");
    console.log(`digraph environmentals {
${nodes}
${dot}
}
`);
}

main();
