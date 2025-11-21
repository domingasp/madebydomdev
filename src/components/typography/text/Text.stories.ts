import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { faker } from "@faker-js/faker";

import { RenderVariants } from "../../../../.storybook/utils/create-render-variants";
import { getVariantOptions } from "../../../lib/variants";

import { text, type TextVariants } from "./text.variants";
import Text from "./Text.vue";

const TextVariants = RenderVariants.for(Text)();
const colors = getVariantOptions<TextVariants>(text)("color");
const sizes = getVariantOptions<TextVariants>(text)("size");

const meta = {
	title: "Typography/Text",
	component: Text,
	parameters: {
		controls: {
			include: ["align", "as", "bold", "color", "size", "default"],
		},
	},
	args: {
		default: faker.lorem.sentence(),
		align: "start",
		as: "span",
		bold: false,
		color: "default",
		size: "md",
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Text, TextVariants },
		setup() {
			return { args, sizes };
		},
		template: `<TextVariants prop="size" :variants="sizes" :restProps="args"/>`,
	}),
};

export const Colors: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Text, TextVariants },
		setup() {
			return { args, colors };
		},
		template: `<TextVariants prop="color" :variants="colors" :restProps="args"/>`,
	}),
};

export const Bold: Story = {
	parameters: { controls: { disable: true } },
	args: {
		bold: true,
	},
};

export const Nested: Story = {
	parameters: { controls: { disable: true } },
	render: () => ({
		components: { Text },
		template: `<Text><Text bold="true">Hello</Text> World!</Text>`,
	}),
};
