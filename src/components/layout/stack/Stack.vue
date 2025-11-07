<script setup lang="ts">
import { type StackVariants, stack } from './stack.variants';

const props = withDefaults(
	defineProps<StackVariants & {
		class?: string;
	}>(),
	{
		...stack.defaultVariants,
		class: "",
	},
);
</script>

<template>
	<div :class="stack(props)">
		<slot />
	</div>
</template>