<script>
    import TextInput from "$lib/TextInput.svelte";
    import Navbar from "../components/Navbar.svelte";
  
    const componentName = "Text Input";
    const githubSourceLink = "https://github.com/Svve11/";
    const WAIARIApracticesLink =
      "https://w3c.github.io/aria-practices/#combobox";
  
  </script>
  
  <section class="main-container">
    <section id="nav-container">
      <Navbar />
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
            A text input is a widget that enables users to input a string of text, 
            typically in response to questions or to supply user information. Furthermore, 
            text inputs are often paired with buttons for submission of the text.
        </p>
      </header>
  
      <main>
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
              import <span class="curly-symbol">&#10100</span> Checkbox <span
                    class="curly-symbol">&#10101</span
                  > from 'svve11'
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
                A checkbox instance can be created by placing the code below in
                the body of your Svelte file.
              </p>
              <pre><code class="code-block">
              {`<Checkbox {checkBoxLabel} {id} {checked} {checkBoxStyle} {checkBoxLabelStyle}/>`}
              </code></pre>
              <p>Each attribute should be defined as follows:</p>
              <ul class="options-object-list">
                <li>
                  id (string): sets the id attribute of the checkbox component.
                </li>
                <li>
                  checkBoxLabel (string): sets the aria-label attribute of the checkbox component.
                </li>
                <li>
                  checked (boolean): sets the initial state of the checkbox, where true will render a
                  pre-checked box and false will render a non-checked checkbox.
                </li>
                <li>
                  checkBoxStyle (string): sets the styling for the checkbox
                </li>
                <li>
                  checkBoxLabelStyle (string): sets the styling for the checkbox label text.
                </li>
              </ul>
              <h4>Example Checkbox Code:</h4>
              <pre><code class="code-block">
              {`<Checkbox
                checkBoxLabel="checkbox number one"
                id="checkbox-1"
                checked={false}
                checkBoxStyle='height: 1.5em; width: 1.5em; vertical-align: middle;'
                checkBoxLabelStyle='font-size:1em; vertical-align: middle;'
              />`}
              </code></pre>
              <h4>Example Checkbox:</h4>
              <div class="example-checkbox">
                <Checkbox
                checkBoxLabel="checkbox number one"
                id="checkbox-1"
                checked={false}
                checkBoxStyle='height: 1.5em; width: 1.5em; vertical-align: middle;'
                checkBoxLabelStyle='font-size:1em; vertical-align: middle;'
              />
              </div>
            </section>
          </fieldset>
        </section>
  
        <section>
          <fieldset>
            <legend>Component API</legend>
            <h2>Component API</h2>
            <div
              role="region"
              tabindex="0"
              style="max-width:100%;overflow:auto"
              class="props-table"
            >
              <table id="props-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><code>id</code></th>
                    <td>string</td>
                    <td>true</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>checkBoxLabel</code></th>
                    <td>string</td>
                    <td>true</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>checked</code></th>
                    <td>boolean</td>
                    <td>false</td>
                    <td>false</td>
                  </tr>
                  <tr>
                    <th><code>checkBoxStyle</code></th>
                    <td>string</td>
                    <td>false</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>checkBoxLabelStyle</code></th>
                    <td>string</td>
                    <td>false</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </fieldset>
        </section>
      </main>
    </article>
  </section>
  
  <style>

    .example-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
  </style>
  