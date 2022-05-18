<!-- ************************* Scripts ************************* -->
<script lang="ts">
  // @ts-nocheck

  import Input from "./lib/components/TextInput.svelte";
  import AccordionItem from "./lib/components/Accordion/AccordionItem.svelte";
  import Accordion from "./lib/components/Accordion/Accordion.svelte";
  import Button from "./lib/components/Button.svelte";
  import Checkbox from "./lib/components/Checkbox.svelte";

  const options = {
    multiselectable: false,
    headerLevel: 4,
    // styles: [
    //   "height: 50px; width: 100%; background-color: coral; border-color: black; border-radius: 10px",
    //   "background-color: yellow; border-radius: 10px",
    // ],
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
          "Velit egestas dui id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque sit amet porttitor eget dolor. Vitae purus faucibus ornare suspendisse sed. Maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris pharetra et ultrices neque ornare aenean euismod. Nec ultrices dui sapien eget mi proin sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Risus in hendrerit gravida rutrum quisque non tellus. Nec dui nunc mattis enim ut tellus elementum. Eleifend mi in nulla posuere.",
        headerTitle: "Third Section",
      },
    ],
  };

  // import index from './client/index.svelte';
  import AccordionPage from "./client/pages/AccordionPage.svelte";
  import Home from "./client/Home.svelte";
</script>

<!-- <Home /> -->
<!-- <AccordionPage /> -->
<fieldset>
  <legend> Check Box</legend>
  <Checkbox 
  checkBoxLabel="This should be the value" 
  id="one" 
  checked={false} 
  checkBoxStyle={'height: 1.5em; width: 1.5em;'} 
  checkBoxLabelStyle={'font-size:1.5em; '}
  /> 
</fieldset>


<!-- <head>
  <title>Sve11</title>
  <meta
    name="description"
    content="An accessible component library for Svelte."
  />
</head>

<div class="main-contanier">
  <p>
    "Your website is only as strong as your weakest component!"<em
      >-Arnold Schwarzenegger</em
    >
  </p>
</div>

<fieldset id="buttons">
  <legend>Buttons</legend>
  <label for="DemoButton">Accessible button component</label>
  <Button
    id="DemoButton"
    label="Accessible button"
    content="Do action"
    handleClick={(event) =>
      alert(
        `Some event or action has been activated by button (id: ${event.target.id}).`
      )}
  />
</fieldset>

<fieldset id="accordions">
  <legend>Accordion</legend>
  <Accordion {options} />
</fieldset>

<fieldset>
  <legend> Check Box</legend>
  <Checkbox checkBoxValue="yoyoy" id="hi" checked="false" />
</fieldset>

<fieldset>
  <legend> Form </legend>
  <Input label="Name" id="name" type="text" placeholder="eg. John Smith" /><br
  /><br />
  <Input
    label="Email"
    id="email"
    type="email"
    placeholder="eg. jsmith@gmail.com"
  /><br /><br />
  <Input
    label="Phone"
    id="phone"
    type="tel"
    placeholder="eg. 123-456-7890"
  /><br /><br />
</fieldset>

<!-- ************************* Styles ************************* -->

<!-- <AccordionPage /> -->
<!-- <style>
  * {
    margin: 0;
    padding: 0;
  }
</style> -->
