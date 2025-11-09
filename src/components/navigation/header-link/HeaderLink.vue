<script setup lang="ts">
import { type AnchorHTMLAttributes, computed } from 'vue';
import { type HeaderLinkVariants, headerLink } from './header-link.variants';
import { useActiveLink } from './useActiveLink.composable';

interface Props extends /* @vue-ignore */ Omit<AnchorHTMLAttributes, "href" | "class">, HeaderLinkVariants {
	href?: AnchorHTMLAttributes["href"]; // Otherwise href is on $attrs not props
	class?: AnchorHTMLAttributes["class"];
	// Server-side pathname injection - avoids CSS animation on page load
	astroPathname: string
}

const props = defineProps<Props>();

const { isActive } = useActiveLink(props.href ?? "", props.astroPathname);
const { base, line } = headerLink({ active: isActive.value });
</script>

<template>
	<a v-bind="$attrs" :href="href" :class="base({ class: props.class })">
		<slot name="icon" />
		<div :class="line()">
			<slot />
		</div>
	</a>
</template>