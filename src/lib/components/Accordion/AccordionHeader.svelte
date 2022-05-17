<script>
  // @ts-nocheck

  import AccordionButton from "./AccordionButton.svelte";
  export let headerLevel = 3;
  export let headerTitle;
  export let controls = "";
  export let style;
  export let textToRead;
  export let id;
  export let isOpen;
</script>

<div
  class="accordion-header"
  aria-level={headerLevel}
  role="heading"
  {style}
  aria-expanded={isOpen}
>
  <AccordionButton
    on:updatePanelStates
    {textToRead}
    {headerTitle}
    {controls}
    {id}
    {style}
    {isOpen}
  />
</div>

<style>
  .accordion-header {
    height: 30px;
    width: 100%;
  }
</style>
