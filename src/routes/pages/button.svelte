<script>
    import Button from "../../lib/Button.svelte";
    import PropsTable from "../components/PropsTable.svelte"
    import Navbar from "../components/Navbar.svelte";
  
    const componentName = "Button";
    const githubSourceLink = "https://github.com/Svve11/";
    const WAIARIApracticesLink =
      "https://w3c.github.io/aria-practices/#button";
  
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
            A button is a widget that enables users to trigger an action or event, 
            such as submitting a form, opening a dialog, canceling an action, or 
            performing a delete operation.
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
              import <span class="curly-symbol">&#10100</span> Button <span
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
              <h3>Creating a Button</h3>
              <p>
                A button instance can be created by placing the code below in
                the body of your Svelte file.
              </p>
              <pre><code class="code-block">
              {`<Button {id} {label} {content} {handleClick} {style}/>`}
              </code></pre>
              <p>Each attribute should be defined as follows:</p>
              <ul class="options-object-list">
                <li>
                  id (string): sets the id attribute of the button component.
                </li>
                <li>
                  label (string): sets the aria-label attribute of the button component.
                </li>
                <li>
                  content (string): sets the text that is displayed inside the button component.
                </li>
                <li>
                  handleClick (function): defined the action or event to be triggered when the button is clicked.
                </li>
                <li>
                  style (string): This attribute is <span class="bold-word">optional</span> and sets the styles of the button component.
                </li>
              </ul>
              <h4>Example Button Code:</h4>
              <pre><code class="code-block">
              {`<Button 
                id="demo-button-1" 
                label="accessible-button-1" 
                content="Click me!" 
                handleClick={() => console.log('You clicked a button!')} 
                style="height: 50px; width:300px;"
              />`}
              </code></pre>
              <h4>Example Button:</h4>
              <div class="example-button">
                  <Button 
                  id='demo-button-1'
                  label="accesible-button-1"
                  content='Click me!'
                  handleClick={() => console.log('You clicked a button!')}
                  style="height: 50px; width: 300px;"
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
                    <th><code>label</code></th>
                    <td>string</td>
                    <td>true</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>content</code></th>
                    <td>string</td>
                    <td>true</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>handleClick</code></th>
                    <td>function</td>
                    <td>false</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th><code>style</code></th>
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
  