<script lang="ts">
	export let checkBoxValue;
	export let id;
	export let checked:boolean = true;


</script>

 <!-- <input aria-label={checkBoxValue} id={id} type="checkbox" bind:checked />  -->
<!-- <label for={id}>{checkBoxValue}</label>  -->

<!-- <input  type="checkbox" aria-label={checkBoxValue} id={id} name={name} bind:checked>
<label for={id}>{checkBoxValue}</label> -->

<input type="checkbox" id={id} aria-label={checkBoxValue} bind:checked={checked}>
<label for={id}> {checkBoxValue} </label><br>


<style>
label {
	display: inline-block;
}
</style>
