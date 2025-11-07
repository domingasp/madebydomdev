<script setup lang="ts">
import { type GroupVariants, group } from "./group.variants";

const props = withDefaults(
	defineProps<GroupVariants & {
		class?: string;
	}>(),
	{
		...group.defaultVariants,
		class: "",
	},
);
</script>

<template>
	<div :class="group(props)">
		<slot />
	</div>
</template>