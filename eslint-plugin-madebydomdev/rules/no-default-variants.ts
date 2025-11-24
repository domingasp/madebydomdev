import type { Rule } from "eslint";

export const noDefaultVariants: Rule.RuleModule = {
	create(context) {
		return {
			CallExpression(node) {
				if (node.callee.type !== "Identifier" || node.callee.name !== "tv")
					return;

				const configArg = node.arguments[0];
				if (!configArg || configArg.type !== "ObjectExpression") return;

				const defaultVariantsProp = configArg.properties.find(
					(prop) =>
						prop.type === "Property" &&
						prop.key.type === "Identifier" &&
						prop.key.name === "defaultVariants"
				);

				if (defaultVariantsProp) {
					context.report({
						messageId: "noDefaultVariants",
						node: defaultVariantsProp,
					});
				}
			},
		};
	},
	meta: {
		docs: {
			description: "Disallow `defaultVariants` in tailwind-variants tv()",
			recommended: true,
		},
		messages: {
			noDefaultVariants:
				"`defaultVariants` is not allowed. Please define default values in the component instead.",
		},
		schema: [],
		type: "problem",
	},
};
