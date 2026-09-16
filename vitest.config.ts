import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@ds": fileURLToPath(new URL("./src/data-structures", import.meta.url)),
      "@alg": fileURLToPath(new URL("./src/algorithms", import.meta.url)),
    },
  },
});
