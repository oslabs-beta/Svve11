<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	// function for button to execute
	export let handleClick: () => void;

<<<<<<< HEAD
	// text to go inside button
	export let content: string = '';

	// button id
	export let id: string = '';

	// button aria label
	export let label: string = '';

	// button styles
	export let style: string = '';
=======
  type ButtonOptionTypes = {
    handleClick: () => void;
    content: string | null;
    id: string | null;
    label: string | null;
    style?: string | null;
  }

  export let options: ButtonOptionTypes = {
    handleClick: () => console.log('please enter handleClick fn'),
    content: null,
    id: null,
    label: null,
    style: null,
  }

  let { handleClick,
        content,
        id,
        label,
        style
        } = options;

  // // function for button to execute
  // export let handleClick: () => void;

  // // text to go inside button
  // export let content: string = '';

  // // button id
  // export let id: string = '';

  // // button aria label
  // export let label: string = '';

  // // button styles
  // export let style: string = '';
>>>>>>> main
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
<<<<<<< HEAD
<button {id} aria-label={label} on:click={handleClick} {style}>
=======
<button {id} aria-label={label} on:click={handleClick} {style} class="sv-button">
>>>>>>> main
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
