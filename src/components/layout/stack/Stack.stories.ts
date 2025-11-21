import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { h } from "vue";

import { faker } from "@faker-js/faker";

import { RenderVariantsFactory } from "../../../../.storybook/components/RenderVariantsFactory";
import { getVariantOptions } from "../../../lib/variants";
import Text from "../../typography/text/Text.vue";

import { stack, type StackVariants } from "./stack.variants";
import Stack from "./Stack.vue";

const StackVariants = RenderVariantsFactory.for(Stack);
const align = getVariantOptions<StackVariants>(stack)("align");
const spacing = getVariantOptions<StackVariants>(stack)("spacing");

const words = Array.from({ length: 3 }).map(() => faker.lorem.word());

const meta = {
	title: "Layout/Stack",
	component: Stack,
	args: {
		align: "start",
		spacing: "md",
	},
	render: (args) => ({
		components: { Stack },
		setup() {
			args.default = words;
			return { args, faker };
		},
		template: /*html*/ `
			<Stack v-bind="args">
				<div v-for="i in 3" :key="i">{{ faker.lorem.word() }}</div>
			</Stack>
		`,
	}),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Spacing: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Stack, StackVariants },
		setup() {
			args.default = words.map((word) => h(Text, null, () => word));
			return { args, spacing };
		},
		template: /*html*/ `<StackVariants prop="spacing" :variants="spacing" :restProps="args"/>`,
	}),
};

export const Align: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Stack, StackVariants },
		setup() {
			args.default = words.map((word) => h(Text, null, () => word));
			return { args, align };
		},
		template: /*html*/ `<StackVariants prop="align" :variants="align" :restProps="args"/>`,
	}),
};
