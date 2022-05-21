<!-- ************************* SCRIPTS ************************* -->
<script>// function for button to execute
export let handleClick;
// text to go inside button
export let content = '';
// button id
export let id = '';
// button aria label
export let label = '';
// button styles
export let style = '';
</script>

<!-- ************************* HTML ************************* -->
<button {id} aria-label={label} on:click={handleClick} {style}>
  {content}
</button>

<!-- ************************* STYLES ************************* -->
<style>
  button:focus {
    background-color: rgb(29, 29, 29);
    color: #eee;
    cursor: pointer;
  }
</style>
