<script>
  // @ts-nocheck

  import InaccessibleAccordionPanel from "./InaccessibleAccordionPanel.svelte";
  import InaccessibleAccordionHeader from "./InaccessibleAccordionHeader.svelte";

  export let options;
  export let headerLevel = 2;
  export let customStyles;
  export let isOpen;

  $: state = isOpen ? "expanded" : "collapsed";
</script>

<div class="accordion-item" style={customStyles[2]}>
  <InaccessibleAccordionHeader
    on:updatePanelStates
    headerTitle={options.headerTitle}
    controls={`panel${options.id}`}
    id={`button${options.id}`}
    textToRead={options.panelContent}
    style={customStyles[0]}
    {isOpen}
    {headerLevel}
  />
  <InaccessibleAccordionPanel
    panelContent={options.panelContent}
    panelID={`panel${options.id}`}
    labeledBy={`button${options.id}`}
    style={customStyles[1]}
    {isOpen}
  />
</div>

<style>
  .accordion-item {
    width: 50%;
    height: auto;
  }
</style>
