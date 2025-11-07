import { onMounted, onUnmounted, ref } from "vue";

/**
 * Determine if a header link should be active based on the pathname
 * @param href - The link's href attribute
 * @param pathname - The current pathname (without base URL)
 * @returns `true` if the link should be active
 */
function isHeaderLinkActive(href: string, pathname: string): boolean {
	const subpath = pathname.match(/[^/]+/g);
	return href === pathname || href === `/${subpath?.[0] || ""}`;
}

export function useActiveLink(href: string) {
	const isActive = ref(false);

	function updateActive(pathname: string = window.location.pathname) {
		isActive.value = isHeaderLinkActive(href, pathname);
	}

	function handlePageLoad() {
		updateActive();
	}

	onMounted(() => {
		updateActive();
		document.addEventListener("astro:page-load", handlePageLoad);
	});

	onUnmounted(() => {
		document.removeEventListener("astro:page-load", handlePageLoad);
	});

	return {
		isActive,
		updateActive,
	};
}
