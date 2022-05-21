<script>
  /**
   * import your component
   */
  import Button from '../../lib/components/Button.svelte';
  import Navbar from '../components/Navbar.svelte';
  import PropsTable from '../components/PropsTable.svelte';
  import CodeSample from '../components/CodeSample.svelte';

  // import '@sveltejs/svelte-repl';

  // import CodeMirror from '../components/CodeMirror.svelte';
  /**
   * Update variable assignments below with names and links specific to your component.
   */
  const componentName = 'Button';
  const githubSourceLink = 'https://github.com/Svve11/';
  const WAIARIApracticesLink =
    'https://www.w3.org/TR/wai-aria-practices-1.1/#button';

  /**
   * Other relevant scripts below
   */

  const btnProps = {
    id: 'DemoButton',
    label: 'Accessible button',
    content: 'Descriptive content',
    handleClick: () => alert('Button was clicked!'),
  };
</script>

<div class="page-component">
  <!-- the navbar will eventually be a component imported into every page -->
  <div id="nav-container"><Navbar id="navbar" /></div>

  <!-- Main Content -->
  <div id="content">
    <h1>{componentName}</h1>

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
        A button is a widget that enables users to trigger an action or event,
        such as submitting a form, opening a dialog, canceling an action, or
        performing a delete operation. A common convention for informing users
        that a button launches a dialog is to append "…" (ellipsis) to the
        button label, e.g., "Save as…".
      </p>
    </div>

    <!-- Usage -->
    <div>
      <fieldset>
        <legend>Usage</legend>
        <h2>Usage</h2>
        <!-- code example -->
        <label for="">Code example:</label>
        <CodeSample code={`asdf`} />

        <!-- preview/prototype -->
        <Button {...btnProps} />
      </fieldset>
    </div>

    <!-- Installation -->
    <div>
      <fieldset>
        <legend>Installation</legend>
        <h2>Installation</h2>
        <p>
          From the command line in your project directory, run <code
            >npm install @svve11/button</code
          >
          or <code>yarn add @svve11/button</code>. Then import the components
          and styles that you need:
        </p>
        <br />
        <pre><code>
          npm install @svve11/button
          # or
          yarn add @svve11/button
        </code></pre>
      </fieldset>
    </div>

    <!-- Component API -->
    <div>
      <fieldset>
        <legend>Component API</legend>
        <h2>Component API</h2>
        <!-- props -->
        <h3>Props</h3>
        <PropsTable />

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
