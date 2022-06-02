<script>// @ts-nocheck
import AccordionPanel from './AccordionPanel.svelte';
import AccordionHeader from './AccordionHeader.svelte';
export let options;
export let headerLevel = 2;
export let customStyles;
export let isOpen;
// this is to supply the data-state of the accordion item with expanded
// when panel is open and collapsed when panel is closed
let state;
$: state = isOpen ? 'expanded' : 'collapsed';
</script>

<!-- data-state tells if the accordion item is expanded or collapsed
    style takes the styles aupplied in the 2nd index of the custom styles array supplied in the options object -->
<div class="sv-accordion-item" data-state={state} style={customStyles.accordionItemStyle}>
	<!-- Header attributes:
    updatePanelStates function from Accordion Main
    headerTitle supplied in the panel info of the options object
    controls takes the id of the panel that the header button will control when clicked
    id is the unique id which will be passed to the header button
    textToRead provides the contents of the panel for screen reading ability of focus button
    style takes the styles string from the user supplied custom styles object
    passing the reactive isOpen variable
    passing the headerLevel from the options object  -->
	<AccordionHeader
		on:updatePanelStates
		headerTitle={options.headerTitle}
		controls={`panel${options.id}`}
		id={`button${options.id}`}
		textToRead={options.panelContent}
		{customStyles}
		{isOpen}
		{headerLevel}
	/>

	<!-- Panel attributes
    panelContent take the string of text to be displayed in the panel from the options object
    panelID set to panel with the appropriate id number
    labeledBy is supplied the id of the button that labels the panel
    style takes the custom styles supplied in styles object
    passing the reactive isOpen variable -->
	<AccordionPanel
		panelContent={options.panelContent}
		panelID={`panel${options.id}`}
		labeledBy={`button${options.id}`}
		style={customStyles.accordionPanelStyle}
		{isOpen}
	/>
</div>

<!-- Default styles -->
<style>
	.sv-accordion-item {
		width: 100%;
		height: auto;
	}
</style>
