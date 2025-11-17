import type { StorybookConfig } from "@storybook/vue3-vite";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

const config: StorybookConfig = {
	addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
	framework: {
		name: "@storybook/vue3-vite",
		options: {
			docgen: "vue-component-meta",
		},
	},
	staticDirs: ["../public"],
	stories: ["../src/**/*.stories.ts"],
	async viteFinal(config) {
		config.plugins = config.plugins || [];
		// Must be first for `vue-component-meta` to work correctly
		config.plugins.unshift(vue());
		config.plugins.push(tailwindcss());
		return config;
	},
};

export default config;
