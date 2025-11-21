import {
	defineComponent,
	h,
	type Component,
	type ComponentObjectPropsOptions,
	type PropType,
} from "vue";

import Grid from "../../src/components/layout/grid/Grid.vue";
import Group from "../../src/components/layout/group/Group.vue";
import Stack from "../../src/components/layout/stack/Stack.vue";
import Text from "../../src/components/typography/text/Text.vue";

type ExtractPropTypes<C extends Component> = C extends new (
	...args: unknown[]
) => unknown
	? InstanceType<C>["$props"]
	: C extends { props: infer P }
	? P extends ComponentObjectPropsOptions
		? { [K in keyof P]: unknown }
		: Record<string, never>
	: Record<string, never>;

type RenderVariantsProps<
	C extends Component,
	P extends keyof ExtractPropTypes<C>
> = {
	prop: P;
	class?: string;
	orientation?: "vertical" | "horizontal";
	variants: ExtractPropTypes<C>[P][];
	restProps?: Partial<ExtractPropTypes<C>>;
};

/**
 * Creates a component that renders variants of a given component based on a specified prop.
 */
function createRenderVariants<C extends Component>(component: C) {
	return <P extends keyof ExtractPropTypes<C>>() =>
		defineComponent(
			(props: RenderVariantsProps<C, P>) => {
				return () => {
					const renderLabel = (label: string) =>
						h(
							Text,
							{
								align: "center",
								class: "self-center",
								color: "secondary",
								size: "sm",
							},
							() => label
						);

					const renderVariant = (variant: ExtractPropTypes<C>[P]) => {
						const componentProps = {
							...props.restProps,
							[props.prop]: variant,
						};

						if (props.orientation === "horizontal") {
							return h(
								Stack,
								{
									align: "center",
									key: String(variant),
									spacing: "sm",
								},
								() => [
									renderLabel(String(variant)),
									h(component, componentProps, () => props.restProps?.default),
								]
							);
						}

						return [
							renderLabel(String(variant)),
							h(component, componentProps, () => props.restProps?.default),
						];
					};

					if (props.orientation === "horizontal") {
						return h(
							Group,
							{
								class: props.class,
							},
							() => props.variants.flatMap(renderVariant)
						);
					}

					return h(
						Grid,
						{
							class: props.class,
							cols: ["max-content", "1fr"],
						},
						() => props.variants.flatMap(renderVariant)
					);
				};
			},
			{
				name: `RenderVariants${component.name}`,
				props: {
					class: {
						default: "",
						type: String,
					},
					orientation: {
						default: "horizontal",
						type: String as PropType<"vertical" | "horizontal">,
					},
					prop: {
						required: true,
						type: [String, Number, Symbol] as unknown as PropType<P>,
					},
					restProps: {
						default: () => ({}),
						type: Object as PropType<Partial<ExtractPropTypes<C>>>,
					},
					variants: {
						required: true,
						type: Array as PropType<ExtractPropTypes<C>[P][]>,
					},
				},
			}
		);
}

export const RenderVariants = {
	for: createRenderVariants,
};
