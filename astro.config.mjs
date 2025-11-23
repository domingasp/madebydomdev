// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), vue()],
	site: "https://madebydom.dev",
	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: "vue3",
				customCollections: {
					custom: FileSystemIconLoader("./src/icons"),
				},
				/* Fix vertical align in Safari and shifting during animation */
				defaultClass: "will-change-transform",
				scale: 1.5,
			}),
		],
	},
});
