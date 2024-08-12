import { createClient } from '$lib/prismicio';

export async function load() {

	const client = createClient();
	const projects = await client.getAllByType('projet');

	return {
		projects
	}
}