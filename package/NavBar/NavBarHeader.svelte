<!-- ************************* SCRIPTS ************************* -->
<script>//required attributes
export let header = '';
export let imgSrc = '';
export let imgClass = '';
export let imgAlt = '';
</script>


<!-- ************************* HTML ************************* -->

{#if header !== ''}
  <h2 id="sv-navbar-header">{header}</h2>
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