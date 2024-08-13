<script>
    import '$lib/assets/scss/style.scss';
    import RichText from '$lib/Components/RichText.svelte';
    import { fade } from 'svelte/transition';
    import { gsap } from "gsap";
    import { onMount } from 'svelte';

    export let data;
    $: ({projects, settings, pathname, friends } = data)
    $: console.log(data)


    onMount( () => {
        //WITH Timelines (cleaner, more versatile)
        // var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
        // tl.to("#upper", {opacity: 1, duration: 1});
        // tl.to("#lower", {opacity: 1, duration: 1});
        // tl.to("#main", {opacity: 1, duration: 1});

        // then we can control the whole thing easily...
        //tl.play();

        //scroll to 250 pixels down from the top of the content in the div
        //gsap.to("#lower", { duration: 2, scrollTo: 250 });

    })


</script>

    <div class="screen fl-between">

        <header class="fl-column fl-between">

            <div class="line"></div>

            <div id="upper" class="upper" class:faded={ pathname.includes('projets') }>
                <div class="line"></div>

                <div class="mb-large site-title">
                    <a href="/" class="no-style"><h1 class="h2">
                        <p class="h3 name">thomas florentin</p>
                        <RichText blocks={settings.data.tagline} />
                        <p class="place">samois sur seine / paris</p>
                    </h1></a>
                </div>

                <div class="mb-medium">
                    <h2 class="h3 mb-xsmall">actualités</h2>
                    <RichText blocks={settings.data.news} />
                </div>

                <nav class="mb-small">
                    <h2 class="h3 mb-xsmall">contacts</h2>
                    <ul class="contacts_list flex">
                        <li><a href="mailto:hello@thomasflorentin.net">mail</a></li>
                        <li><a href="https://www.malt.fr/profile/thomasflorentin" target="_blank">malt</a></li>
                        <li><a href="https://www.linkedin.com/in/thomas-florentin-15321870/" target="_blank">linkedin</a></li>
                        <li><a href="https://github.com/thom4s/" target="_blank">github</a></li>
                        <li><a href="https://www.strava.com/athletes/552790" target="_blank">strava</a></li>
                    </ul>
                </nav>
            </div>

            <div id="lower" class="lower">

                <nav class="mb-large">
                    <h2 class="h3 mb-small">projets</h2>
                    <ul class="projects_list fl-column">
                        {#each projects as project}
                            <li><a href="{project.url}">{project.data.client}</a></li>
                        {/each}
                    </ul>
                </nav>

                <nav class="mb-medium">
                    <h2 class="h3 mb-small">friends</h2>
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

    .line {
        background-color: $gray-light;
        z-index: 9;
        position: absolute;
        right: 0;
        animation-fill-mode: forwards;
        animation-duration: 2s;
    }

    header {
        position: relative;
        width: 35%;
        flex: 0 0 35%;

        @include min(tablet) {
            height: 100%;
            //border-right: 1px solid $gray-light;
        }
        @include max(bigtablet) {
            width: 50%;
            flex: 0 0 50%;
        }
        @include max(tablet) {
            width: 100%;
            flex: 0 0 100%;
        }

        & > .line {
            top: 0;
            bottom: 0;
            width: 1px;
            height: 0%;
            animation-name: drawVertical;
        }
    }

        .upper {
            position: relative;
            flex: 0 0 auto;
            background-color: black;
            padding: $space-m;
            color: white;
            overflow-y: scroll;

            @include min(tablet) {

                & > .line {
                    bottom: 0;
                    left: 0;
                    height: 1px;
                    width: 0%;
                    animation-name: drawHorizontal;
                    animation-delay: .4s;
                }
                
            }
            & > * {
                transition: opacity .8s;
            }
        }

        .site-title {
            :global(p) {
                margin-bottom: 0;
                line-height: 1.2;
            }
            .name {
                font-weight: 700;
                letter-spacing: normal;
            }
            .place {
                color: $gray-light;
            }
        }

        .lower {
            flex: 1 1 auto;
            background-color: black;
            padding: $space-m;
            color: white;
            overflow-y: scroll;
            font-size: 1.8rem;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        .faded > *:not(.line) {
            opacity: .6;
        }


    @keyframes drawVertical {
        100% {
            height: 100%;
        }
    }
    @keyframes drawHorizontal {
        100% {
            width: 100%;
        }
    }


    main {
        background-color: black;
        color: white;
        width: 65%;
        flex: 0 0 65%;
        padding: $space-m $space-m;

        @include min(tablet) {
            max-height: calc( 100vh - 10px);
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