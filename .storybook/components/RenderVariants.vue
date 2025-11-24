<script
	lang="ts"
	setup
	generic="T extends Record<string, any>, P extends keyof T"
>
import { computed } from "vue";

import Grid from "../../src/components/layout/grid/Grid.vue";
import Group from "../../src/components/layout/group/Group.vue";
import Stack from "../../src/components/layout/stack/Stack.vue";
import Text from "../../src/components/typography/text/Text.vue";

interface Props {
	component: T;
	prop: P;
	variants: T[P][];
	orientation?: "vertical" | "horizontal";
	restProps?: Partial<T>;
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	class: undefined,
	orientation: "horizontal",
	restProps: () => ({}),
});

const isHorizontal = computed(() => props.orientation === "horizontal");
</script>

<template>
	<Group v-if="isHorizontal" :class="props.class">
		<Stack
			v-for="variant in variants"
			:key="String(variant)"
			align="center"
			spacing="sm"
		>
			<Text align="center" class="self-center" color="secondary" size="sm">
				{{ variant }}
			</Text>
			<component :is="component" v-bind="{ ...restProps, [prop]: variant }">
				<slot />
			</component>
		</Stack>
	</Group>

	<Grid v-else :cols="['max-content', '1fr']" :class="props.class">
		<template v-for="variant in variants" :key="String(variant)">
			<Text align="center" class="self-center" color="secondary" size="sm">
				{{ variant }}
			</Text>
			<component :is="component" v-bind="{ ...restProps, [prop]: variant }">
				<slot />
			</component>
		</template>
	</Grid>
</template>
