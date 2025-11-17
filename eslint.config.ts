import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import astroParser from "astro-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import checkFile from "eslint-plugin-check-file";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import globals from "globals";
import { tailwind4 } from "tailwind-csstree";
import tseslint from "typescript-eslint";

import eslintPluginMadebydomdev from "./eslint-plugin-madebydomdev/index.ts";

export default defineConfig([
	{ ignores: ["dist/**", "node_modules/**", ".astro/**"] },
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue,astro}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,

	// #region Only `mdx` for blog posts
	{
		plugins: { "check-file": checkFile },
		rules: {
			"check-file/filename-naming-convention": [
				"error",
				{
					"./src/content/blog/**/*.!(mdx)": "*.mdx",
				},
			],
		},
	},
	// #endregion Only `mdx` for blog posts

	// #region Import restrictions
	{
		plugins: { import: importPlugin },
		rules: {
			"import/no-restricted-paths": [
				"error",
				{
					zones: [
						// Cross-feature restrictions
						{
							target: "./src/features/footer",
							from: "./src/features",
							except: ["./footer"],
						},
						{
							target: "./src/features/header",
							from: "./src/features",
							except: ["./header"],
						},
						// Unidirectional codebase
						{
							target: "./src/features",
							from: ["./src/pages", "./src/content"],
						},
						{
							target: ["./src/components"],
							from: ["./src/features", "./src/pages", "./src/content"],
						},
					],
				},
			],
		},
	},
	// #endregion Import restrictions

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
		ignores: ["./src/styles/theme.css"],
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
				entryPoint: "src/styles/theme.css",
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

	// #region Perfectionist
	{
		plugins: { perfectionist },
		rules: {
			"perfectionist/sort-imports": [
				"error",
				{
					type: "alphabetical",
					order: "asc",
					ignoreCase: true,
					newlinesBetween: 1,
					groups: [
						"type",
						"builtin",
						"vue",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
					],
					customGroups: [
						{
							groupName: "vue",
							elementNamePattern: ["^vue$", "^@vue/.+", "^vue-.+"],
						},
					],
				},
			],
		},
	},
	// #endregion Perfectionist

	// #region Storybook
	{
		plugins: { perfectionist },
		files: ["**/*.stories.ts"],
		rules: {
			"perfectionist/sort-objects": [
				"error",
				{
					groups: [
						"title",
						"component",
						"globals",
						"parameters",
						"argTypes",
						"args",
					],
					customGroups: {
						title: "^title$",
						component: "^component$",
						globals: "^globals$",
						parameters: "^parameters$",
						argTypes: "^argTypes$",
						args: "^args$",
					},
					// Allow any order within args and argTypes
					ignorePattern: "args|argTypes",
				},
			],
		},
	},
	// #endregion Storybook

	// #region Custom rules
	{
		plugins: {
			madebydomdev: eslintPluginMadebydomdev,
		},
		rules: {
			"madebydomdev/no-default-variants": "error",
		},
	},
	// #endregion Custom rules

	// Prettier last to override other configs
	eslintConfigPrettier,
]);
