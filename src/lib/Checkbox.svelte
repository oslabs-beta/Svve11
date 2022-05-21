<script lang="ts">
	export let checkBoxLabel;
	export let id;
	export let checked:boolean=false;
	export let defaultStyle: string = 'display: inline-block; user-select: none;'
	export let checkBoxStyle:string = ''
	export let checkBoxLabelStyle:string = ''

</script>

 <!-- <input aria-label={checkBoxLabel} id={id} type="checkbox" bind:checked />  -->
<!-- <label for={id}>{checkBoxLabel}</label>  -->

<!-- <input  type="checkbox" aria-label={checkBoxLabel} id={id} name={name} bind:checked>
<label for={id}>{checkBoxLabel}</label> -->
<!-- bind:checked={checked} -->

<input style={checkBoxStyle} type="checkbox" id={id} aria-label={checkBoxLabel} bind:checked={checked} name="accessible-checkbox">
<label style={checkBoxLabelStyle + defaultStyle} for={id}> {checkBoxLabel} </label><br>


<style>
</style>
