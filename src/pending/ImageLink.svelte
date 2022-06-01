<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
  // define options object type
  type ImageLinkOptions = {
    // all attributes are required
    href: string;
    src: string;
    title: string;
    alt: string;
    imgId?: string;
    imgClass?: string;
    preText?: string;
    postText?: string;
  }

  // ImageLink component has five required props, which should all be included in the options prop
  export let options:ImageLinkOptions = {
    href: '',
    src: '',
    title: '',
    alt: '',
  }

  const { href, src, title, alt } = options;
  let imgId:string, imgClass:string, preText:string, postText:string;

  if (options.imgId) imgId = options.imgId;
  if (options.imgClass) imgClass = options.imgClass;
  if (options.preText) preText = options.preText;
  if (options.postText) postText = options.postText;
</script>


<!-- ************************* HTML ************************* -->
<a href={href} target="_blank">
  {#if preText}
    {preText}
  {/if}
  <img 
    id={imgId ? imgId : ''} 
    class={imgClass ? imgClass + ' sv-imagelink-link' : 'sv-imagelink-link'}
    {src} {title} {alt} 
  />
  {#if postText}
    {postText}
  {/if}
  <!-- target="_blank" -> links will always open in a new tab rather than reloading current page -->
</a>

<!-- ************************* STYLES ************************* -->  
<style>
	/*
    Style these however we'd like later
  */
</style>
