<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import NavBarHeader from './NavBar/NavBarHeader.svelte';
	import NavBarOptions from './NavBar/NavBarOptions.svelte';
	import type { optionsTypes } from './NavBar/NavBarTypes';

	//required attributes

	export let options: optionsTypes = {
		// id that will be used to refer to the component
		id: '',

		// heading for the nav bar
		header: '',

		// file path for the image that could be included
		imgSrc: '',

		// class name for image for it to be easily accessible
		imgClass: '',

		// renders alternate text, if image is unavailable
		imgAlt: '',

		// It contains all the content to be displayed in your nav bar. Each object in the array must contain:
		contentInfo: []
	};
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
contentInfo : array of objects (required)
Each array in the object contains:
* subheading: string (optional)
* option: an array of strings (required)
* links: array (required)

header: string (optional)
imgSrc: string (optional)
imgClass: string (optional)
imgAlt: string (optional)
```
-->

<!-- ************************* HTML ************************* -->

<nav id={options.id} class="sv-navbar">
	<NavBarHeader
		header={options.header}
		imgSrc={options.imgSrc}
		imgClass={options.imgClass}
		imgAlt={options.imgAlt}
	/>
	<NavBarOptions contentInfo={options.contentInfo} />
</nav>

<!-- ************************* STYLES ************************* -->
<style>
	/*
    Style these however we'd like later
  */
</style>
