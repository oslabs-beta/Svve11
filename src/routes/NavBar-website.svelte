<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  // import favicon from '../images/svve11-logo-notext.png';
  import NavBarHeader from '../lib/NavBar/NavBarHeader.svelte';
  import NavBarOptions from '../lib/NavBar/NavBarOptions.svelte';
  import type { optionsTypes } from '../lib/NavBar/NavBarTypes';

  //required attributes
  export let options: optionsTypes = {
    id: '',
    header: '',
    imgSrc: '',
    imgClass: '',
    imgAlt: '',
    contentInfo: [],
  }

  let isOpen:boolean = false;

  const toggleNav = () => {
    // const nav = document.getElementById("nav-bar")
    isOpen = !isOpen;
  }
</script>


<!-- ************************* HTML ************************* -->
<button id="openbtn" on:click={toggleNav}>
  &#9776;
  <!-- <img src={favicon} alt="svve11 favicon" style="height:1em;"> -->
  <!-- <span>Menu</span> -->
</button>
<nav id={options.id} class="sv-navbar" class:open={isOpen}>
  <NavBarHeader 
    header={options.header}
    imgSrc={options.imgSrc}
    imgClass={options.imgClass}
    imgAlt={options.imgAlt}/>
  <NavBarOptions 
    contentInfo={options.contentInfo}/>
</nav>

<!-- ************************* STYLES ************************* -->  
<style lang="scss">
	/*
    Style these however we'd like later
  */

</style>
