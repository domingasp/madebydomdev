import type { Meta, StoryObj } from "@storybook/vue3-vite";

import IconPlus from "~icons/lucide/plus";

import { RenderVariantsFactory } from "../../../../.storybook/components/RenderVariantsFactory";
import { getVariantOptions } from "../../../lib/variants";

import { button, type ButtonVariants } from "./button.variants";
import Button from "./Button.vue";
const ButtonVariants = RenderVariantsFactory.for(Button);
const variants = getVariantOptions<ButtonVariants>(button)("variant");

const meta = {
	title: "Buttons/Button",
	component: Button,
	parameters: {
		controls: {
			include: ["variant", "class", "default"],
		},
	},
	args: {
		variant: "primary",
		default: "Button",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	parameters: { controls: { disable: true } },
	render: (args) => ({
		components: { Button, ButtonVariants },
		setup() {
			return { args, variants };
		},
		template: /*html*/ `<ButtonVariants prop="variant" :variants="variants" :restProps="args" />`,
	}),
};

export const withIcon: Story = {
	args: {
		// Used for code snippet in docs
		icon: "IconPlus",
	},
	render: (args) => ({
		components: { Button, IconPlus },
		setup() {
			return { args };
		},
		template: /*html*/ `
		<Button v-bind="args">
			<template #icon><icon-plus /></template>
			Button
		</Button>
		`,
	}),
};

export const IconOnly: Story = {
	args: {
		// Used for code snippet in docs
		"aria-label": "Add",
		default: undefined,
		icon: "IconPlus",
	},
	render: (args) => ({
		components: { Button, IconPlus },
		setup() {
			return { args };
		},
		template: /*html*/ `
		<Button v-bind="args">
			<template #icon><icon-plus /></template>
		</Button>
		`,
	}),
};
