import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astroParser from "astro-eslint-parser";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { tailwind4 } from "tailwind-csstree";

export default defineConfig([
	{ ignores: ["dist/**", "node_modules/**", ".astro/**"] },
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue,astro}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,

	// #region Astro
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	// #endregion Astro

	// #region Vue
	...pluginVue.configs["flat/strongly-recommended"].map((config) => ({
		...config,
		files: ["**/*.vue"],
	})),
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	{
		files: ["./src/components/**/*.vue"],
		rules: {
			"vue/multi-word-component-names": "off",
		},
	},
	// #endregion Vue

	// #region Styling
	{
		files: ["**/*.css"],
		plugins: { css },
		language: "css/css",
		languageOptions: {
			customSyntax: tailwind4,
		},
		// Until tailwind-csstree supports @custom-variant
		// https://github.com/humanwhocodes/tailwind-csstree/issues/2
		ignores: ["./src/styles/global.css"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue,astro}"],
		plugins: {
			"better-tailwindcss": eslintPluginBetterTailwindcss,
		},
		rules: {
			...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
			...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
		},
		settings: {
			"better-tailwindcss": {
				entryPoint: "src/styles/global.css",
			},
		},
	},
	// #endregion Styling

	// #region Other file types
	{
		files: ["**/*.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.jsonc"],
		plugins: { json },
		language: "json/jsonc",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.json5"],
		plugins: { json },
		language: "json/json5",
		extends: ["json/recommended"],
	},
	{
		files: ["**/*.md", "**/*.mdx"],
		plugins: { markdown },
		language: "markdown/gfm",
		extends: ["markdown/recommended"],
	},
	// #endregion Other file types

	// Prettier last to override other configs
	eslintConfigPrettier,
]);
