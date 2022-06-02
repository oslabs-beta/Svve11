<script>// <------- Required Props ------->
// label that corresponds to the component
export let radioButtonLabel;
// id that corresponds to the component
export let id;
// <------- Optional Props ------->
export let checked = false;
export let radioButtonStyle = '';
export let radioButtonLabelStyle = '';
export let name;
export let value;
</script>

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
<style></style>
