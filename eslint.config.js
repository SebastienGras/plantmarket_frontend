import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Tri automatique des imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Interdit les imports relatifs vers les parents
      "import/no-relative-parent-imports": "error",
      // Optionnel : détecte les imports non résolus (doit marcher avec l'alias tsconfig)
      "import/no-unresolved": "error",
      // Encourage le typage explicite des fonctions
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],

      // Autorise de typer les variables, au lieu de les interdire
      "@typescript-eslint/no-inferrable-types": [
        "warn",
        {
          ignoreParameters: true, // autorise function foo(bar: string)
          ignoreProperties: true, // autorise const obj: { foo: number }
        },
      ],

      // Si tu veux forcer tous les arguments à être typés
      "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  storybook.configs["flat/recommended"]
);
