import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://muhammadfiaz.com',
	integrations: [mdx(), sitemap(), partytown(), robotsTxt()],

	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'muhammadfiaz.com'
				}
			]
		]
	},

	vite: {
		plugins: [tailwindcss()]
	}
});
