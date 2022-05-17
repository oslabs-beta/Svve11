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
      <div id="blurb">
        <i
          ><h1 id="blurb-quote">
            The power of the Web is in its universality. Access by everyone
            regardless of disability is an essential aspect.
          </h1></i
        >
        <h3 id="blurb-attribution">
          Tim Berners-Lee <br />
          <i>Creator of World Wide Web</i>
        </h3>
      </div>
      <div id="pane2">
        <!-- installation -->
        <pre><code>
          npm install @svve11
        </code></pre>
      </div>
    </div>
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
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  #splash {
    margin: 3vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2744e0;
    padding: 0;
    height: 50vh;
    border-radius: 1rem;
  }

  #blurb {
    grid-column: 0 1;
    padding: 3vh 3vw;
    /* background-color: #2744e0; */
    color: white;
    line-height: 1.2;
  }

  #blurb-quote {
    margin: 0;
  }

  #blurb-attribution {
    text-align: right;
    line-height: 0.9;
    color: #eee;
  }

  #pane2 {
    grid-column: 1 2;
    padding: 1rem;
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
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 28px;
  }

  p {
    margin: 1em 0;
  }

  /* a {
    font-weight: 500;
    color: #2744e0;
  } */
</style>
