<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  import NavBarLists from './NavBarLists.svelte';
  import type { sectionTypes } from './NavBarTypes';

  //required attributes
  export let contentInfo: sectionTypes[] = [];

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