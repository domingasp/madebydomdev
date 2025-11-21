<script setup lang="ts">
import { type GroupVariants, group } from "./group.variants";

interface Props {
	/**
	 * Alignment of items along the cross axis
	 */
	align?: GroupVariants["align"];
	/**
	 * Justification of items along the main axis
	 */
	justify?: GroupVariants["justify"];
	/**
	 * Spacing between items
	 */
	spacing?: GroupVariants["spacing"];
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	align: "center",
	class: undefined,
	justify: "start",
	spacing: "md",
});
</script>

<template>
	<div :class="group(props)">
		<slot />
	</div>
</template>
