import { tv, type VariantProps } from "tailwind-variants";

import { spacing } from "../spacing.variants";

export const grid = tv({
	base: "grid",
	extend: spacing,
});

export type GridVariants = VariantProps<typeof grid>;
