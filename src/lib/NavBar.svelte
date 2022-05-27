<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  import NavBarHeader from './NavBar/NavBarHeader.svelte';
  import NavBarOptions from './NavBar/NavBarOptions.svelte';
  import type { optionsTypes } from './NavBar/NavBarTypes';

  //required attributes
  export let options: optionsTypes = {
    id: '',
    header: '',
    imgSrc: '',
    imgClass: '',
    imgAlt: '',
    contentInfo: [],
  }
  
  //might break this up into sub components:
    //NavBarHeader
    //NavBarOptions => NavBarLists

  //optional attributes

</script>


<!-- ************************* HTML ************************* -->

<!-- <nav {id}>
  <h1>{header}</h1>
  <img class={imgClass} src={imgSrc} alt={imgAlt}>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav> -->

<nav id={options.id}>
  <NavBarHeader 
    header={options.header}
    imgSrc={options.imgSrc}
    imgClass={options.imgClass}
    imgAlt={options.imgAlt}/>
  <NavBarOptions 
    contentInfo={options.contentInfo}/>
</nav>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
