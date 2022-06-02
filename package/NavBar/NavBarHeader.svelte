<!-- ************************* SCRIPTS ************************* -->
<script>//required attributes
// header of the nav bar
export let header;
// link to the src of the image
export let imgSrc;
// class name for the img for it be accessible
export let imgClass;
// alternate text if img does not display
export let imgAlt;
</script>

<!-- ************************* HTML ************************* -->
<!-- if the header exists then display the header -->
{#if header}
	<h2 id="sv-navbar-header">{header}</h2>
{/if}

<!-- Checking if image exists then display the image -->>
{#if imgSrc}
	<img class={imgClass} src={imgSrc} alt={imgAlt} />
{/if}

<!-- ************************* STYLES ************************* -->
<style>
</style>
