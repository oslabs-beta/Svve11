<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	//required attributes

	// header of the nav bar
	export let header: string;

	// link to the src of the image
	export let imgSrc: string;

	// class name for the img for it be accessible
	export let imgClass: string;

	// alternate text if img does not display
	export let imgAlt: string;
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
