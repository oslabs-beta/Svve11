<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	// function for button to execute
	export let handleClick: () => void;

	// text to go inside button
	export let content: string = '';

	// button id
	export let id: string = '';

	// button aria label
	export let label: string = '';

	// button styles
	export let style: string = '';
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
id: string (required)
label: string (required)
content: string (required)
handleClick: function (required)

checkBoxLabelStyle: string (optional)
name: string (optional)
value: string (optional)
```
-->

<!-- ************************* HTML ************************* -->
<button {id} aria-label={label} on:click={handleClick} {style}>
	{content}
</button>

<!-- ************************* STYLES ************************* -->
<style>
	button:focus {
		background-color: rgb(29, 29, 29);
		color: #eee;
		cursor: pointer;
	}
</style>
