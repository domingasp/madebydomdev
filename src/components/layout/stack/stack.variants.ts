import { tv, type VariantProps } from "tailwind-variants";

import { spacing } from "../spacing.variants";

export const stack = tv({
	base: "flex flex-col",
	extend: spacing,
	variants: {
		align: {
			center: "items-center",
			end: "items-end",
			start: "items-start",
		},
	},
});

export type StackVariants = VariantProps<typeof stack>;
