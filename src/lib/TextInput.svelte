<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	//required attributes

	// A short summary describing what the text input is asking for from the user
	export let label: string = '';

	// display message to show user what to input
	export let placeholder: string = '';

	// Unique id for specifies text field
	export let id: string = '';

	// type of input that is expected by the developer
	export let type: string = '';

	//optional attributes

	export let max: string = '';
	export let min: string = '';
	export let maxlength: string = '';
	export let size: string = '';
	export let step: string = '';

	// styling for the input box
	export let inputStyle: string = '';

	// styling for the label that corresponds to the input box
	export let labelStyle: string = '';

	export let autocomplete: boolean = false;
	export let disabled: boolean = false;
	export let multiple: boolean = false;
	export let readonly: boolean = false;
	export let required: boolean = false;
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
label: string (required)
placeholder: string (required)
id: string (required)
type: string (required)

max: string (option) 
min: string (option)
maxlength: string (option)
size: string (option)
step: string (option)
inputStyle: string (option)
labelStyle: string (option)
```
-->

<!-- ************************* HTML ************************* -->
<label for={id} style={labelStyle}>
	{label}
</label>
<input
	{id}
	{type}
	{placeholder}
	{min}
	{max}
	{maxlength}
	{size}
	{step}
	{disabled}
	{autocomplete}
	{multiple}
	{readonly}
	{required}
	style={inputStyle}
/>

<!-- ************************* STYLES ************************* -->
<style>
	/*
    Style these however we'd like later
  */
</style>
