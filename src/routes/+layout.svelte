<script>
    import '$lib/assets/scss/style.scss';
    import RichText from '$lib/Components/RichText.svelte';

    export let data;
    $: ({projects, settings} = data)
    $: console.log(data)
</script>

    <div class="screen fl-between">

        <header class="fl-column fl-between">

            <div class="upper">
                <h1 class="h1">
                    thomas florentin <br>
                    <RichText blocks={settings.data.tagline} />
                </h1>
                <nav>
                    <h2 class="h2">contacts</h2>
                    <ul class="contacts_list flex">
                        <li><a href="mailto:hello@thomasflorentin.net">mail</a></li>
                        <li><a href="/projets">linkedIn</a></li>
                    </ul>
                </nav>
            </div>

            <div class="lower">
                <nav>
                    <h2 class="h2">projets</h2>
                    <ul class="projects_list fl-column">
                        {#each projects as project}
                            <li><a href="/projets{project.url}">{project.data.client}</a></li>
                        {/each}
                    </ul>
                </nav>
            </div>
        </header>


        <main>
            <slot />
        </main>
    </div>

<style lang="scss">
    header {
        width: 30%;
        flex: 0 0 30%;
    }
        .upper, .lower {
            height: calc( 50vh - 10px);
        }
        .upper {
            background-color: black;
            padding: $space-s;
            color: white;
        }
        .lower {
            background-color: black;
            padding: $space-s;
            color: white;
        }

    main {
        background-color: black;
        color: white;
        width: 70%;
        flex: 0 0 70%;
    }

    .contacts_list {
        font-size: 1.6rem;
    }

</style>