<script setup lang="ts">
import { type StackVariants, stack } from "./stack.variants";

interface Props {
	/**
	 * Alignment of items along the cross axis
	 */
	align?: StackVariants["align"];
	/**
	 * Justification of items along the main axis
	 */
	justify?: StackVariants["justify"];
	/**
	 * Spacing between items
	 */
	spacing?: StackVariants["spacing"];
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	align: "start",
	class: undefined,
	justify: "start",
	spacing: "md",
});
</script>

<template>
	<div :class="stack(props)">
		<slot />
	</div>
</template>
