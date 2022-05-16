<script>
  const componentName = 'Accordion';
  const githubSourceLink = 'https://github.com/Svve11/';
  const WAIARIApracticesLink =
    'https://www.w3.org/TR/wai-aria-practices-1.1/#accordion';
</script>

<div class="page-component">
  <nav id="navbar">
    <a href="#">Accordion Button</a>
    <a href="#">Accordion Header</a>
    <a href="#">Accordion Item</a>
    <a href="#">Accordion Panel</a>
  </nav>
  <div class="content">
    <h1>{componentName}</h1>
    <!-- # navigation links to child components -->
    <div id="child-links">
      <a href="#">Accordion Button</a> -
      <a href="#">Accordion Header</a> -
      <a href="#">Accordion Item</a> -
      <a href="#">Accordion Panel</a>
    </div>

    <!-- Source - link to package on Github -->
    <div>
      Source: <a href={githubSourceLink}>{githubSourceLink}</a>
    </div>

    <!-- Link to WAI-ARIA practices for component -->
    <div>
      WAI-ARIA: <a href={WAIARIApracticesLink}>{WAIARIApracticesLink}</a>
    </div>

    <!-- Description - what is it? -->
    <div id="description">
      <p>
        An accordion is a vertically stacked set of interactive headings that
        each contain a title, content snippet, or thumbnail representing a
        section of content. The headings function as controls that enable users
        to reveal or hide their associated sections of content. Accordions are
        commonly used to reduce the need to scroll when presenting multiple
        sections of content on a single page.
      </p>
    </div>

    <!-- Usage -->
    <div>
      <fieldset>
        <legend>Usage</legend>
        <h2>Usage</h2>
      </fieldset>
    </div>
    <!-- code example -->
    <!-- preview/prototype -->

    <!-- Installation -->
    <div>
      <fieldset>
        <legend>Installation</legend>
        <h2>Installation</h2>
      </fieldset>
    </div>

    <!-- Component API -->
    <div>
      <fieldset>
        <legend>Component API</legend>
        <h2>Component API</h2>
        <!-- props -->
        <h3>Props</h3>
        <!-- CSS Selectors -->
        <h3>CSS Selectors</h3>
        <!-- *child components (if applicable) -->
        <!--  # Accordion Button -->
        <!--  # Accordion Header -->
        <!--  # Accordion Item -->
        <!--  # Accordion Panel -->
      </fieldset>
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
    grid-template-columns: 2fr 9fr;
  }

  #navbar,
  .content {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  #navbar {
    grid-column: 0 1;
    background-color: #ff3e00;
    margin: 0;
    padding: 1rem;
    gap: 0.5em;
  }

  #navbar > * {
    color: white;
    font-size: 20px;
    font-weight: 300;
  }

  .content {
    grid-column: 1 2;
    margin: 0;
    padding: 1rem 2rem;
  }

  fieldset {
    border: none;
  }

  legend {
    display: none;
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
</style>
