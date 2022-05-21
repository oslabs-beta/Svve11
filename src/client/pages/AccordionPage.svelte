<script>
  /**
   * import your component
   */
  import Accordion from '../../lib/components/Accordion/Accordion.svelte';
  import Navbar from '../components/Navbar.svelte';
  import PropsTable from '../components/PropsTable.svelte';
  import CodeSample from '../components/CodeSample.svelte';

  // import '@sveltejs/svelte-repl';

  // import CodeMirror from '../components/CodeMirror.svelte';
  /**
   * Update variable assignments below with names and links specific to your component.
   */
  const componentName = 'Accordion';
  const githubSourceLink = 'https://github.com/Svve11/';
  const WAIARIApracticesLink =
    'https://www.w3.org/TR/wai-aria-practices-1.1/#accordion';

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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
        headerTitle: 'First Section',
      },
      {
        id: 2,
        panelContent:
          'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
        headerTitle: 'Second Section',
      },
      {
        id: 3,
        panelContent:
          'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.',
        headerTitle: 'Third Section',
      },
    ],
  };
</script>

<div class="page-component">
  <!-- the navbar will eventually be a component imported into every page -->
  <div id="nav-container"><Navbar id="navbar" /></div>

  <!-- Main Content -->
  <div id="content">
    <h1>{componentName}</h1>

    <!-- # navigation links to child components -->
    <div id="child-links">
      <a href="#">Accordion Button</a> -
      <a href="#">Accordion Header</a> -
      <a href="#">Accordion Item</a> -
      <a href="#">Accordion Panel</a>
    </div>
    <br />

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
        <!-- code example -->
        <label for="">Code example:</label>
        <CodeSample
          code={`
            const options = {
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
                  panelContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
                  headerTitle: 'First Section',
                },
                {
                  id: 2,
                  panelContent:
                    'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
                  headerTitle: 'Second Section',
                },
                {
                  id: 3,
                  panelContent:
                    'Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.',
                  headerTitle: 'Third Section',
                },
              ],
            };`}
        />

        <!-- preview/prototype -->
        <Accordion {options} />
      </fieldset>
    </div>

    <!-- Installation -->
    <div>
      <fieldset>
        <legend>Installation</legend>
        <h2>Installation</h2>
        <p>
          From the command line in your project directory, run <code
            >npm install @svve11/accordion</code
          >
          or <code>yarn add @svve11/accordion</code>. Then import the components
          and styles that you need:
        </p>
        <br />
        <pre><code>
          npm install @svve11/accordion
          # or
          yarn add @svve11/accordion
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
