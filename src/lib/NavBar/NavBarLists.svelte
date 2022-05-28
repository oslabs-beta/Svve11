<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  //required attributes
  export let subheading: string = '';
  export let options: string[] = [];
  export let links: string[] = [];

</script>


<!-- ************************* HTML ************************* -->
  {#if subheading !== ''}
    <h3 class="sv-navbar-subheader">{subheading}</h3>
  {/if}

<ul class="sv-navbar-section">
  {#each options as option, i}
    <li class="sv-navbar-option"><a href={links[i]}>{option}</a></li>
  {/each}
</ul>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
