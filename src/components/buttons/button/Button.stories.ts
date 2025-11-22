import type { Meta, StoryObj } from "@storybook/vue3-vite";

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
			include: ["variant", "disabled", "class", "default"],
		},
	},
	args: {
		variant: "primary",
		disabled: false,
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
