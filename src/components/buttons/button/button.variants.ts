import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
	slots: {
		base: [
			"relative flex items-center justify-center gap-sm rounded-xl border px-md py-sm",
			"font-medium transition-colors",
		],
		icon: "relative shrink-0",
	},
	variants: {
		iconOnly: {
			false: "",
			true: { base: "px-sm" },
		},
		variant: {
			primary: {
				base: [
					"border-border-brand bg-fill-brand text-on-fill-brand",
					"hover:bg-fill-brand-hover active:bg-fill-brand-active",
				],
			},
			transparent: {
				base: [
					"border-transparent",
					"hover:bg-surface-hover active:bg-surface-active",
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
