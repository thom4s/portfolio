export function load({ params }) {
	return {
		projet: {
			title: `Title for ${params.slug} goes here`,
		}
	};
}