import { tv, type VariantProps } from "tailwind-variants";

// TODO icon support

export const button = tv({
	base: "relative flex items-center justify-center rounded-xl border px-md py-xs font-medium transition-colors",
	compoundVariants: [
		{
			class:
				"border-border-brand-disabled bg-fill-brand-disabled text-on-fill-brand-disabled",
			disabled: true,
			variant: "primary",
		},
	],
	variants: {
		disabled: {
			false: "",
			true: "cursor-not-allowed text-foreground-disabled",
		},
		variant: {
			primary: [
				"border-border-brand bg-fill-brand text-on-fill-brand",
				"enabled:hover:bg-fill-brand-hover enabled:active:bg-fill-brand-active",
			],
			transparent: [
				"border-transparent",
				"enabled:hover:bg-surface-hover enabled:active:bg-surface-active",
			],
		},
	},
});

export type ButtonVariants = VariantProps<typeof button>;
