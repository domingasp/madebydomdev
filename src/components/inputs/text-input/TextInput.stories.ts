import type { Meta, StoryObj } from "@storybook/vue3-vite";

import IconPanel from "~icons/lucide/panel-top";
import IconUser from "~icons/lucide/user";

import TextInput from "./TextInput.vue";

const meta = {
	title: "Inputs/Text Input",
	component: TextInput,
	parameters: {
		controls: { include: ["placeholder", "error"] },
	},
	argTypes: {
		error: { control: "boolean" },
	},
	args: {
		error: false,
		placeholder: "Enter text",
	},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
	args: {
		error: true,
	},
};

export const ErrorMessage: Story = {
	argTypes: {
		error: { control: "text" },
	},
	args: {
		error: "This field is required",
	},
};

export const WithSections: Story = {
	args: {
		// Used for code snippet in docs
		left: `<IconUser />`,
		right: `<IconPanel />`,
	},
	render: (args) => ({
		components: { IconPanel, IconUser, TextInput },
		setup() {
			return { args };
		},
		template: /*html*/ `
			<TextInput v-bind="args">
				<template #left>
					<IconUser />
				</template>
				<template #right>
					<IconPanel />
				</template>
			</TextInput>
		`,
	}),
};
