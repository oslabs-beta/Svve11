<script lang="ts">
	export let radioButtonLabel: any;
	export let id: any;
	export let checked: boolean = false;
	// export let defaultStyle: string = '';
	export let radioButtonStyle: string = '';
	export let radioButtonLabelStyle: string = '';

	export let name;
	export let value;
</script>

<input
	{name}
	{value}
	style={radioButtonStyle}
	type="radio"
	{id}
	aria-label={radioButtonLabel}
	aria-checked={checked}
/>
<label style={radioButtonLabelStyle} for={id}> {radioButtonLabel} </label>

<style lang="scss">
</style>
