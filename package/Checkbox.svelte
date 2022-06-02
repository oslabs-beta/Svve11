<script>export let options = {
    checkBoxLabel: null,
    id: null,
    checked: false
};
// Default styling for the label
// display: inline-block // Displays the label beside the checkbox
// user-select: none; Prevents text selection
export let defaultStyle = 'display: inline-block; user-select: none; ';
//QUESTION FOR BEK*** Why are name and value never read???
// $: checkBoxLabel, id, checked, checkBoxStyle, checkBoxLabelStyle, name, value;
let { checkBoxLabel, id, checked, checkBoxStyle, checkBoxLabelStyle, name, value } = options;
</script>

<!-- @component
Props are passed in through the options object which contains the following properties:
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
	{name}
	{value}
/>

<!-- Rendering the text beside the checkbox -->
<label style={defaultStyle + checkBoxLabelStyle} for={id} class="sv-checkbox-label">
	{checkBoxLabel}
</label>

<style>
</style>
