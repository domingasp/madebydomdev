<script setup lang="ts">
import { computed } from 'vue';
import Group from '../../layout/group/Group.vue';
import { headerLink } from './header-link.variants';
import { useActiveLink } from './useActiveLink.composable';

const props = defineProps<{
	href: string;
	// Server-side pathname injection - avoids CSS animation on page load
	astroPathname: string;
}>();

const { href, astroPathname } = props;

const { isActive } = useActiveLink(href, astroPathname);
const styles = computed(() => headerLink({ active: isActive.value }));
</script>

<template>
	<a :href="href" :class="styles.base()">
		<Group spacing="sm" class="p-sm">
			<slot name="icon" />
			<div :class="styles.line()">
				<slot />
			</div>
		</Group>
	</a>
</template>