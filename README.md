<div style='display: flex; justify-content: center; margin-bottom: 20px;' >
<img src='./src/img/svvell-logo-yellow.png' style='height: auto; width: 60%; margin: auto'>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues"/>
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master" /> 
</p>

<h1 align="center"> A Svelte Accessibility Component Library </h2>

## About Us

Welcome to Svve11! We bring to your Svelte applications a **fully tested**, **ready-to-use** library of components with an accessibility first design!

For easier readability of documentation, check out our website [http://localhost:8080/](http://localhost:8080/)

## Features

✅ **Ready-to-use Components**

✅

---

## Getting Started

### Cloning this Repository

Sve11 is created using `npm`. Be sure to have Node.js and NPM installed on your computer before beginning.

To clone this repository, you must:

1. Fork the repository to your own GitHub.
2. Clone the repository and install dependencies by running the following commands in the terminal.

```
git clone https://github.com/[Your GitHub Handle]/Svve11
cd Svve11
npm install
```

### Installing Component Library as a product dependency

Svve11 can easily be installed for use in your application as follows.

1. From the terminal, navigate to your project directory.
2. Run one of the following commands in your terminal.

- Using `npm`

```node
npm install --save-dev 'Svve11'
```

- Using `yarn`

```yarn
yarn add 'Svve11'
```

3. Components can now be imported directly into your Svelte files as documented below.

### Technologies

[Svelte](https://svelte.dev/) | [Typescript](https://www.typescriptlang.org/) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) | [DENO](https://deno.com/deploy/docs) | [Express](https://expressjs.com/en/starter/installing.html) | [Jest](https://jestjs.io/) | [Rollup](https://rollupjs.org/guide/en/)

---

## Components

### Accordion

1. Import the accordion component using the command below in the script section of your .svelte file.

   ```js
   import { Accordion } from 'Svve11';
   ```

2. An accordion instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <Accordion options={options} />
   ```

3. To supply the accordion with its contents, an options object is passed as a prop to the accordion. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 4 properties.

   - **`panelInfo`**: This property is **required**. It must be an array of objects, with each object containing information for one accordion item. The object must contain:

     - **`id`** (_`number`_): used to set the `id` of accordion header and panel. If you will have more than one accordion in your application, be sure to continue the sequence of numbers instead of starting back at 1.
     - **`panelContent`** (_`string`_): sets text contents of the panel.
     - **`headerTitle`** (_`string`_): sets the title of the accordion section.

   - **`headerLevel`**: This property is **required**, and sets the `aria-level` for each header in the accordion. For information on deciding the appropriate value to be supplied, visit [this](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) webpage.

   - **`styles`**: This property is **optional**. If this property is supplied, it must be an array with 4 entries. Each entry is a string that resembles a style object. If you wish to leave out an entry in one position, `null` must be included at the correct index. An example is provided below.

     - The first entry will style the headers of the accordion
     - The second entry will style the panels of the accordion
     - The third entry will style each individual item within the accordion.
     - The fourth entry will style the entirety of the accordion

   - **`multiselectable`**: This property is **optional**, and will default to `false`. When set to `true`, the accordion can expand multiple panels at one time. When set to `false`, the accordion can expand only one panel at a time.

   #### Example Options Object

   ```js
   const options = {
   	panelInfo: [
   		{
   			id: 1,
   			panelContent: 'My first panel text.',
   			headerTitle: 'My first header title'
   		},
   		{
   			id: 2,
   			panelContent: 'My second panel text.',
   			headerTitle: 'My second header title'
   		}
   	],
   	headerLevel: 4,
   	styles: ['header styles', 'panel styles', 'item styles', 'accordion styles'],
   	multiselectable: false
   };
   ```

   #### Example Styles String

   ```js
   'height: 50px; width: 100%; background-color: coral; border: 1px solid black';
   ```
---

### Button

1. Import the Button component using the command below in the script section of your .svelte file.

   ```js
   import { Button } from 'Svve11';
   ```

2. The button component has (5) props:

- (4) **required** props:

  - **`id`** (_`string`_): sets the `id` attribute of the button component.
  - **`label`** (_`string`_): sets the `aria-label` attribute.
  - **`content`** (_`string`_): sets the text that is displayed inside the button component.
  - **`handleClick`** (_`function`_): defines the action or event to be triggered when the button is clicked.

- (1) _optional_ prop:
  - **`style`** (_`string`_): sets the styles of the button component

3. A Button instance can be created by placing the code below in the body of your .svelte file.
   ```js
   <Button
     id:'demo-button',
     label:'an accessible button',
     content:'Click me',
     handleClick: () => console.log('you clicked a button!'),
     style: 'background-color: blue; color: white;'
   />
   ```
---

### CheckBox

1. Import the CheckBox component using the command below in the script section of your .svelte file.

   ```js
   import { CheckBox } from 'Svve11';
   ```

2. An checkbox instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <Checkbox checkBoxLabel="" id="" checked={} checkBoxStyle={''} checkBoxLabelStyle={''} />
   ```

3. The CheckBox component has (5) props:

- `Props`
  - **`id`** (_`string`_): sets the `id` attribute of the checkbox component.
  - **`checkBoxLabel`** (_`string`_): sets the text label that corresponds with component
  - **`checked`** (_`boolean`_):
  - **`checkBoxStyle`** (_`string`_): sets the styling for the checkbox
  - **`checkBoxLabelStyle`** (_`string`_): sets the styling for the checkbox label text'

4. Example Code

```js
<Checkbox
	checkBoxLabel="This should be the value"
	id="one"
	checked={false}
	checkBoxStyle={'height: 1.5em; width: 1.5em;'}
	checkBoxLabelStyle={'font-size:1.5em;'}
/>
```
---

### Meter

1. Import the accordion component using the command below in the script section of your .svelte file.

   ```js
   import { Meter } from 'Svve11';
   ```

2. The meter component has (13) attributes:

- (5) **required** props:

  - **`value`** (number): sets the current value of the meter. Must be within the `minValue` to `maxValue` range. It is recommended to use a reactive variable to allow meter value now to change as necessary.
  - **`maxValue`** (number): sets the maximum value for the meter range.
  - **`minValue`** (number): sets the minimum value for the meter range.
  - **`meterLabel`** (string): sets the text label for the meter. The label will be automatically joined with a percentage calculation, unless otherwise specified. See `displayDecimal` in _optional_ props section.
  - **`id`** (number): sets the id for the meter. Remember to provide different id numbers when instantiating more than one meter on a page as the id should be unique.

- (8) _optional_ props:
  - **`lowValue`** (number): sets the value from which a current value below is considered low. Must be greater than `minValue` and less than the `maxValue` and `highValue`.
  - **`highValue`** (number): sets the value from which a current value above is considered high. Must be less than `maxValue` and greater than the `minValue` and `lowValue`.
  - **`optimumValue`** (number): sets the optimal numeric value of the meter. Must be a number between the `minValue` and `maxValue`. If the optimal value is set between the `minValue` and `lowValue`, or the `maxValue` and `highValue`, this range is considered optimal. Different browsers will color the bar differently depending on where the current value falls in relation to the optimal value.
  - **`valueText`** (string): used for assistive technologies that read the value of the meter to the users. Most assistive technologies will read value as a percentage by default, thus this props should be provided if a percentage read does not make sense in the context of your meter use.
  - **`displayDecimal`** (boolean): this will default to false. If set to true, this indicates to the meter that the value should not be presented as a percentage. This prop must be accompanied by the units prop described next.
  - **`units`** (string): sets the units to be displayed in the meter label should the percentage appearance not be relevant.
  - **`meterStyle`** (string): sets the style for the meter for any custom styles.
  - **`labelStyle`** (string): sets the style for the meter label for any custom styles.

3. A meter instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <script>
    let value = 60;
   </script>
   <Meter
    {value}
    maxValue={100}
    minValue={0}
    meterLabel="Demo meter"
    id={1}
    lowValue={20}
    highValue={80}
    optimumValue={85}
   />
   ```

---

### Radio Button

1. Import the Radio Button component using the command below in the script section of your .svelte file.

   ```js
   import { RadioButton } from 'Svve11';
   ```

2. A Radio Button instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <RadioButton
   	name="food"
   	radioButtonLabel="Pizza"
   	value={1}
   	id=""
   	checked={false}
   	radioButtonStyle=""
   	radioButtonLabelStyle=""
   />
   ```

3. The RadioButton component has (5) props:

- `Props`
  - **`id`** (_`string`_): sets the `id` attribute of the radiobutton component.
  - **`radioButtonLabel`** (_`string`_): sets the text label that corresponds with component
  - **`checked`** (_`boolean`_): sets the initial state of the radio button, where true will render a pre-checked button and false will render a non-checked button.
  - **`radioButtonStyle`** (_`string`_): sets the styling for the radio button
  - **`radioButtonLabelStyle`** (_`string`_): sets the styling for the radio button label text'

4. Example Code

```js
<RadioButton
	name="food"
	value={1}
	radioButtonLabel="Pizza"
	id="radioButtonOne"
	checked={false}
	radioButtonStyle="height: 1.5em; width: 1.5em;"
	radioButtonLabelStyle="font-size:1.5em;"
/>
```
---

### Table

1. Import the Table component using the command below in the script section of your .svelte file.

   ```js
   import { Table } from 'Svve11';
   ```

2. An Table instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <Table {tableProps} />
   ```

3. To supply the Table with its contents, a tableProps object is passed as a prop to the Table. This object can be created in the script section of the .svelte file or imported in from another location. The tableProps object has (6) properties.

- (4) Required properties:
	- **`ariaLabel`** (*`string`*): sets the `aria-label` attribute of the table
   - **`ariaDescription`** (*`string`*): this `string` will be displayed as the title of the table. It will also set the table's `aria-description` attribute.
   - **`columnNames`** (an *`array`* of *`strings`*): each `string` in the array corresponds to a column name of the table.
   - **`rowsContent`** (an *`array`* of  *`arrays`* of *`strings`*): 
     - each `array` corresponds to a row of the table
       - each  `string` in the `array` corresponds to a cell in the row
       - **Note:** the number of `strings` in each of these `arrays` should match the number of `strings` in the **`columnNames`** `array`

- (2) Optional properties:
  - **`id`** (*`string`*): sets the `id` attribute of the table
  - **`styles`** (*`object`* with (6) optional properties) 
    - **`overallStyles`** (*`string`*): sets the `style` attribute of the overall table element
  	 - **`titleStyles`** (*`string`*): sets the `style` attribute of the table's title
	 - **`headersRowStyles`** (*`string`*) sets the `style` attribute of the first row of the table, which contains the table's column names
	 - **`generalRowStyles`** (*`string`*): sets the `style` attributes of all the table's rows
	 - **`oddRowStyles`** (*`string`*): sets the `style` attributes of all the table's odd rows
	 - **`evenRowStyles`** (*`string`*): sets the `style` attributes of all the table's even rows
  
4. Example code:
   ```js
   <script>
      const tableProps = {
         id: 'demo-table',
         ariaLabel: 'demo',
         ariaDescription: 'svve11 team information',
         columnNames: ['Name', 'Age', 'Favorite Color'],
         rowsContent: [
            ['Nurbek', '19', 'White'],
            ['Paul', '26', 'Red'],
            ['Tim', '29', 'Blue'],
            ['Simon', '26', 'Green']
         ],
         styles: {
            overallStyles: 'background-color: powderblue',
            titleStyles: 'text-align: left;',
            headersRowStyles: 'background-color: grey',
            generalRowStyles: 'font-weight: lighter',
            oddRowStyles: 'background-color: white',
            evenRowStyles: 'background-color: lightgrey',
      }
      };
   </script>

   <Table {tableProps} />
   ```

---

### Text Input

1. Import the text input component using the command below in the script section of your .svelte file.

```js
import { TextInput } from 'Svve11';
```

2. A TextInput instance can be created by placing the code below in the body of your .svelte file.

```js
<TextInput />
```

3. There are four required attributes that must be passed into every instance of TextInput - label, placeholder, id, and type.
   a. **`label`** (_`string`_): A short summary describing what the text input is asking for from the user. An example would be “Your email here:”.
   b. **`placeholder`** (_`string`_): A short statement in the text input box that will hint to the user what kind of input is expected. An example would be “eg. jsmith@gmail.com”.
   c. **`id`** (_`string`_): Specifies a unique id for the text field for developers to reference. An example would be “user-email”.
   d. **`type`** (_`string`_): Specifies what kind of input is expected by the developer. An example would be “email”.

Putting all these together, the example component’s code would look like this:

```js
<TextInput label="Your email here:" placeholder="jsmith@gmail.com" id="user-email" type="email" />
```

4. Passing styles into the TextInput component is left as an optional attribute for the developer. There are two sets of styles available for customization - inputStyle and labelStyle.
   a. **`inputStyle`** (_`string`_): Used to style the text input box.
   b. **`labelStyle`** (_`string`_): Used to style the label above the text input box.

Styles are passed using HTML inline styling format (attributes separated by semicolons). Example:

```js
<TextInput
	label="Your email here:"
	placeholder="jsmith@gmail.com"
	id="user-email"
	type="email"
	labelStyle="font-family:Times New Roman; font-size:20px"
	inputStyle="color: blue"
/>
```

5. The following are optional attributes available with this component. Each of these attributes has the same function as the HTML attribute with its same name. Please check W3Schools or MDN's webpages to learn more about how these work. By default all attributes of type boolean are set to false.

   -**`max`** (_`string`_) -**`min`** (_`string`_) -**`maxLength`** (_`string`_) -**`size`** (_`string`_) -**`step`** (_`string`_) -**`inputStyle`** (_`string`_) -**`labelStyle`** (_`string`_) -**`autocomplete`** (_`boolean`_) -**`disabled`** (_`boolean`_) -**`multiple`** (_`boolean`_) -**`readonly`** (_`boolean`_) -**`required`** (_`boolean`_)

### NavBar

1. Import the accordion component using the command below in the script section of your .svelte file.

   ```js
   import { NavBar } from 'Svve11';
   ```

2. A NavBar instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <NavBar {options} />
   ```

3. To supply the NavBar with its contents, an options object is passed as a prop to the NavBar. This object can be created in the script section of the .svelte file or imported in from another location. The options object has six properties.

   - **`id`** (_`string`_): This property is **required**. This will be the id attribute you reference for styling inside your navbar component. An example would be “navbar”.

   - **`contentInfo`** (_`array`_): This property is **required**. It contains all the content in your navbar. The array will be full of objects, with each object having three properties - options, links and subheading.

- **`options`**(_`array`_): This property is **required**. Contains strings in order you want them to appear in the NavBar.
- **`links`**(_`array`_): This property is **required**. Contains the href attributes for each option provided. This array should be provided in the same order that the options array was provided (ie. corresponding indices between the two arrays).
- **`subheading`** (_`string`_): This property is **optional**. Contains the subheading for this section of the NavBar. See example below:

  ```js
   const contentInfo = [
      {
        subheading: "general",
        options: [
          "option1", "option2", "option3"
        ],
        links: [
          "", "", ""
        ]
      },
      {
        subheading: "other section",
        options: [
          "option4", "option5", "option6"
        ],
        links: [
          "", "", ""
      }
    ]
  ```

  - **`header`** (_`string`_): This property is **optional**. It contains the heading for the entire NavBar. An example would be “Menu”.

  - **`imgSrc`** (_`string`_): This property is **optional**. It contains the file path for an image you want included at the top of the menu, like a company logo for example.

  - **`imgClass`** (_`string`_): This property is **optional**. This will act as the class name for the imgSrc for styling purposes.

  - **`imgAlt`** (_`string`_): This property is **optional**. This acts as the alternate text in the event the image cannot render. An example would be “company logo”.

  #### Example Options Object

  ```js
   const options = {
   	 id: "testnav",
    	header: "Menu",
    	contentInfo: [
     		 {
        		subheading: "general",
        		options: [
         		 "option1", "option2", "option3"
        		],
        		links: [
         		 "", "", ""
       		 ]
      		},
      		{
       		 subheading: "other stuff",
       		options: [
         		 "option4", "option5", "option6"
        		],
       		 links: [
         		 "", "", ""
       		 ]
     		 }
    		],
  	      imgSrc: “./images/comp-logo.png”,
  	      imgClass: “navbar-logo”,
  	      imgAlt: “company logo”
      }
  ```

  #### NavBar Styling

Styles can be applied to different parts of the NavBar in your styling file by referencing single or groups of components using their class and id names.

- **`NavBar as a whole`**: Has an id of whatever you input as your id property.
- **`NavBar Header`**: Has an id of “navbar-header”. Created using <h2> under the hood.
- **`NavBar Subheading(s)`**: Have a class of “navbar-subheader”. Created using <h3> under the hood.
- **`NavBar Options`**: Have a class of “navbar-option”. Created using <li> under the hood.

## The Svve11 Team

<hr>

> Nurbek Jouraboev [@iamNurbek](https://github.com/iamNurbek) <br />
> Simon H Lee [@LeeSimonH](https://github.com/LeeSimonH) <br />
> Timothy Barry [@tbarry16](https://github.com/tbarry16) <br />
> Paul Swierkosz [@swierkopa](https://github.com/swierkopa) <br />

<hr>

## If You Want To Contribute!

If you found this interesting or helpful at all, feel free to drop a :star: [![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/Svve11?style=social&label=Star&)](https://github.com/oslabs-beta/Svve11/stargazers) :star: on this project to show your support!

All bugs, tasks or enhancements are tracked as <a href="https://github.com/oslabs-beta/Svve11/issues">GitHub issues</a>.

The following is a list of features + improvements for future open-source developers that the The Svve11 team has either started or would like to see implemented. If you have additional new ideas, feel free to implement those as well! Much appreciated.

Components to add:

-
-
-

Problems to fix:

-
-
-

## License

This project is available under the MIT License.
