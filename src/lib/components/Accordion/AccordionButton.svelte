<script>
// @ts-nocheck
    import { createEventDispatcher } from 'svelte'

    export let headerTitle;
    export let controls;
    export let id
    export let style;
    export let textToRead;
    export let isOpen

    const dispatch = createEventDispatcher();
    const handleHeaderClick = (event) => {
        dispatch('updatePanelStates', {
            target: event.target.id
        })
    }
</script>

<!-- replace this with accessible Button component -->
<button 
    class='header-button'
    aria-expanded={isOpen}
    aria-controls="{controls}"
    aria-label={isOpen ? textToRead : ''}
    {id}
    on:click={(event) => handleHeaderClick(event)}
    {style}
>
    {headerTitle ? headerTitle : 'Please define header title in options object!'}
</button>

<style>
    .header-button {
        height: 100%;
        width: 100%
    }
</style>