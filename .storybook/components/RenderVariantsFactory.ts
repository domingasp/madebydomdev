import { defineComponent, h, type Component, type PropType } from "vue";

import RenderVariants from "./RenderVariants.vue";

export const RenderVariantsFactory = {
	for: <C extends Component>(component: C) => {
		return defineComponent(
			(props) => {
				return () =>
					h(
						RenderVariants,
						{
							class: props.class,
							component,
							orientation: props.orientation as
								| "horizontal"
								| "vertical"
								| undefined,
							prop: String(props.prop),
							restProps: props.restProps,
							variants: props.variants,
						},
						props.restProps.default
					);
			},
			{
				name: `RenderVariants${component.name || "Component"}`,
				props: {
					class: {
						default: undefined,
						type: String,
					},
					orientation: {
						default: "horizontal",
						type: String as PropType<"vertical" | "horizontal">,
					},
					prop: {
						required: true,
						type: [String, Number, Symbol],
					},
					restProps: {
						default: () => ({}),
						type: Object,
					},
					variants: {
						required: true,
						type: Array,
					},
				},
			}
		);
	},
};
