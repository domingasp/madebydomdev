import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
	base: "relative flex items-center justify-center rounded-md p-xs transition-colors",
	defaultVariants: {
		variant: "primary",
	},
	variants: {
		variant: {
			primary: "bg-red-500", // TODO
			transparent: "hover:bg-surface-hover active:bg-surface-active",
		},
	},
});

type Variants = VariantProps<typeof button>;

export type ButtonVariants = {
	variant?: Variants["variant"];
};
