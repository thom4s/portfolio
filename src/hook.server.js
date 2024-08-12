/** @type {import('@sveltejs/kit').Handle} */


export const handle = async ({ event, resolve }) => {

	console.log(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`)
	console.log('hooks.server.ts')

	console.log(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE`)

	const response = await resolve(event);
	return response;
};
