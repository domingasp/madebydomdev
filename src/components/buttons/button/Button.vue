<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from "vue";

import { type ButtonVariants, button } from "./button.variants";

interface Props
	extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, "class" | "disabled"> {
	/** Button intent */
	variant?: ButtonVariants["variant"];
	disabled?: ButtonVariants["disabled"];
	class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
	class: undefined,
	disabled: false,
	variant: "primary",
});
</script>

<template>
	<button
		v-bind="$attrs"
		:disabled="disabled"
		:class="button({ variant, disabled, class: props.class })"
	>
		<slot name="icon" />
		<slot />
	</button>
</template>
