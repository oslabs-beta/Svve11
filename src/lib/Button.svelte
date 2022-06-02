<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	type ButtonOptionTypes = {
		handleClick: () => void;
		content: string | null;
		label: string | null;
		id?: string | null;
		style?: string | null;
	};

	export let options: ButtonOptionTypes = {
		handleClick: () => null,
		content: null,
		label: null
	};

	let { handleClick, content, id, label, style } = options;
</script>

<!-- @component
Props are passed in through the options object which contains the following properties:
```tsx
label: string (required)
content: string (required)
handleClick: function (required)
id: string (optional)
style: string (optional)
```
-->

<!-- ************************* HTML ************************* -->
<button {id} aria-label={label} on:click={handleClick} {style} class="sv-button">
	{content}
</button>

<!-- ************************* STYLES ************************* -->
<style>
	button:focus {
		/* background-color: rgb(29, 29, 29); */
		/* color: #eee; */
		border: 2px solid #eee;
		cursor: pointer;
	}
</style>
