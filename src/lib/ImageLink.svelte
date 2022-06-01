<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  //required attributes
  export let href: string = '';
  export let src: string = '';
  export let title: string = '';
  export let alt: string = '';
  //make imgId optional
  export let imgId: string = '';
</script>


<!-- ************************* HTML ************************* -->
<a {href} class='sv-imagelink-link'>
  <img {src} {title} {alt} id={imgId}>
</a>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
