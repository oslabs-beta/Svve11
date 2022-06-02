<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import NavBarHeader from './NavBar/NavBarHeader.svelte';
	import NavBarOptions from './NavBar/NavBarOptions.svelte';
	import type { optionsTypes } from './NavBar/NavBarTypes';

	export let options: optionsTypes = {
		// It contains all the content to be displayed in your nav bar. Each object in the array must contain:
		contentInfo: []
	};

	let { id, header, imgSrc, imgClass, imgAlt, contentInfo } = options;
</script>

<!-- @component
Props are passed in through the options object which contains the following properties:
```tsx
contentInfo : array of objects (required)
Each object in the array contains:
- subheading: string (optional)
- option: an array of strings (required)
- links: array (required)

id: string (optional)
header: string (optional)
imgSrc: string (optional)
imgClass: string (optional)
imgAlt: string (optional)
```
-->

<!-- ************************* HTML ************************* -->

<nav {id} class="sv-navbar">
	<NavBarHeader {header} {imgSrc} {imgClass} {imgAlt} />
	<NavBarOptions {contentInfo} />
</nav>

<!-- ************************* STYLES ************************* -->
<style>
</style>
