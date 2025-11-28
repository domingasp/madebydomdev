<script setup lang="ts">
import { computed, useSlots, type InputHTMLAttributes } from "vue";

import Text from "../../typography/text/Text.vue";

import { textInput } from "./text-input.variants";

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
	/** Indicates whether the input is in an error state or displays an error message */
	error?: boolean | string;
}

const props = defineProps<Props>();

const slots = useSlots();
const hasErrorMessage = computed(
	() => typeof props.error === "string" && props.error.length > 0
);
const styles = computed(() =>
	textInput({
		error: !!props.error,
		withLeft: !!slots.left,
		withRight: !!slots.right,
	})
);
</script>

<template>
	<div :class="styles.base()">
		<div v-if="!!slots.left" :class="styles.static()">
			<slot name="left" />
		</div>
		<input v-bind="$attrs" :class="styles.input()" />
		<div v-if="!!slots.right" :class="styles.static({ class: 'right-0' })">
			<slot name="right" />
		</div>

		<Text v-if="hasErrorMessage" as="span" :class="styles.error()">
			{{ error }}
		</Text>
	</div>
</template>
