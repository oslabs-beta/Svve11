<script>
  // @ts-nocheck

  import AccordionPanel from "./AccordionPanel.svelte";
  import AccordionHeader from "./AccordionHeader.svelte";

  export let options;
  export let headerLevel = 2;
  export let customStyles;
  export let isOpen;

  $: state = isOpen ? "expanded" : "collapsed";

  //console.log(customStyles);
</script>

<div class="accordion-item" data-state={state}>
  <AccordionHeader
    on:updatePanelStates
    headerTitle={options.headerTitle}
    controls={`panel${options.id}`}
    id={`button${options.id}`}
    textToRead={options.panelContent}
    style={customStyles[0]}
    {isOpen}
    {headerLevel}
  />
  <AccordionPanel
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
