<script>
  // @ts-nocheck
  export let panelContent = "";
  export let isOpen;
  export let panelID;
  export let labeledBy;
  export let style;
<<<<<<< HEAD

  // console.log(style);
=======
>>>>>>> 940a577f9f44fc17b7e70825dacd230f926bd999
</script>

<div
  class="accordion-panel"
  role="region"
  class:open-panel={isOpen}
  id={panelID}
  aria-labelledby={labeledBy}
  {style}
>
  {#if isOpen}
    <p>{panelContent}</p>
  {/if}
</div>

<style>
  .accordion-panel {
    height: 0;
    width: 100%;
    border: 0;
  }

  .open-panel {
    height: auto;
    border: solid 1px black;
  }
</style>
