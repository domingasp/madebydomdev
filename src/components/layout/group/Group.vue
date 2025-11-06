<script setup lang="ts">
import { type GroupVariants, group } from "./group.variants";

// TODO elegant solution
const props = withDefaults(
	defineProps<Pick<GroupVariants, "align" | "justify" | "spacing"> & {
		// align?: GroupVariants["align"];
		// justify?: GroupVariants["justify"];
		// spacing?: GroupVariants["spacing"];
		class?: string;
	}>(),
	{
		align: "center",
		justify: "start",
		spacing: "md",
		class: "",
	},
);
</script>

<template>
	<div :class="group(props)">
		<slot />
	</div>
</template>