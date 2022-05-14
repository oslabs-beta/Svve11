<script>
	export let checkBoxValue;
	export let id;
	export let checked;
</script>

<input aria-label={checkBoxValue} {id} type="checkbox" bind:checked />
<label for={id}>{checkBoxValue}</label>
<br />

<style>
</style>
