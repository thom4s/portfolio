export const prerender = 'auto';

import { createClient } from '$lib/prismicio';


/** @type {import('./$types').PageServerLoad} */
export async function load({  }) {
	const client = createClient();

	const settings = await client.getSingle('settings');
	const projects = await client.getAllByType('projet');

	return {
		settings,
        projects
	};
}