import type { Meta, StoryObj } from "@storybook/vue3-vite";

import IconUser from "~icons/lucide/user";

import Label from "./Label.vue";

const meta = {
	title: "Typography/Label",
	component: Label,
	parameters: {
		controls: { include: ["default"] },
	},
	args: {
		default: "First Name",
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingIcon: Story = {
	args: {
		default: /*html*/ `<IconUser />First Name`,
	},
	render: (args) => ({
		components: { IconUser, Label },
		setup() {
			return { args };
		},
		template: /*html*/ `
			<Label v-bind="args">
				<IconUser />
				Edit Field
			</Label>
		`,
	}),
};
