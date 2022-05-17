<script>
  import Navbar from './components/Navbar.svelte';
</script>

<div class="page-component">
  <!-- the navbar will eventually be a component imported into every page -->
  <div id="nav-container"><Navbar id="navbar" /></div>

  <!-- Main Content -->
  <div id="content">
    <!-- logo/hero -->
    <div id="splash">
      <div>svve11</div>
    </div>

    <!-- installation -->
    <pre><code>
      npm install @svve11
    </code></pre>
  </div>
</div>

<style>
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 16px;
  }

  .page-component {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 6fr;
  }

  #nav-container {
    grid-column: 0 1;
  }

  #content {
    grid-column: 1 2;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  fieldset {
    border: none;
  }

  legend {
    display: none;
  }

  code {
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-size: 14px;
    font-weight: 100;
  }

  pre code {
    display: block;
    background-color: #eee;
    border-radius: 0.5em;
    /* padding: 1em; */
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 36px;
    border-bottom: 1px solid;
    margin: 1em 0;
  }

  h3 {
    font-size: 28px;
  }

  p {
    margin: 1em 0;
  }

  a {
    /* text-decoration: none; */
    font-weight: 500;
    color: #2744e0;
  }
</style>
