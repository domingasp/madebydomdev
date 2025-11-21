<script setup lang="ts">
import { heading, type HeadingVariants } from "./heading.variants";

interface Props {
	/**
	 * Heading level from 1 to 6
	 */
	level?: HeadingVariants["level"];
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	class: undefined,
	level: 3,
});

const tag = `h${props.level}`;
</script>

<template>
	<component :is="tag" :class="heading({ level, class: props.class })"
		><slot
	/></component>
</template>
