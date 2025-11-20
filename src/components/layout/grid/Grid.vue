<script setup lang="ts">
import { computed } from "vue";

import { grid, type GridVariants } from "./grid.variants";

interface Props {
	/**
	 * Number of columns, can be an array of custom sizes
	 */
	cols?: number | string[];
	/**
	 * Spacing between grid items
	 */
	spacing?: GridVariants["spacing"];
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	cols: 2,
	spacing: "md",
	class: undefined,
});

const gridColumns = computed(() =>
	typeof props.cols === "number"
		? `repeat(${props.cols.toString()}, max-content)`
		: props.cols.join(" ")
);
</script>

<template>
	<div
		:class="grid({ spacing, class: props.class })"
		:style="{ gridTemplateColumns: gridColumns }"
	>
		<slot />
	</div>
</template>
