<!-- ************************* SCRIPTS ************************* -->
<script>import NavBarLists from './NavBarLists.svelte';
//required attributes
export let contentInfo = [];
</script>


<!-- ************************* HTML ************************* -->
{#each contentInfo as content, i}
    <NavBarLists
      subheading={content.subheading}
      options={content.options}
      links={content.links}
    />
{/each}


<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>