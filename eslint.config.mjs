import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: [...nextCoreWebVitals, ...nextTypescript, ...compat.extends("prettier")],

    rules: {
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-key": "warn",
        "no-console": "off",
        "no-unused-vars": "warn",
    },
}]);