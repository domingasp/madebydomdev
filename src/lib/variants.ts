/**
 * Extract single variant options from a Tailwind Variants object.
 *
 * Usage example: `getVariantOptions<HeadingVariants>(heading)("level")`
 */
export const getVariantOptions =
	<T extends Record<string, unknown>>(tvVariants: {
		variants?: Record<string, unknown>;
	}) =>
	<V extends keyof T>(variant: V): Array<T[V]> => {
		if (tvVariants.variants && typeof tvVariants.variants === "object") {
			const variantOptions = tvVariants.variants[variant as string];
			if (variantOptions && typeof variantOptions === "object") {
				const options = Object.keys(variantOptions) as Array<T[V]>;
				const allNumeric = options.every((o) => !isNaN(Number(o)));
				return (allNumeric ? options.map(Number) : options) as Array<T[V]>;
			}
		}
		return [];
	};
