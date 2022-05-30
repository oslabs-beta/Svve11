<script lang="ts">
	// <------- Required Props ------->
	// label that corresponds to the component
	export let radioButtonLabel: any;

	// id that corresponds to the component
	export let id: any;

	// <------- Optional Props ------->
	export let checked: boolean = false;
	export let radioButtonStyle: string = '';
	export let radioButtonLabelStyle: string = '';
	export let name: any;
	export let value: any;
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
radioButtonLabel: string (required)
id: string (required)

checked: boolean (option) 
radioButtonStyle: string (option)
radioButtonLabelStyle: string (option)
name: string (option)
value: string (option)
```
-->

<!-- Rendering the Radio Button  -->
<input
	class="sv-radio-button-input"
	{name}
	{value}
	style={radioButtonStyle}
	type="radio"
	{id}
	aria-label={radioButtonLabel}
	aria-checked={checked}
/>
<!-- Rendering the text label for the radio button -->
<label class="sv-radio-button-label" style={radioButtonLabelStyle} for={id}>
	{radioButtonLabel}
</label>

<!-- Any styling for the radio button -->
<style lang="scss">
</style>
