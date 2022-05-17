<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";

  import AccordionItem from "./AccordionItem.svelte";
  export let options = {
    multiselectable: false,
    headerLevel: null,
    styles: ["", ""],
    panelInfo: [],
  };

  if (!options.styles) {
    options.styles = [null, null, null, null];
  }

  let panelStates;
  $: panelStates = [];

  onMount(() => {
    //Initially set all panelStates to be false
    for (let i = 0; i < options.panelInfo.length; i++) {
      panelStates.push(false);
    }
    panelStates = panelStates;
  });

  const updatePanelStates = (event) => {
    // Determin index of panel to be expanded
    const panelIndex = Number(event.detail.target.slice(6)) - 1;
    // If panel at the index to be changed is already true, set to false (i.e. collapse the panel)
    if (panelStates[panelIndex] === true) {
      return (panelStates[panelIndex] = false);
    }

    // If only one panel should be open at a time
    if (!options.multiselectable) {
      // Set all panels states to be false except at the panel to be expanded index
      for (let i = 0; i < options.panelInfo.length; i++) {
        if (i !== panelIndex) {
          panelStates[i] = false;
        } else if (i === panelIndex) {
          panelStates[i] = true;
        }
      }
      // If multiple panels can be open at any given time
    } else {
      //Simply set the panel state at the given panel to be ture (i.e. expanded)
      panelStates[panelIndex] = true;
    }
  };
</script>

<div
  class="accordion-main"
  aria-multiselectable={options.multiselectable}
  style={options.styles[3]}
>
  {#each options.panelInfo as info, i}
    <AccordionItem
      options={info}
      headerLevel={options.headerLevel}
      customStyles={options.styles}
      isOpen={panelStates[i]}
      on:updatePanelStates={updatePanelStates}
    />
  {/each}
</div>

<style>
  .accordion-main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
