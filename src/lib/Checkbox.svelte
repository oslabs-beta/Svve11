<script lang="ts">
	// Label that corresponds to the checkbox
	export let checkBoxLabel: any;

	// ID of the checkbox
	export let id: any;

	//Wether the checkbox is checked or not. (By default, the checkbox is not checked)
	export let checked: boolean = false;

	// Default styling for the label
	// display: inline-block // Displays the label beside the checkbox
	// user-select: none; Prevents text selection
	export let defaultStyle: string = 'display: inline-block; user-select: none;';

	// Styling for the checkbox
	export let checkBoxStyle: string = '';
	// Styling for the text
	export let checkBoxLabelStyle: string = '';

	export let name: string = '';
	export let value: string = '';
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
id: string (required)
checkBoxLabel: string (required)

checkBoxStyle: number (string)
checked: boolean (optional)
checkBoxLabelStyle: string (optional)
name: string (optional)
value: string (optional)
```
-->

<!-- Rendering the checkbox -->
<input
	class="sv-checkbox-input"
	style={checkBoxStyle}
	type="checkbox"
	{id}
	aria-label={checkBoxLabel}
	bind:checked
	name=""
	value=""
/>
<!-- Rendering the text beside the checkbox -->
<label class="sv-checkbox-label" style={checkBoxLabelStyle + defaultStyle} for={id}>
	{checkBoxLabel}
</label>

<style>
</style>
