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
        <th><code>multiselectable</code></th>
        <td><code>boolean</code></td>
        <td>false</td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <th><code>headerLevel</code></th>
        <td><code>number</code></td>
        <td>true</td>
        <td>N/A</td>
      </tr>
      <tr>
        <th><code>styles</code></th>
        <td><code>array</code> of <code>strings</code></td>
        <td>false</td>
        <td>N/A</td>
      </tr>
      <tr>
        <th><code>panelInfo</code></th>
        <td><code>array</code> of <code>objects</code></td>
        <td>false</td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</div>
<<<<<<< HEAD:src/client/components/PropsTable.svelte

<style>
  @media screen and (max-width: 667px) {
    .props-table {
      font-size: 8px;
    }

    code {
      font-size: 8px;
    }
    /* 
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
    ul {
      font-size: 8px;
    } */
  }
  /* Styles for tablet and computer */
  @media screen and (min-width: 668px) {
    .props-table {
      font-size: 16px;
    }

    code {
      font-size: 16px;
    }
    /* h1 {
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
    } */
  }
  table {
    display: flexbox;
    width: 100%;
    margin-bottom: 50px;
  }
  table > * {
    font-weight: 100;
  }

  thead {
    background-color: #eee;
    text-align: left;
  }

  code {
    display: inline-block;
    border-radius: 0.5em;
    font-family: -apple-system, BlinkMacSystemFont, monospace;
    font-weight: 600;
  }
</style>
=======
>>>>>>> main:src/routes/components/PropsTable.svelte
