<script lang="ts">
	export let label: string;
	export let placeholder: string;
	export let id: string;
	export let type: string;
</script>

<label for={id}>{label}</label>
<input {id} {type} {placeholder} />

<style>
	/*
    Style these later

    Also, can making the text box inline be accompished to customStyles object?
  */
</style>
