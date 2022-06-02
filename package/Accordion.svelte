<script>import { onMount } from 'svelte';
import AccordionItem from './Accordion/AccordionItem.svelte';
export let options = {
    multiselectable: false,
    headerLevel: undefined,
    panelInfo: []
};
let styles;
$: styles;
// if no custom styles supplied, set styles array to be all null
if (!options.styles) {
    options.styles = {
        accordionHeaderStyle: '',
        accordionPanelStyle: '',
        accordionItemStyle: '',
        overallAccordionStyle: ''
    };
}
styles = options.styles;
if (!styles.accordionHeaderStyle)
    styles.accordionHeaderStyle = '';
if (!styles.accordionPanelStyle)
    styles.accordionPanelStyle = '';
if (!styles.accordionItemStyle)
    styles.accordionItemStyle = '';
if (!styles.overallAccordionStyle)
    styles.overallAccordionStyle = '';
// Instantiate panelStates and set as reactive
let panelStates;
$: panelStates = [];
onMount(() => {
    //Initially set all panelStates to be false
    for (let i = 0; i < options.panelInfo.length; i++) {
        panelStates.push(false);
    }
    panelStates = panelStates;
});
// Need to type the event input and confirm the function is typed propery
const updatePanelStates = (event) => {
    // Determin index of panel to be expanded
    const panelIndex = Number(event.detail.target.slice(6)) - 1;
    // If panel at the index to be changed is already true, set to false (i.e. collapse the panel)
    if (panelStates[panelIndex] === true) {
        panelStates[panelIndex] = false;
        return;
    }
    // If only one panel should be open at a time
    if (!options.multiselectable) {
        // Set all panels states to be false except at the panel to be expanded index
        for (let i = 0; i < options.panelInfo.length; i++) {
            if (i !== panelIndex) {
                panelStates[i] = false;
            }
            else if (i === panelIndex) {
                panelStates[i] = true;
            }
        }
        // If multiple panels can be open at any given time
    }
    else {
        //Simply set the panel state at the given panel to be ture (i.e. expanded)
        panelStates[panelIndex] = true;
    }
};
</script>

<!-- aria-multiselectable indicates whether accordion permits multiple panels to be open at once 
style are the custom styles supplied by a user of the library for the Accordion -->
<div
	class="sv-accordion-main"
	aria-multiselectable={options.multiselectable}
	style={styles.overallAccordionStyle}
>
	<!-- Each loop iterating over the array of panelInfo, setting:
    options of item as the panel info for a given item
    headerLevel as the header level from options
    customStyles attribute passes down the styles object 
    isOpen is a reactive attribute that will change from false to true and back when item's panel expands and collapses 
    supply updatePanelStates function to be passed through props to the button in the header -->
	{#each options.panelInfo as info, i}
		<AccordionItem
			options={info}
			headerLevel={options.headerLevel}
			customStyles={styles}
			isOpen={panelStates[i]}
			on:updatePanelStates={updatePanelStates}
		/>
	{/each}
</div>

<!-- Default styles for accordion -->
<style>
	.sv-accordion-main {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
