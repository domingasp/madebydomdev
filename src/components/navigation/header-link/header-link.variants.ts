import { tv, type VariantProps } from "tailwind-variants";

export const headerLink = tv({
	slots: {
		base: "group inline-flex items-center gap-sm rounded-md p-sm text-foreground no-underline transition-colors",
		line: [
			"relative",
			"after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-1 after:w-full after:content-['']",
			"after:bg-linear-to-r after:from-[#FF0F7B] after:to-[#F89B29]",
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
