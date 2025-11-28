import { tv, type VariantProps } from "tailwind-variants";

export const textInput = tv({
	slots: {
		base: "relative",
		error: "text-sm text-foreground-critical",
		input: [
			"rounded-xl border border-border bg-surface px-md py-sm transition-all",
			"w-full",
			"placeholder:text-foreground-secondary",
			"focus:border-focus",
		],
		static:
			"pointer-events-none absolute inset-y-0 flex items-center px-md text-sm text-foreground-secondary",
	},
	variants: {
		error: {
			false: "",
			true: {
				input:
					"border-border-critical outline-border-critical focus:border-border-critical",
			},
		},
		withLeft: {
			false: "",
			true: { input: "pl-10.5" },
		},
		withRight: {
			false: "",
			true: { input: "pr-10.5" },
		},
	},
});

export type TextInputVariants = VariantProps<typeof textInput>;
