<script lang="ts">
	// @ts-nocheck

	import AccordionButton from './AccordionButton.svelte';
	import type { accordionStylesObject } from './AccordionTypes';
	export let headerLevel: number = 3;
	export let headerTitle: string;
	export let controls: string = '';
	export let customStyles: accordionStylesObject;
	export let textToRead: string = '';
	export let id: string;
	export let isOpen: boolean;
</script>

<!-- Header Attributes:
  aria-level is an important accessibility attribute that sets the level of the header in your document
  role is also set to heading for screen reading assistance purposes
  style set to styles string passed down -->
<div
	class="sv-accordion-header"
	aria-level={headerLevel}
	role="heading"
	style={customStyles.accordionHeaderStyle}
>
	<!-- All button attributes are passed directly at this point from header to button -->
	<AccordionButton
		on:updatePanelStates
		{textToRead}
		{headerTitle}
		{controls}
		{id}
		{customStyles}
		{isOpen}
	/>
</div>

<style>
	.sv-accordion-header {
		height: auto;
		width: 100%;
	}
</style>
