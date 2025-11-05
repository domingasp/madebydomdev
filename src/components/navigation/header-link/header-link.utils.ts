/**
 * Determine if a header link should be active based on the pathname
 * @param href - The link's href attribute
 * @param pathname - The current pathname (without base URL)
 * @returns `true` if the link should be active
 */
export function isHeaderLinkActive(href: string, pathname: string): boolean {
  const subpath = pathname.match(/[^\/]+/g);
  return href === pathname || href === "/" + (subpath?.[0] || "");
}
