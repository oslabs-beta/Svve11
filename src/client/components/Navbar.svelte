<script lang="ts">
  export let id: string = '';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<nav {id}>
  <div id="logo">svve11</div>
  <!-- <img src="./../../img/svvell-logo-yellow.png" alt="yellow svvell logo" /> -->

  <div id="head">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Svelte Community</a></li>
    </ul>
  </div>
  <hr aria-hidden="true" class="border" />
  <div id="main">
    Components
    <ul>
      <li><a href="#">Accordion</a></li>
      <li><a href="#">Button</a></li>
      <li><a href="#">Checkbox</a></li>
      <li><a href="#">Form</a></li>
    </ul>
  </div>

  <hr aria-hidden="true" class="border" />

  <div class="other">
    <ul>
      <li><a href="#">About the team</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </div>
</nav>

<style>
  #logo {
    font-family: 'Oleo Script', cursive;
    color: #edbb07;
    font-size: 60px;
    text-shadow: 0.05em 0.05em #2744e0;
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
