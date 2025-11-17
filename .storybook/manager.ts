import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
	base: "dark",
	brandTarget: "_blank",
	brandUrl: "https://madebydom.dev",
	// Hacky way to set custom logo size
	brandTitle: `<img src="/favicon.svg" width="32px" height="32px" />`,

	fontBase: '"Inter", sans-serif',

	// Mappings to theme.css in comments
	appBg: "#262626", // dark --color-background
	appContentBg: "#1b1b1b", // dark --color-surface
	appPreviewBg: "#1b1b1b", // dark --color-surface
	barBg: "#262626", // dark --color-background

	colorPrimary: "#F89B29", // Brand orange
	colorSecondary: "#FF0F7B", // Brand pink

	textColor: "#f5f5f5", // dark --color-foreground
	textInverseColor: "#262626", // dark --color-background

	barHoverColor: "#F89B29", // Brand orange
	barSelectedColor: "#F89B29", // Brand orange

	inputTextColor: "#f5f5f5", // dark --color-foreground
});

addons.setConfig({
	theme,
});
