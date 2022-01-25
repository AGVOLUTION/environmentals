import { main as generateGql } from "./generate_gql";
import { main as generateReadme } from "./generate_readme";

const tasks = [generateReadme, generateGql];

/**
 * Execute all generation functions concurrently
 */
async function main() {
    await Promise.all(tasks.map((fn) => fn()));
}

(async function () {
    await main();
})();
