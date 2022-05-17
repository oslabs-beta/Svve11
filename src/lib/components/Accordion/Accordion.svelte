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
    for (let i = 0; i < options.panelInfo.length; i++) {
      panelStates.push(false);
    }
    panelStates = panelStates;
  });

  const updatePanelStates = (event) => {
    const panelIndex = Number(event.detail.target.slice(6)) - 1;

    if (panelStates[panelIndex] === true) {
      return (panelStates[panelIndex] = false);
    }

    if (!options.multiselectable) {
      for (let i = 0; i < options.panelInfo.length; i++) {
        if (i !== panelIndex) {
          panelStates[i] = false;
        } else if (i === panelIndex) {
          panelStates[i] = true;
        }
      }
    } else {
      panelStates[panelIndex] = true;
    }

    // panelStates = panelStates;
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
