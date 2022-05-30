<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import NavBarHeader from './NavBar/NavBarHeader.svelte';
	import NavBarOptions from './NavBar/NavBarOptions.svelte';
	import type { optionsTypes } from './NavBar/NavBarTypes';

	//required attributes
	export let options: optionsTypes = {
		id: '',
		header: '',
		imgSrc: '',
		imgClass: '',
		imgAlt: '',
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
