import type { Preview } from "@storybook/vue3-vite";

import "../src/styles/global.css";

const preview: Preview = {
	parameters: {
		controls: {
			disableSaveFromUI: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	tags: ["autodocs"],
};

export default preview;
