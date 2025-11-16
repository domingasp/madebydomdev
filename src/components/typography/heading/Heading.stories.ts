import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { getVariantOptions } from "../../../lib/variants";

import { heading, type HeadingVariants } from "./heading.variants";
import Heading from "./Heading.vue";

// TODO render variants component

const levels = getVariantOptions<HeadingVariants>(heading)("level");

const meta = {
	title: "Typography/Heading",
	component: Heading,
	argTypes: {
		level: {
			control: { type: "select" },
			options: levels,
		},
	},
	args: {
		level: 3,
		class: "mt-0",
		default: "Heading",
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
