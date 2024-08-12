import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {

	const client = createClient({ fetch, cookies });
	const page = await client.getByUID('projet', params.uid);

	return {
		page
	}
}
