<!-- Standard Button Component -->

<!-- ************************* SCRIPTS ************************* -->
<script>
  // function for button to execute
  export let handleClick = (event) => alert(`Some event or action has been activated by button (id: ${event.target.id}).`);

  // text to go inside button
  export let content = '';

  // button id
  export let id = '';

  // button aria label
  export let label = '';

  // button styles
  export let style;
</script>


<!-- ************************* HTML ************************* -->

<!-- using an HTML <button> element -->
<button 
  id={id} 
  aria-label={label} 
  on:click={handleClick}
  {style}
>
{ content }
</button>


<!-- ************************* STYLES ************************* -->

<style>
  
  /* button {
    font-size: 18px;
    font-weight: 600;
    background-color: #eee;
    color: rgb(29, 29, 29);
    padding: .75em 1.25em;
    border: 1.5px solid rgb(29, 29, 29);
    width: fit-content;
  } */

  button:focus {
    background-color: rgb(29, 29, 29);
    color: #eee;
    cursor: pointer;
  }

</style>