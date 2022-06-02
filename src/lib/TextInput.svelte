<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	type TextInputOptionTypes = {
		label: string | null;
		placeholder: string | null;
		id: string | null;
		type: InputTypes | null;

		max?: number | null;
		min?: number | null;
		maxlength?: number | null;
		size?: number | null;
		step?: number | null;
		inputStyle?: string | null;
		labelStyle?: string | null;

		autocomplete?: boolean;
		disabled?: boolean;
		multiple?: boolean;
		readonly?: boolean;
		required?: boolean;
	};

	type InputTypes =
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'month'
		| 'number'
		| 'password'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| '';

	export let options: TextInputOptionTypes = {
		label: null,
		placeholder: null,
		id: null,
		type: null
	};

	let {
		label,
		placeholder,
		id,
		type,
		min,
		max,
		maxlength,
		size,
		step,
		inputStyle,
		labelStyle,
		autocomplete,
		disabled,
		multiple,
		readonly,
		required
	} = options;
</script>

<!-- @component
Props are passed in through the options object which contains the following properties:
```tsx
label: string (required)
placeholder: string (required)
id: string (required)
type: string (required)
inputStyle: string (optional)
labelStyle: string (optional)
```
-->
<!-- ************************* HTML ************************* -->
<label for={id} style={labelStyle} class="sv-text-input-label">
	{label}
</label>
<input
	class="sv-text-input"
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
</style>
