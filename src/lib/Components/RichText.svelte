<script>
    export let blocks = [];
    console.log('blocks', blocks)
</script>


{#if blocks }
    {#each blocks as block}

        {#if block.type === "paragraph" }
            <p>
                {#if block.children }
                    {#each block.children as child}
                        {#if child.bold  }
                            <span class="bold">{@html child.text}</span>
                        {:else}
                            {@html child.text}
                        {/if}
                    {/each}

                {:else}
                    {block.text}
                {/if}
            </p>

        {:else if block.type === "list-item" }
            <li>{block.text}</li>

        {:else if block.type === "heading2" }
            <h2>{@html block.text}</h2>

        {:else if block.type === "heading3" }
            <h3>{@html block.text}</h3>

        {/if}
    {/each}
{/if}
<style lang="scss">
    p {
        margin-bottom: $space-s;
    }
    h1, h2, h3 {
        color: inherit;
    }
    h2 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
    .bold {
        font-weight: 900;
    }
    li {
        padding-left: $space-xs;
        margin-left: $space-s;
    }
</style>