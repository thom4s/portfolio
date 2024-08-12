<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
    import RichText from '$lib/Components/RichText.svelte';

	export let data;

    $: ({data} = data.page)
    $: console.log(data)

</script>


<div class="fl-column fl-between project">
    <div class="project_details">

        <div class="mb-medium">
            <p class="metadatas">{data.skills}</p>
        </div>

        <div class="fl-between fl-vcenter mb-medium">
            <h1>{data.client}</h1>
            <a href="{data.link.url}" target={data.link.target} class="">Voir le projet</a>
        </div>

        <div class="">
            <p class="mb-0">{data.date}</p>
            <RichText blocks={data.details} />
        </div>

    </div>

    <div class="project_cover">
        <img src="{data.cover_full.url}" alt="{data.cover_full.alt}">
    </div>
</div>


<style lang="scss">

    .project {
        gap: $space-xxl;
        min-height: 100%;
    }
    .project_details {
        p {
            margin: 0;
        }
        a {
            display: inline-block;
        }
    }
    .project_cover {
        align-self: flex-end;
        width: 60%;
    }
</style>