<script setup lang="ts">
import { computed, useAttrs, useSlots, type InputHTMLAttributes } from "vue";

import Text from "../../typography/text/Text.vue";

import { textInput } from "./text-input.variants";

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
	/** Indicates whether the input is in an error state or displays an error message */
	error?: boolean | string;
}

const props = defineProps<Props>();

const attrs = useAttrs();

const slots = useSlots();
const hasErrorMessage = computed(
	() => typeof props.error === "string" && props.error.length > 0
);
const styles = computed(() =>
	textInput({
		disabled: !!attrs.disabled,
		error: !!props.error,
		withLeading: !!slots.leading,
		withTrailing: !!slots.trailing,
	})
);
</script>

<template>
	<div :class="styles.base()">
		<div v-if="!!slots.leading" :class="styles.static()">
			<slot name="leading" />
		</div>
		<input v-bind="$attrs" :class="styles.input()" />
		<div v-if="!!slots.trailing" :class="styles.static({ class: 'right-0' })">
			<slot name="trailing" />
		</div>

		<Text v-if="hasErrorMessage" as="span" :class="styles.error()">
			{{ error }}
		</Text>
	</div>
</template>
