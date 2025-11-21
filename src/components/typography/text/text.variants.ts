import { tv, type VariantProps } from "tailwind-variants";

export const text = tv({
	base: "font-normal tabular-nums",
	variants: {
		align: {
			center: "text-center",
			end: "text-end",
			justify: "text-justify",
			start: "text-start",
		},
		bold: {
			false: "",
			true: "font-bold",
		},
		color: {
			default: "text-foreground",
			secondary: "text-foreground-secondary",
		},
		size: {
			lg: "text-lg",
			md: "text-base",
			sm: "text-sm",
			xs: "text-xs",
		},
	},
});

export type TextVariants = VariantProps<typeof text>;
