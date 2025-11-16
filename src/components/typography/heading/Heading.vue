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
	level: 3,
	class: undefined,
});

const tag = `h${props.level}`;
</script>

<template>
	<component :is="tag" :class="heading({ level, class: props.class })"
		><slot
	/></component>
</template>
