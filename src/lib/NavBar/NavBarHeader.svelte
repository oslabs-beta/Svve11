<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  //required attributes
  export let header: string = '';
  export let imgSrc: string = '';
  export let imgClass: string = '';
  export let imgAlt: string = '';
</script>


<!-- ************************* HTML ************************* -->

{#if header !== ''}
  <h2 id="navbar-header">{header}</h2>
{/if}

{#if imgSrc !== ''}
  <img 
    class={imgClass}
    src={imgSrc}
    alt={imgAlt}
  >
{/if}

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>