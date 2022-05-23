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
              import <span class="curly-symbol">&#10100</span> TextInput <span
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
              <h3>Creating a Text Input</h3>
              <p>
                A text input instance can be created by placing the code below in
                the body of your Svelte file.
              </p>
              <pre><code class="code-block">
              {`<Checkbox />`}
              </code></pre>
              <p>There are four required attributes:</p>
              <ul class="options-object-list">
                <li>
                  label (string): describes what the text input is requesting from the user
                </li>
                <li>
                  placeholder (string): sets the text displayed in the text input box before the
                  user inputs anything. This gives the user a hint as to what kind of input is being
                  requested.
                </li>
                <li>
                  id (string): sets the unique id for the text field
                </li>
                <li>
                  type (string): sets the the kind of input expected to be submitted by the user.
                </li>
              </ul>
              <h4>Example Text Input Code:</h4>
              <pre><code class="code-block">
              {`<TextInput
                 label='Your email here: '
                 placeholder='jsmith@gmail.com'
                 id='user-email'
                 type='email'
              />`}
              </code></pre>
              
              <p>Styles are optional and can be passed to the text input box as follows:</p>
              <ul class="options-object-list">
                <li>
                  inputStyle (string): styles the text input box
                </li>
                <li>
                  labelStyle (string): styles the text of the label for a text input box
                </li>
              </ul>
              <pre><code class="code-block">
              {`<TextInput 
                 label='Your email here: ' 
                 placeholder='jsmith@gmail.com' 
                 id='user-email' 
                 type='email' 
                 labelStyle='font-family:Times New Roman; font-size:20px; color: blue;' 
                 inputStyle='color: blue'
              />`}
              </code></pre>
              <h4>Example Text Input without styles:</h4>
              <div class="example-text-input-no-style">
                <TextInput label='Your email here: ' placeholder='jsmith@gmail.com' id='user-email' type='email'/>
              </div>
              <h4>Example Text Input with styles:</h4>
              <div class="example-text-input-style">
                <TextInput label='Your email here: ' placeholder='jsmith@gmail.com' id='user-email' type='email' labelStyle='font-family:Times New Roman; font-size:20px; color: blue' inputStyle='color: blue'/>
              </div>
              
              <p>There are a number of other optional attributes that can be supplied to the text input:</p>

              <h1>PAUL HELP ME OUT HERE</h1>
              
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

    .example-text-input-style {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .example-text-input-no-style {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
  </style>
  