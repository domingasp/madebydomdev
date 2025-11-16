import { tv, type VariantProps } from "tailwind-variants";

export const heading = tv({
	base: "mt-[1em] font-bold text-foreground",
	variants: {
		level: {
			1: "text-4xl",
			2: "text-3xl",
			3: "text-2xl",
			4: "text-xl",
			5: "text-lg",
			6: "text-base",
		},
	},
});

export type HeadingVariants = VariantProps<typeof heading>;
