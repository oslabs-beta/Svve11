<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	//required attributes
	// Sets the subheading for this section of the nav bar.
	export let subheading: string = '';

	export let options: string[] = [];

	// Sets the href attributes for each option provided.
	export let links: string[] = [];
</script>

<!-- ************************* HTML ************************* -->
<!-- if subheading exits then display the subheading -->
{#if subheading !== ''}
	<h3 class="sv-navbar-subheader">{subheading}</h3>
{/if}

<!-- iterating through the options, display the link and options string -->
<ul class="sv-navbar-section">
	{#each options as option, i}
		<li class="sv-navbar-option"><a href={links[i]} target={links[i][0] !== '/' ? '_blank' : ''}>{option}</a></li>
	{/each}
</ul>

<!-- ************************* STYLES ************************* -->
<style>
	/*
    Style these however we'd like later
  */
</style>
