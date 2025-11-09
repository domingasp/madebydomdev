<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from "vue";
import { type ButtonVariants, button } from "./button.variants";

interface Props extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, "class">, ButtonVariants { class?: HTMLAttributes["class"] }

const props = withDefaults(defineProps<Props>(), {
	...button.defaultVariants,
});
</script>

<template>
	<button v-bind="$attrs" :class="button({ variant, class: props.class })">
		<slot name="icon" />
		<slot />
	</button>
</template>