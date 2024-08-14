<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
    import RichText from '$lib/Components/RichText.svelte';

	export let data;

    $: ({data} = data.page)

</script>


<div class="fl-column fl-between page">
    <div class="page_details">

        <div class="fl-between fl-vcenter mb-medium">
            <h1 class="h1">{data.title}</h1>
        </div>

        <div class="">
            <RichText blocks={data.content} />
        </div>

    </div>

</div>


<style lang="scss">

    .page {
        min-height: 100%;

        @include min( tablet) {
            gap: $space-xxl;
        }
        @include max( tablet) {
            gap: $space-m;
        }
    }
    .page_details {
        a {
            display: inline-block;
        }
    }
</style>