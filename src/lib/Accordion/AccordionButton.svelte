<script lang="ts">
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import type { accordionStylesObject } from './AccordionTypes';

	export let headerTitle: string;
	export let controls: string;
	export let id: string;
	export let customStyles: accordionStylesObject;
	export let textToRead: string;
	export let isOpen: boolean;

	//this function is an event dispatcher which will dispatch to the main accordion containing the
	//the panel states for every panel to invoke the function, passing in the button target as an option
	const dispatch = createEventDispatcher<{
		updatePanelStates: {
			target: string;
		};
	}>();

	//I cannot figure out how to type the event here!!
	const handleHeaderClick = (event: MouseEvent): void => {
		dispatch('updatePanelStates', {
			target: event.target.id
		});
		return;
	};
</script>

<!-- Button Attributes:
  aria-expanded tells whether the panel content is exapnded or not for screen reading purposes
  aria-controls tells which panel the button controls
  aria-label containes the text of the panel only when the panel is open so that the screen reader can read it
  on click of the button, the handleHeaderClick function above is invoked -->
<button
	class="sv-accordion-button"
	aria-expanded={isOpen}
	aria-controls={controls}
	aria-label={isOpen ? textToRead : ''}
	{id}
	on:click={(event) => handleHeaderClick(event)}
	style={customStyles.accordionHeaderStyle}
>
	<!-- if no header title is supplied in options object, then a default phrase reminds the user to supply one! -->
	{headerTitle ? headerTitle : 'Please define header title in options object!'}
</button>

<style>
	.sv-accordion-button {
		height: 100%;
		width: 100%;
		padding: 1em;
		margin: 0;
	}

	.sv-accordion-button:focus {
		border-width: 5px;
	}
</style>
