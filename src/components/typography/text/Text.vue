<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { text, type TextVariants } from "./text.variants";

type TextElement = "span" | "p" | "strong" | "em" | "label";

interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, "class"> {
	/**
	 * Text alignment
	 */
	align?: TextVariants["align"];
	/**
	 * HTML element to render the text as
	 */
	as?: TextElement;
	/**
	 * Whether the text is bold
	 */
	bold?: TextVariants["bold"];
	/**
	 * Text color
	 */
	color?: TextVariants["color"];
	/**
	 * Text size
	 */
	size?: TextVariants["size"];
	class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
	align: "start",
	as: "span",
	bold: false,
	class: undefined,
	color: "default",
	size: "md",
});
</script>

<template>
	<component
		v-bind="$attrs"
		:is="as"
		:class="text({ align, bold, color, size, class: props.class })"
	>
		<slot />
	</component>
</template>
