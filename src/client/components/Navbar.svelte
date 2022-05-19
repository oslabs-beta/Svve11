<script lang="ts">
  export let id: string = "";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<section class="nav-section">
  <nav id="navbard">
    <div id="logo-container">
      <img src="images/svvell-logo-yellow.png" alt="Svell" id="logo-image" />
    </div>
    <ul id="head">
      <li><a href="#">Home</a></li>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Svelte Community</a></li>
    </ul>
    <hr aria-hidden="true" class="border" />
    <label for="component-list">Library Components</label>
    <ul id="component-list">
      <li><a href="#">Accordion</a></li>
      <li><a href="#">Button</a></li>
      <li><a href="#">Checkbox</a></li>
      <li><a href="#">Form</a></li>
    </ul>
    <hr aria-hidden="true" class="border" />
    <ul class="miscellaneous-nav-list">
      <li><a href="#">About the team</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
</section>

<style>
  .nav-section {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #logo-image {
    width: 100%;
    height: auto;
  }

  #logo-container {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  #wavy-lines {
    display: inline;
    height: 40px;
    margin: 0;
    padding: 0;
  }

  nav {
    /* position: fixed; */
    height: 100%;
    /* display: flex;
    flex-direction: column; */
    margin: 0;
    background-color: #eb1646;
    padding: 1rem;
    gap: 0.5em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 300;
  }

  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    box-sizing: content-box;
    height: 0;
    border: none;
    border-top: 1px solid #e1e1e1;
    margin: 3rem 0;
    opacity: 1;
  }
</style>
