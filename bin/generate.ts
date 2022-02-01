import { main as generateGql } from "./generate_gql";
import { main as generateReadme } from "./generate_readme";
import { main as generateI18n } from "./generate_i18n";

const tasks = [generateReadme, generateGql, generateI18n];

/**
 * Execute all generation functions concurrently
 */
tasks.map((fn) => fn());
