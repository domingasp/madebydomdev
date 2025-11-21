<script setup lang="ts">
import { type StackVariants, stack } from "./stack.variants";

interface Props {
	/**
	 * Alignment of items along the cross axis
	 */
	align?: StackVariants["align"];
	/**
	 * Spacing between items
	 */
	spacing?: StackVariants["spacing"];
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	align: "start",
	class: undefined,
	spacing: "md",
});
</script>

<template>
	<div :class="stack(props)">
		<slot />
	</div>
</template>
