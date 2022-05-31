<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  // define options object type
  type ImageLinkOptions = {
    // all attributes are required
    link: string;
    src: string;
    title: string;
    alt: string;
    imgId?: string;
    imgClass?: string;
  }

  // ImageLink component has five required props, which should all be included in the options prop
  export let options:ImageLinkOptions = {
    link: '',
    src: '',
    title: '',
    alt: '',
  }

  const { link, src, title, alt } = options;
  let imgId:string, imgClass:string;

  if (options.imgId) imgId = options.imgId;
  if (options.imgClass) imgClass = options.imgClass;

</script>


<!-- ************************* HTML ************************* -->
<a href={link} class={imgClass ? imgClass + ' sv-imagelink-link' : 'sv-imagelink-link'}>
  <img id={imgId ? imgId : ''} {src} {title} {alt} target="_blank" >
  <!-- target="_blank" -> links will always open in a new tab rather than reloading current page -->
</a>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
