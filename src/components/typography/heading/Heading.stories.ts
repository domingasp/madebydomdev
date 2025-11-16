import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Heading from "./Heading.vue";

// TODO render variants component
// TODO get levels from variant type definition

const levels = [1, 2, 3, 4, 5, 6] as const;

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
