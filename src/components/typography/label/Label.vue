<script setup lang="ts">
import type { LabelHTMLAttributes } from "vue";

import { label } from "./label.variants";

interface Props extends /* @vue-ignore */ Omit<LabelHTMLAttributes, "class"> {
	class?: LabelHTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
	<label v-bind="$attrs" :class="label({ class: props.class })">
		<slot />
	</label>
</template>
