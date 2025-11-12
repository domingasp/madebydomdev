<script setup lang="ts">
import { type GroupVariants, group } from "./group.variants";

interface Props extends GroupVariants {
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	...group.defaultVariants,
	class: "",
});
</script>

<template>
	<div :class="group(props)">
		<slot />
	</div>
</template>
