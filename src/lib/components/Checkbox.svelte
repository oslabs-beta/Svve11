<script>
	export let checkBoxValue;
	export let id;
	export let checked = false;
</script>

<label for={id}>
  <input aria-label={checkBoxValue} {id} type="checkbox" bind:checked>
{checkBoxValue}</label>


<br />

<style>
  [type="checkbox"]
  {
      vertical-align:middle;
  }
  
</style>
