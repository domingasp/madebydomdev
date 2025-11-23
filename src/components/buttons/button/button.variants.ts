import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
	compoundVariants: [
		{
			class: {
				base: "border-border-brand-disabled bg-fill-brand-disabled text-on-fill-brand-disabled",
			},
			disabled: true,
			variant: "primary",
		},
	],
	slots: {
		base: [
			"relative flex items-center justify-center gap-sm rounded-xl border px-md py-sm",
			"font-medium transition-colors",
		],
		icon: "relative shrink-0",
	},
	variants: {
		disabled: {
			false: "",
			true: { base: "cursor-not-allowed text-foreground-disabled" },
		},
		iconOnly: {
			false: "",
			true: { base: "px-sm" },
		},
		variant: {
			primary: {
				base: [
					"border-border-brand bg-fill-brand text-on-fill-brand",
					"enabled:hover:bg-fill-brand-hover enabled:active:bg-fill-brand-active",
				],
			},
			transparent: {
				base: [
					"border-transparent",
					"enabled:hover:bg-surface-hover enabled:active:bg-surface-active",
				],
			},
		},
		withIcon: {
			false: "",
			true: { base: "pl-sm" },
		},
	},
});

export type ButtonVariants = VariantProps<typeof button>;
