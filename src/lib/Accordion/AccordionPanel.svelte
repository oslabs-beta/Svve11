<script lang="ts">
	export let panelContent: string = '';
	export let isOpen: boolean;
	export let panelID: string;
	export let labeledBy: string;
	export let style: string = '';
</script>

<!-- Panel Attributes:
  role set to region for accessibility purposes
  class of open-panel assigned only when isOpen is true to enable text to show
  id set to passed panelID
  aria-labelledby set to the ID of the button labeling the panel 
  styles set to custom styles string passed down-->
<div
	class="sv-accordion-panel"
	role="region"
	class:open-panel={isOpen}
	id={panelID}
	aria-labelledby={labeledBy}
	{style}
>
	<!-- when panel is set to open/expand, make a <p> of panel content appear in <div> -->
	{#if isOpen}
		<p>{panelContent}</p>
	{/if}
</div>

<!-- default styles -->
<style>
	.sv-accordion-panel {
		height: 0;
		border: 0;
	}

	.open-panel {
		height: auto;
		width: auto;
		border: solid 1px black;
		padding: 0px 10px;
		margin: 0;
	}
</style>
