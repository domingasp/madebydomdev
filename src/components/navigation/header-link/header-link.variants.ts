import { tv, type VariantProps } from "tailwind-variants";

export const headerLink = tv({
	slots: {
		base: "group inline-flex items-center gap-sm rounded-xl border border-transparent p-sm text-foreground no-underline transition-colors",
		line: [
			"relative",
			"after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-1 after:w-full after:content-['']",
			"after:animate-gradient after:gradient-brand",
			"after:transition-transform after:duration-250",
			"after:origin-bottom-right after:scale-x-0",
			"group-hover:after:origin-bottom-left group-hover:after:scale-x-100",
			"group-focus:after:origin-bottom-left group-focus:after:scale-x-100",
		],
	},
	variants: {
		active: {
			true: {
				line: "after:origin-bottom-left after:scale-x-100",
			},
		},
	},
});

export type HeaderLinkVariants = VariantProps<typeof headerLink>;
