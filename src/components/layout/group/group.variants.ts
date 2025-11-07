import { tv, type VariantProps } from "tailwind-variants";
import { spacing } from "../spacing.variants";

export const group = tv({
	base: "flex flex-row items-start",
	defaultVariants: {
		align: "center",
		justify: "start",
		spacing: "md",
	},
	extend: spacing,
	variants: {
		align: {
			center: "items-center",
			end: "items-end",
			start: "items-start",
		},
		justify: {
			around: "justify-around",
			between: "justify-between",
			center: "justify-center",
			end: "justify-end",
			evenly: "justify-evenly",
			start: "justify-start",
		},
	},
});

type Variants = VariantProps<typeof group>;

export type GroupVariants = {
	align?: Variants["align"];
	justify?: Variants["justify"];
	spacing?: Variants["spacing"];
};
