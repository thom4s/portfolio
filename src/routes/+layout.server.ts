// TODO: ERROR avec Prismic
// export const prerender = 'auto';

import { createClient } from '$lib/prismicio';


/** @type {import('./$types').PageServerLoad} */
export async function load({  url}) {
	const client = createClient();
	const { pathname } = url;

	const settings = await client.getSingle('settings');
	const cgv = await client.getByUID('page', 'cgv');
	const mentions = await client.getByUID('page', 'mentions-legales');
	const projects = await client.getAllByType('projet');
	const friends = await client.getAllByType('friends');
	
	return {
		pathname,
		settings,
        projects,
		friends,
		cgv,
		mentions
	};
}