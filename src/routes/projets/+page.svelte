<script>
    export let data;
    console.log(data)
</script>


<ul>
    {#each data.projects as project}
        <li><a href="/projets{project.url}">{project.data.client}</a></li>
    {/each}
</ul>



<style>
    
</style>