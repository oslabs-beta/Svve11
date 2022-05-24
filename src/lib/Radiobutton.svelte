<script lang="ts">
	export let radioButtonLabel: any;
	export let id: any;
	export let checked: boolean = false;
	export let defaultStyle: string = '';
	export let radioButtonStyle: string = '';
	export let radioButtonLabelStyle: string = '';
	export let name: string = '';
	export let value: string = '';
</script>

<!-- <input aria-label={checkBoxLabel} id={id} type="checkbox" bind:checked />  -->
<!-- <label for={id}>{checkBoxLabel}</label>  -->

<!-- <input  type="checkbox" aria-label={checkBoxLabel} id={id} name={name} bind:checked>
<label for={id}>{checkBoxLabel}</label> -->
<!-- bind:checked={checked} -->

<input
	style={radioButtonStyle}
	type="radio"
	{id}
	aria-label={radioButtonLabel}
	aria-checked={checked}
	{name}
	{value}
/>
<label style={radioButtonLabelStyle} for={id}> {radioButtonLabel} </label>

<style>
</style>
