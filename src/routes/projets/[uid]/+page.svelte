<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

    $: ({data} = data.page)
    $: console.log(data)

</script>


<h1>{data.client}</h1>

{#each data.details as detail}
    <p>{detail.text}</p>
{/each}

<p>{data.date}</p>
<p>{data.skills}</p>

<img src="{data.cover_full.url}" alt="{data.cover_full.alt}">


