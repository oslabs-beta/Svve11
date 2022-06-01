<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import NavBarLists from './NavBarLists.svelte';
	import type { sectionTypes } from './NavBarTypes';

	//required attributes
	// contents that needs to be displayed in nav bar goes in here
	export let contentInfo: sectionTypes[] = [];
</script>

<!-- ************************* HTML ************************* -->

<!-- iterating through the contentInfo array and displaying links, headeer for each section of the nav bar and string -->
{#each contentInfo as content, i}
	<NavBarLists subheading={content.subheading} options={content.options} links={content.links} />
{/each}

<!-- ************************* STYLES ************************* -->
<style>
	/*
    Style these however we'd like later
  */
</style>
