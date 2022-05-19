<script>
  /**
   * import your component
   */
  import Accordion from "../../lib/components/Accordion/Accordion.svelte";
  import Navbar from "../components/Navbar.svelte";
  import PropsTable from "../components/PropsTable.svelte";
  import CodeSample from "../components/CodeSample.svelte";

  // import '@sveltejs/svelte-repl';

  // import CodeMirror from '../components/CodeMirror.svelte';
  /**
   * Update variable assignments below with names and links specific to your component.
   */
  const componentName = "Accordion";
  const githubSourceLink = "https://github.com/Svve11/";
  const WAIARIApracticesLink =
    "https://www.w3.org/TR/wai-aria-practices-1.1/#accordion";

  /**
   * Other relevant scripts below
   */
  const options = {
    multiselectable: false,
    headerLevel: 4,
    //layout of styles array [headerStyle, panelStyles, ]
    // styles: [
    //   'height: 50px; width: 100%; background-color: coral; border: 1px solid black',
    //   'background-color: yellow',
    // ],
    panelInfo: [
      {
        id: 1,
        panelContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        headerTitle: "First Section",
      },
      {
        id: 2,
        panelContent:
          "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit.",
        headerTitle: "Second Section",
      },
      {
        id: 3,
        panelContent:
          "Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
        headerTitle: "Third Section",
      },
    ],
  };
</script>

<section class="main-container">
  <section id="nav-container">
    <Navbar id="navbar" />
  </section>

  <article class="page-component">
    <header>
      <h1>{componentName}</h1>
      <ul>
        <li>Source: <a href={githubSourceLink}>{githubSourceLink}</a></li>
        <li>
          WAI-ARIA: <a href={WAIARIApracticesLink}>{WAIARIApracticesLink}</a>
        </li>
      </ul>
      <p>
        An accordion is a vertically stacked set of interactive headings that
        each contain a title, content snippet, or thumbnail representing a
        section of content. The headings function as controls that enable users
        to reveal or hide their associated sections of content. Accordions are
        commonly used to reduce the need to scroll when presenting multiple
        sections of content on a single page.
      </p>
    </header>

    <main>
      <!-- Installation Guide -->
      <section>
        <fieldset>
          <legend>Installation</legend>
          <h2>Installation</h2>
          <p>For npm, run the following in your command line</p>
          <pre><code class="code-block">  
            npm install 'svve11'
          </code></pre>
          <p>For yarn, run:</p>
          <pre><code class="code-block">
            yarn add 'svve11'
          </code></pre>
          <p>
            Then, import the component in the script section of your Svelte
            file:
          </p>
          <pre><code class="code-block">
            import <span class="curly-symbol">&#10100</span> Accordion <span
                class="curly-symbol">&#10101</span
              > from 'sve11'
          </code></pre>
        </fieldset>
      </section>
      <!-- Usage Guide -->
      <section>
        <fieldset>
          <legend>Usage</legend>
          <h2>Usage</h2>
          <label for="options-object-code"
            >Accordion Options Object example:</label
          >
          <pre>
          <code class="code-block" id="options-object-code">
            {`options = {
              multiselectable: true,
              headerLevel: 4,
              // layout of styles array [headerStyle, panelStyles, ]
              styles: [
                'height: 50px; width: 100%; background-color: coral; border: 1px solid black',
                'background-color: yellow',
              ],
              panelInfo: [
                {
                  id: 1,
                  headerTitle: 'First Section',
                  panelContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                  id: 2,
                  headerTitle: 'Second Section',
                  panelContent:
                    'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec.'
                  
                },
                {
                  id: 3,
                  headerTitle: 'Third Section',
                  panelContent:
                    'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.',
                  
                },
              ],
            };`}
            </code>
          </pre>
          <Accordion {options} />
        </fieldset>
      </section>

      <section>
        <fieldset>
          <legend>Component API</legend>
          <h2>Component API</h2>
          <!-- props -->
          <h3>Props</h3>
          <PropsTable />
        </fieldset>
      </section>
    </main>
  </article>
</section>

<style>
  * {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 16px;
  }

  .curly-symbol {
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-size: 14px;
    font-weight: 50;
  }

  .code-block {
    font-size: 20;
    font-weight: 600;
  }

  .main-container {
    display: grid;
    grid-template-columns: 15% 85%;
    overflow: auto;
  }

  .page-component {
    margin: 0;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  #nav-container {
    grid-column: 0 1;
    grid-row: auto;
    height: 100%;
    overflow: auto;
  }

  fieldset {
    border: none;
    margin-top: 0;
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

  header {
    margin-left: 20px;
  }
  h1 {
    font-size: 42px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 36px;
    border-bottom: 1px solid;
    margin: 0 0 10px 0;
  }

  h3 {
    font-size: 28px;
  }

  pre {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  a {
    /* text-decoration: none; */
    font-weight: 500;
    color: #2744e0;
  }
</style>
