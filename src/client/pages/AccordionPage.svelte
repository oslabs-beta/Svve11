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
    styles: [null, null, null, null],
    panelInfo: [
      {
        id: 1,
        panelContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
        headerTitle: "First Section",
      },
      {
        id: 2,
        panelContent:
          "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.",
        headerTitle: "Second Section",
      },
      {
        id: 3,
        panelContent:
          "Dicat inani suscipit ne mel, eam ad viris tollit essent. Hinc facilis electram eu cum, usu ad praesent sadipscing, nam consetetur scriptorem cu. Labore mollis aperiam no vel, mollis feugait noluisse sed at. Nec ex vide eirmod audire.",
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
      <ul class="resource-links-list">
        <li>Source: <a href={githubSourceLink}>{githubSourceLink}</a></li>
        <li>
          WAI-ARIA: <a href={WAIARIApracticesLink}>{WAIARIApracticesLink}</a>
        </li>
      </ul>
      <p class="header-paragraph">
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
          <section class="content-section">
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
          </section>
        </fieldset>
      </section>
      <!-- Usage Guide -->
      <section>
        <fieldset>
          <legend>Usage</legend>
          <h2>Usage</h2>
          <section class="content-section">
            <h3>Creating an Accordion</h3>
            <p>
              An accordion instance can be created by placing the code below in
              the body of your Svelte file.
            </p>
            <pre><code class="code-block">
            {"<Accordion {options} />"}
            </code></pre>
            <p>
              To supply the accordion with its contents, an options object is
              passed as a prop to the accordion. This object can be created in
              the script section of the .svelte file or imported in from another
              location. The options object has 4 properties.
            </p>
            <ul class="options-object-list">
              <li>
                panelInfo: This property is <span class="bold-word"
                  >required</span
                >. It must be an array of objects, with each object containing
                information for one accordion item. The object must contain:
              </li>
              <ul>
                <li>
                  an id (number): used to set the id of accordion header and
                  panel. If you will have more than one accordion in your
                  application, be sure to continue the sequence of numbers
                  instead of starting back at 1.
                </li>
                <li>
                  a panelContent (string): sets text contents of the panel.
                </li>
                <li>
                  a headerTitle (string): sets the title of the accordion
                  section.
                </li>
              </ul>
              <li>
                headerLevel (number): This property is <span class="bold-word"
                  >required</span
                >, and sets the aria-level for each header in the accordion. For
                information on deciding the appropriate value to be supplied,
                visit this
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level"
                  >ARIA webpage</a
                >.
              </li>
              <li>
                styles (array): This property is <span class="bold-word"
                  >optional</span
                >. If this property is supplied, it must be an array with 4
                entries. Each entry is a string that resembles a style object.
                If you wish to leave out an entry in one position, null must be
                included at the correct index. An example is provided below.
              </li>
              <ul>
                <li>The first entry will style the headers of the accordion</li>
                <li>The second entry will style the panels of the accordion</li>
                <li>
                  The third entry will style each individual item within the
                  accordion
                </li>
                <li>
                  The fourth entry will style the entirety of the accordion
                </li>
              </ul>
              <li>
                multiselectable (boolean): This property is <span
                  class="bold-word">optional</span
                >, and will default to false. When set to true, the accordion
                can expand multiple panels at one time. When set to false, the
                accordion can expand only one panel at a time.
              </li>
            </ul>
            <h4>Example Options Object:</h4>
            <pre><code class="code-block example-code">
            {`options = {
              multiselectable: true,
              headerLevel: 4,
              styles: [
                "header styles", "panel styles", "item styles", "accordion styles"
              ],
              panelInfo: [
                {
                  id: 1,
                  headerTitle: "First Section",
                  panelContent: "First Panel Text Content"
                },
                {
                  id: 2,
                  headerTitle: "Second Section",
                  panelContent: "Second Panel Text Content"
                  
                },
                {
                  id: 3,
                  headerTitle: "Third Section",
                  panelContent: "Third Panel Text Content"
                  
                },
              ],
            };`}
            </code></pre>
            <h4>Example Styles String:</h4>
            <pre><code class="code-block example-code">
              {`"height: 50px; width: 100%; background-color: coral; border: 1px solid black"`}
            </code></pre>
            <h4>Example Accordion:</h4>
            <div class="example-accordion">
              <Accordion {options} />
            </div>
          </section>
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
  /* Styles for mobile */
  @media screen and (max-width: 667px) {
    p {
      font-size: 8px;
    }

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    h3 {
      font-size: 10px;
    }
    h4 {
      font-size: 8px;
    }
    .code-block {
      font-size: 8px;
    }
    ul {
      font-size: 8px;
    }

    .example-accordion {
      font-size: 8px;
    }

    .curly-symbol {
      font-size: 8px;
    }
  }
  /* Styles for tablet and computer */
  @media screen and (min-width: 668px) {
    p {
      font-size: 16px;
    }

    h1 {
      font-size: 42px;
    }

    h2 {
      font-size: 36px;
      margin: 0 0 10px 10px;
    }

    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 18px;
    }
    .code-block {
      font-size: 20;
    }

    .curly-symbol {
      font-size: 14px;
    }

    .example-accordion {
      font-size: 16px;
    }
  }

  * {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
  }

  .bold-word {
    font-weight: 600;
  }

  .curly-symbol {
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-weight: 50;
  }

  .code-block {
    font-weight: 600;
  }

  .content-section {
    margin-left: 10px;
  }

  .header-paragraph {
    margin-left: 10px;
  }

  .main-container {
    display: grid;
    grid-template-columns: 15% 85%;
    overflow: auto;
  }

  .options-object-list {
    line-height: 1.3;
  }

  .example-code {
    margin-bottom: 20px;
  }

  .page-component {
    margin: 0;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  .resource-links-list {
    padding-left: 20px;
  }

  #nav-container {
    grid-column: 0 1;
    grid-row: auto;
    height: 100%;
    overflow: auto;
  }

  fieldset {
    border: none;
    margin: 0;
    padding-left: 0;
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

  /* header {
  } */

  h1 {
    margin-bottom: 0;
  }

  h2 {
    border-bottom: 1px solid;
    margin: 0 0 10px 0;
  }

  h3 {
    margin: 0;
  }
  h4 {
    margin: 10px 0;
  }

  pre {
    margin: 0;
  }

  p {
    margin: 10px 0;
  }

  a {
    /* text-decoration: none; */
    font-weight: 500;
    color: #2744e0;
  }

  article {
    width: auto;
  }
</style>
