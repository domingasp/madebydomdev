<script setup lang="ts">
import {
	computed,
	useSlots,
	type ButtonHTMLAttributes,
	type HTMLAttributes,
} from "vue";

import { type ButtonVariants, button } from "./button.variants";

interface Props extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, "class"> {
	/** Button intent */
	variant?: ButtonVariants["variant"];
	class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
	class: undefined,
	variant: "primary",
});

const slots = useSlots();
const iconOnly = computed(() => !!slots.icon && !slots.default);
const withIcon = computed(() => !!slots.icon);

const styles = computed(() =>
	button({
		iconOnly: iconOnly.value,
		variant: props.variant,
		withIcon: withIcon.value && !iconOnly.value,
	})
);
</script>

<template>
	<button
		v-bind="$attrs"
		:class="
			styles.base({
				class: props.class,
			})
		"
	>
		<div v-if="!!slots.icon" :class="styles.icon()"><slot name="icon" /></div>
		<slot />
	</button>
</template>
