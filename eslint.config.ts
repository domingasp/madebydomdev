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
	{
		ignores: ["dist/**", "node_modules/**", ".astro/**"],
	},
	{
		extends: ["js/recommended"],
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue,astro}"],
		languageOptions: { globals: globals.browser },
		plugins: { js },
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
							except: ["./footer"],
							from: "./src/features",
							target: "./src/features/footer",
						},
						{
							except: ["./header"],
							from: "./src/features",
							target: "./src/features/header",
						},
						// Unidirectional codebase
						{
							from: ["./src/pages", "./src/content"],
							target: "./src/features",
						},
						{
							from: ["./src/features", "./src/pages", "./src/content"],
							target: ["./src/components"],
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
		// Until tailwind-csstree supports @custom-variant
		// https://github.com/humanwhocodes/tailwind-csstree/issues/2
		ignores: ["./src/styles/theme.css"],
		language: "css/css",
		languageOptions: {
			customSyntax: tailwind4,
		},
		plugins: { css: css as never },
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
		extends: ["json/recommended"],
		files: ["**/*.json"],
		language: "json/json",
		plugins: { json: json as never },
	},
	{
		extends: ["json/recommended"],
		files: ["**/*.jsonc"],
		language: "json/jsonc",
		plugins: { json: json as never },
	},
	{
		extends: ["json/recommended"],
		files: ["**/*.json5"],
		language: "json/json5",
		plugins: { json: json as never },
	},
	{
		extends: ["markdown/recommended"],
		files: ["**/*.md", "**/*.mdx"],
		language: "markdown/gfm",
		plugins: { markdown: markdown as never },
	},
	// #endregion Other file types

	// #region Perfectionist
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue,astro}"],
		plugins: { perfectionist },
		rules: {
			"perfectionist/sort-exports": [
				"error",
				{
					ignoreCase: true,
					order: "asc",
					type: "alphabetical",
				},
			],
			"perfectionist/sort-imports": [
				"error",
				{
					customGroups: [
						{
							elementNamePattern: ["^vue$", "^@vue/.+", "^vue-.+"],
							groupName: "vue",
						},
					],
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
					ignoreCase: true,
					newlinesBetween: 1,
					order: "asc",
					type: "alphabetical",
				},
			],
			"perfectionist/sort-interfaces": [
				"error",
				{
					customGroups: {
						class: "^class$",
					},
					groups: [
						"required-property",
						"optional-property",
						"class",
						"required-method",
						"optional-method",
					],
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-object-types": [
				"error",
				{
					customGroups: {
						class: "^class$",
					},
					groups: [
						"required-property",
						"optional-property",
						"class",
						"required-method",
						"optional-method",
					],
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-objects": [
				"error",
				{
					ignoreCase: true,
					order: "asc",
					partitionByNewLine: true,
					type: "alphabetical",
				},
			],
		},
	},
	// #endregion Perfectionist

	// #region Storybook
	{
		files: ["**/*.stories.ts"],
		plugins: { perfectionist },
		rules: {
			"perfectionist/sort-objects": [
				"error",
				{
					customGroups: {
						args: "^args$",
						argTypes: "^argTypes$",
						component: "^component$",
						globals: "^globals$",
						parameters: "^parameters$",
						title: "^title$",
					},
					groups: [
						"title",
						"component",
						"globals",
						"parameters",
						"argTypes",
						"args",
					],
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
