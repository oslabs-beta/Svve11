<script lang="ts">
	type CheckBoxOptionTypes = {
		checkBoxLabel: string;
		id: string;
		checked: boolean;

		checkBoxStyle?: string;
		checkBoxLabelStyle?: string;
		name?: string;
		value?: string;
	};

	export let options: CheckBoxOptionTypes = {
		checkBoxLabel: '',
		id: '',
		checked: false,
		checkBoxStyle: '',
		checkBoxLabelStyle: '',
		name: '',
		value: ''
	};

	// Default styling for the label
	// display: inline-block // Displays the label beside the checkbox
	// user-select: none; Prevents text selection
	export let defaultStyle: string = 'display: inline-block; user-select: none;';

	//QUESTION FOR BEK*** Why are name and value never read???

	let { checkBoxLabel, id, checked, checkBoxStyle, checkBoxLabelStyle, name, value } = options;

	// // Label that corresponds to the checkbox
	// export let checkBoxLabel: any;

	// // ID of the checkbox
	// export let id: any;

	// //Wether the checkbox is checked or not. (By default, the checkbox is not checked)
	// export let checked: boolean = false;

	// // Styling for the checkbox
	// export let checkBoxStyle: string = '';
	// // Styling for the text
	// export let checkBoxLabelStyle: string = '';

	// export let name: string = '';
	// export let value: string = '';
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
	class="sv-checkbox-input"
/>
<!-- Rendering the text beside the checkbox -->
<label style={checkBoxLabelStyle + defaultStyle} for={id} class="sv-checkbox-label">
	{checkBoxLabel}
</label><br />

<style>
</style>
