<script setup lang="ts">
import { type StackVariants, stack } from "./stack.variants";

interface Props extends StackVariants {
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	...stack.defaultVariants,
	class: "",
});
</script>

<template>
	<div :class="stack(props)">
		<slot />
	</div>
</template>
