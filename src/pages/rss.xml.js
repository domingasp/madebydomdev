import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		description: SITE_DESCRIPTION,
		items: blog.map((post) => ({
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
			link: `/blog/${post.id}/`,
			...post.data,
		})),
		site: context.site,
		stylesheet: "/rss/pretty-feed-v3.xsl",
		title: SITE_TITLE,
		trailingSlash: false,
	});
}
