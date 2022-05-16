<script lang="ts">
  export let id: string = '';
</script>

<nav {id}>
  <div id="logo" style="font-weight:bold">
    <h1
      style="color:white; font-family:sans-serif; font-size:42px; font-weight:bold"
    >
      svve11
    </h1>
  </div>

  <div id="head">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Funding</a></li>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Svelte Community</a></li>
    </ul>
  </div>
  <div class="border" />
  <div id="main">
    <ul>
      <li>
        Components
        <ul>
          <li><a href="#">Accordion</a></li>
          <li><a href="#">Button</a></li>
          <li><a href="#">Checkbox</a></li>
          <li><a href="#">Form</a></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="border" />

  <div class="other" />
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: #ff3e00;
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

  .border {
    border: 1px solid white;
    margin: 1em 0;
  }
</style>
