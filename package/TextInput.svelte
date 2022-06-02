<!-- ************************* SCRIPTS ************************* -->
<script>export let options = {
    label: null,
    placeholder: null,
    id: null,
    type: null
};
let { label, placeholder, id, type, min, max, maxlength, size, step, inputStyle, labelStyle, autocomplete, disabled, multiple, readonly, required } = options;
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
