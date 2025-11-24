import type { Preview, VueRenderer } from "@storybook/vue3-vite";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "storybook/theming";

import "../src/styles/theme.css";
import "../src/styles/base.css";

import "./storybook.css";

const preview: Preview = {
	decorators: [
		withThemeByDataAttribute<VueRenderer>({
			attributeName: "data-theme",
			defaultTheme: "light",
			themes: {
				dark: "dark",
				light: "light",
			},
		}),
	],
	parameters: {
		controls: {
			disableSaveFromUI: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: { theme: themes.dark },
		options: {
			// Sort stories alphabetically
			/* eslint-disable */ //
			// @ts-ignore: Runs in a javascript context, no typing available
			storySort: (a, b) =>
				a.title === b.title ? 0 : a.title.localeCompare(b.title),
			/* eslint-enable */
		},
	},
	tags: ["autodocs"],
};

export default preview;
