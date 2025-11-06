import type { VariantProps } from "cva";
import { cva } from "../../../../cva.config.ts";
import { spacing } from "../spacing.variants";

export const group = cva({
	base: "flex flex-row items-start",
	defaultVariants: {
		align: "center",
		justify: "start",
		spacing: "md",
	},
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
		...spacing.variants,
	},
});

export type GroupVariants = VariantProps<typeof group>;
