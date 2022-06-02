<script>// Label that corresponds to the checkbox
export let checkBoxLabel;
// ID of the checkbox
export let id;
//Wether the checkbox is checked or not. (By default, the checkbox is not checked)
export let checked = false;
// Default styling for the label
// display: inline-block // Displays the label beside the checkbox
// user-select: none; Prevents text selection
export let defaultStyle = 'display: inline-block; user-select: none;';
// Styling for the checkbox
export let checkBoxStyle = '';
// Styling for the text
export let checkBoxLabelStyle = '';
export let name = '';
export let value = '';
</script>

<!-- Rendering the checkbox -->
<input
	style={checkBoxStyle}
	type="checkbox"
	{id}
	aria-label={checkBoxLabel}
	bind:checked
	name=""
	value=""
/>
<!-- Rendering the text beside the checkbox -->
<label style={checkBoxLabelStyle + defaultStyle} for={id}> {checkBoxLabel} </label><br />

<style>
</style>
