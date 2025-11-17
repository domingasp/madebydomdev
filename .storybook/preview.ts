import type { Preview } from "@storybook/vue3-vite";

import "../src/styles/theme.css";
import "../src/styles/base.css";

const preview: Preview = {
	tags: ["autodocs"],
	parameters: {
		controls: {
			disableSaveFromUI: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			// Sort stories alphabetically
			/* eslint-disable */ //
			// @ts-ignore: Runs in a javascript context, no typing available
			storySort: (a, b) =>
				a.title === b.title ? 0 : a.title.localeCompare(b.title),
			/* eslint-enable */
		},
	},
};

export default preview;
