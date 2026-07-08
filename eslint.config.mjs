import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Enforce: any usage of `any` requires an explicit comment explaining why.
      // TypeScript strict mode is the quality gate (rules.md Section 3).
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

export default eslintConfig;
