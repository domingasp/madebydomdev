import { tv, type VariantProps } from "tailwind-variants";

export const label = tv({
	base: "flex items-center gap-sm font-medium select-none",
});

export type LabelVariants = VariantProps<typeof label>;
