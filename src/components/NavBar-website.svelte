<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	// import favicon from '../images/svve11-logo-notext.png';
	import ImageLink from '../pending/ImageLink.svelte';
	import logo from '../images/svve11-logo-white-transparent-cropped.png';

	import NavBarOptions from '../lib/NavBar/NavBarOptions.svelte';
	import type { optionsTypes } from '../lib/NavBar/NavBarTypes';

	//required attributes
	export let options: optionsTypes = {
		id: '',
		header: '',
		imgSrc: '',
		imgClass: '',
		imgAlt: '',
		contentInfo: []
	};

	let isOpen: boolean = false;

	const toggleNav = () => {
		isOpen = !isOpen;
	};

	const imgLinkOptions = {
		href: '/',
		src: logo,
		title: 'svve11 homepage',
		alt: 'svve11 logo',
		imgId: 'svvell-logo'
	};
</script>

<!-- ************************* HTML ************************* -->
<button id="openbtn" on:click={toggleNav}> &#9776; </button>
<nav id={options.id} class="sv-navbar" class:open={isOpen}>
	<ImageLink options={imgLinkOptions} />
	<NavBarOptions contentInfo={options.contentInfo} />
</nav>

<!-- ************************* STYLES ************************* -->
<style lang="scss">
	/*
    Style these however we'd like later
  */
</style>
