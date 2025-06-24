import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const SITE_TITLE = "Muhammad Fiaz | Full Stack Developer";
const SITE_DESCRIPTION = "Welcome to my portfolio! Discover my latest projects, skills, and professional journey as a full stack developer.";

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug ?? post.id ?? ''}/`,
			guid: `https://muhammadfiaz.com/${post.slug ?? post.id ?? ''}/`
		}))
	});
}
