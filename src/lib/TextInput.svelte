<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	//required attributes
	export let label: string = '';
	export let placeholder: string = '';
	export let id: string = '';
	export let type: string = '';

	//optional attributes
	export let max: string = '';
	export let min: string = '';
	export let maxlength: string = '';
	export let size: string = '';
	export let step: string = '';
	export let inputStyle: string = '';
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
