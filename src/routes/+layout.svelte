<script>
    import '$lib/assets/scss/style.scss';
    import RichText from '$lib/Components/RichText.svelte';
    import { fade } from 'svelte/transition';

    export let data;
    $: ({projects, settings, pathname, friends } = data)
    $: console.log(data)
</script>

    <div class="screen fl-between">

        <header class="fl-column fl-between">

            <div class="upper"  class:faded={ pathname.includes('projets') }>

                <div class="mb-large">
                    <a href="/" class="no-style"><h1 class="h1">
                        <span class="h2">thomas florentin</span> <br>
                        <RichText blocks={settings.data.tagline} />
                        <span>samois sur seine / paris</span>
                    </h1></a>
                </div>

                <div class="mb-medium">
                    <h2 class="h2 mb-small">actualités</h2>
                    <RichText blocks={settings.data.news} />
                </div>

                <nav class="mb-0">
                    <h2 class="h2 mb-small">contacts</h2>
                    <ul class="contacts_list flex">
                        <li><a href="mailto:hello@thomasflorentin.net">mail</a></li>
                        <li><a href="https://www.malt.fr/profile/thomasflorentin" target="_blank">malt</a></li>
                        <li><a href="https://www.linkedin.com/in/thomas-florentin-15321870/" target="_blank">linkedin</a></li>
                        <li><a href="https://github.com/thom4s/" target="_blank">github</a></li>
                        <li><a href="https://www.strava.com/athletes/552790" target="_blank">strava</a></li>
                    </ul>
                </nav>
            </div>

            <div class="lower">

                <nav class="mb-large">
                    <h2 class="h2 mb-small">projets</h2>
                    <ul class="projects_list fl-column">
                        {#each projects as project}
                            <li><a href="{project.url}">{project.data.client}</a></li>
                        {/each}
                    </ul>
                </nav>

                <nav class="mb-medium">
                    <h2 class="h2 mb-small">friends</h2>
                    <ul class="projects_list fl-column">
                        {#each friends as friend}
                            <li><a href="{friend.data.website?.url}" target="_blank">{friend.data.name}</a></li>
                        {/each}
                    </ul>
                </nav>

            </div>
        </header>


        <main class="">
            {#key data.pathname}
                <div 
                    class="template-outer"
                    in:fade={{ duration: 500, delay: 300 }} 
                    out:fade={{ duration: 200 }}>
                    <slot />
                </div>
            {/key}
        </main>


        <footer>
            
        </footer>
    </div>

<style lang="scss">
    .screen {
        height: 100%;
        @include max(tablet) {
           flex-direction: column;
        }
    }

    header {
        width: 30%;
        flex: 0 0 30%;

        @include min(tablet) {
            height: 100%;
            border-right: 1px solid $gray-light;
        }
        @include max(bigtablet) {
            width: 50%;
            flex: 0 0 50%;
        }
        @include max(tablet) {
            width: 100%;
            flex: 0 0 100%;
        }
    }

        .upper {
            flex: 0 0 auto;
            background-color: black;
            padding: $space-m;
            color: white;
            overflow-y: scroll;

            @include min(tablet) {
                border-bottom: 1px solid $gray-light;
            }
            & > * {
                transition: opacity .8s;
            }
        }
        .lower {
            flex: 1 1 auto;
            background-color: black;
            padding: $space-m;
            color: white;
            overflow-y: scroll;
            font-size: 1.8rem;
        }

        .faded > * {
            opacity: .6;
        }

    main {
        background-color: black;
        color: white;
        width: 70%;
        flex: 0 0 70%;
        padding: $space-m $space-m;

        @include min(tablet) {
            max-height: calc( 100vh - 20px);
            overflow-y: scroll;
        }
        @include max(bigtablet) {
            width: 50%;
            flex: 0 0 50%;
        }
        @include max(tablet) {
            width: 100%;
            flex: 0 0 100%;
        }
    }
        .template-outer {
            height: 100%;
        }

    .contacts_list {
        font-size: 1.6rem;
    }

</style>