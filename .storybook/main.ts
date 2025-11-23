import type { StorybookConfig } from "@storybook/vue3-vite";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-themes",
	],
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
		config.plugins.push(
			Icons({
				compiler: "vue3",
				/* Fix vertical align in Safari and shifting during animation */
				defaultClass: "will-change-transform",
				scale: 1.5,
			})
		);
		config.plugins.push(tailwindcss());
		return config;
	},
};

export default config;
