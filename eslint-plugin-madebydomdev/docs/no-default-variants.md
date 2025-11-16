# madebydomdev/no-default-variants

Enforce no `defaultVariants` in `tv`.

## Rationale

Vue does not use `defaultVariants`. Instead, you must pass them via `...component.defaultVariants`, which breaks Storybook's `vue-component-meta` integration.

## Examples

```ts
// ❌ BAD: `defaultVariants` in `tv` parameter
const component = tv({
	defaultVariants: {
		// ...
	},
});
```
