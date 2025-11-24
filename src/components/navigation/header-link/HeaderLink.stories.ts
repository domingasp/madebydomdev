import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { faker } from "@faker-js/faker";

import HeaderLink from "./HeaderLink.vue";

const meta = {
	title: "Navigation/Header Link",
	component: HeaderLink,
	parameters: {
		controls: {
			include: ["astroPathname", "href", "default"],
		},
	},
	args: {
		astroPathname: "/",
		href: "/link",
		target: "_blank",
		default: faker.lorem.word(),
	},
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
	args: {
		astroPathname: "/link",
	},
};
