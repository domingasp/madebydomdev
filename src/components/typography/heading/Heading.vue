<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { heading, type HeadingVariants } from "./heading.variants";

interface Props extends HeadingVariants {
	class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
	...heading.defaultVariants,
	class: undefined,
});

const tag = `h${props.level}`;
</script>

<template>
	<component :is="tag" :class="heading({ level, class: props.class })"
		><slot
	/></component>
</template>
