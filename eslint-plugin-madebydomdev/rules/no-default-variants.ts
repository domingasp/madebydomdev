import type { Rule } from "eslint";

export const noDefaultVariants: Rule.RuleModule = {
	meta: {
		type: "problem",
		docs: {
			description: "Disallow `defaultVariants` in tailwind-variants tv()",
			recommended: true,
		},
		messages: {
			noDefaultVariants:
				"`defaultVariants` is not allowed. Please define default values in the component instead.",
		},
		schema: [],
	},
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
						node: defaultVariantsProp,
						messageId: "noDefaultVariants",
					});
				}
			},
		};
	},
};
