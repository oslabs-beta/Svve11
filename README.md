<div style='display: flex; justify-content: center; margin-bottom: 20px;' >
<img src='./src/images/svve11-logo-cropped-blue.png' style='height: auto; width: 100%; margin: auto'>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues"/>
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master" /> 
</p>

<h1 align="center"> A Svelte Accessibility Component Library </h2>

## Table of Contents

- [About Us](#about-us)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Components](#components)
  - [Accordion](#accordion)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Meter](#meter)
  - [Nav Bar](#navbar)
  - [Radio Button](#radio-button)
  - [Table](#table)
  - [Text Input](#text-input)
- [The Svve11 Team](#the-svve11-team)
- [How to Contribute](#if-you-want-to-contribute)

## About Us

Welcome to Svve11! We bring to your Svelte applications a **fully tested**, **ready-to-use** library of components with an accessibility-first design philosophy!

For easier readability of documentation, check out our website [http://www.svve11.io/](http://www.svve11.io/)

## Features

✅ **8 Components with an accessibility-first design** <br>
✅ **Fully-tested for accessibility standards and functionality** <br>
✅ **Ready to use and easy to implement**

---

## Getting Started

### Installing the Component Library as a product dependency

Svve11 can easily be installed for use in your application as follows.

1. From the terminal, navigate to your project directory.
2. Run the following command in your terminal.

```node
npm install --save-dev 'svve11'
```

3. Components can now be imported directly into your Svelte files as documented below.

## Technologies

[Svelte](https://svelte.dev/) | [Javascript](https://www.javascript.com/) | [Typescript](https://www.typescriptlang.org/) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) | [Jest](https://jestjs.io/) | [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/)

---

## Components

### Accordion

1. Import the accordion component using the command below in the script section of your .svelte file.

```js
import Accordion from 'svve11/Accordion.svelte';
```

2. To supply the accordion with its contents, an options object is passed as a prop to the accordion. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 4 properties.

   - (2) **required** props:

     - **`panelInfo`** (an _`array`_ of _`objects`_): It must be an array of objects, with each object containing information for one accordion item. Each object must contain:

       - **`id`** (_`number`_): used to set the `id` of the accordion header and panel. If you will have more than one accordion in your application, be sure to continue the sequence of numbers instead of starting back at 1.
       - **`panelContent`** (_`string`_): sets the text contents of the panel.
       - **`headerTitle`** (_`string`_): sets the title of the accordion section.

     - **`headerLevel`** (_`number`_): Sets the `aria-level` for each header in the accordion. For information on deciding the appropriate value to be supplied, visit [this](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) webpage.

   - (2) _optional_ props:

     - **`styles`** (_`object`_): This property is an object with four assignable key/value pairs. The required key properties are:

       - **`accordionHeaderStyle`**: sets the style attribute for each accordion header
       - **`accordionPanelStyle`**: sets the style attribute for each accordion panel
       - **`accordionItemStyle`**: sets the style attribute for each accordion item
       - **`overallAccordionStyle`**: sets the style attribute for the accordion as a whole

     - **`multiselectable`** (_`boolean`_): This property is **optional**, and will default to `false`. When set to `true`, the accordion can expand multiple panels at one time. When set to `false`, the accordion can expand only one panel at a time. For accesibility purposes, it is recommended to leave this as the default setting.

#### Example Options Object

```js
const accordionOptions = {
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
	styles: {
		accordionHeaderStyle: 'Header styles string',
		accordionPanelStyle: 'Panel styles string;',
		accordionItemStyle: 'Item styles string',
		overallAccordionStyle: 'Accordion styles string'
	},
	multiselectable: false
};
```

3. An accordion instance can be created by placing the code below in the body of your .svelte file.

```js
<Accordion options={accordionOptions} />
```

#### Styling the Accordion with Classes

The accordion is made of 5 different components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-accordion-main: This applies styling to the accordion as whole
- sv-accordion-item: This applies styling to each accordion item within an accordion
- sv-accordion-header: This applies styling to each accordion header within an item
- sv-accordion-button: This applies styling to each accordion button within a header
- sv-accordion-panel: This applies styling to each accordion panel within an item

---

### Button

1. Import the Button component using the command below in the script section of your .svelte file.

```js
import Button from 'svve11/Button.svelte';
```

2. To supply the button with its contents, an options object is passed as a prop to the button. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 5 properties.

   - (4) **required** props:

     - **`id`** (_`string`_): sets the `id` attribute of the button component.
     - **`label`** (_`string`_): sets the `aria-label` attribute.
     - **`content`** (_`string`_): sets the text that is displayed inside the button component.
     - **`handleClick`** (_`function`_): defines the action or event to be triggered when the button is clicked.

   - (1) _optional_ prop:

     - **`style`** (_`string`_): sets the styles of the button component

#### Example Options Object

```js
const buttonOptions = {
	id: 'demo-button-1',
	content: 'Click me!',
	label: 'accessible-button-1',
	handleClick: () => console.log('You clicked a button!'),
	style: 'height: 50px; width: 300px;'
};
```

3. A Button instance can be created by placing the code below in the body of your .svelte file.

```js
<Button options={buttonOptions} />
```

#### Styling the Button with Classes

The button is made of 1 component that can have styles applied to it using the pre-assigned class and a globally scoped CSS stylesheet. The class is:

- sv-button: This applies styling to the button

---

### CheckBox

1. Import the checkbox component using the command below in the script section of your .svelte file.

```js
import Checkbox from 'svve11/Checkbox.svelte';
```

2. To supply the checkbox with its contents, an options object is passed as a prop to the checkbox. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 7 properties.

   - (2) **required** props:

     - **`id`** (_`string`_): sets the `id` attribute of the checkbox component. Be sure to have a unique string for each checkbox.
     - **`checkBoxLabel`** (_`string`_): sets the text label that corresponds with component.

   - (5) _optional_ props:
     - **`checked`** (_`boolean`_): sets the initial state of the checkbox, where true will render a pre-checked box and false will render a non-checked checkbox.
     - **`checkBoxStyle`** (_`string`_): sets the styling for the checkbox.
     - **`checkBoxLabelStyle`** (_`string`_): sets the styling for the checkbox label text.
     - **`name`** (_`string`_): sets the group name to which the checkbox belongs. All checkbox in one group should have the same name attribute.
     - **`value`** (_`string`_): sets the value associated with the given checkbox.

#### Example Options Object

```js
const checkboxOptions = {
	checkBoxLabel: 'checkbox number one',
	id: 'checkbox-1',
	checked: false,
	checkBoxStyle: 'height: 1.5em; width: 1.5em; vertical-align: middle;',
	checkBoxLabelStyle: 'font-size:1em; vertical-align: middle;'
};
```

3. An checkbox instance can be created by placing the code below in the body of your .svelte file.

```js
<Checkbox options={checkboxOptions} />
```

#### Styling the Checkbox with Classes

The checkbox is made of 2 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-checkbox-input: This applies styling to the checkbox itself
- sv-checkbox-label: This applies styling to the label for each checkbox

---

### Meter

1. Import the meter component using the command below in the script section of your .svelte file.

```js
import Meter from 'svve11/Meter.svelte';
```

2. To supply the meter with its contents, a value attribute and an options object are passed as props to the meter. These can be defined in the script section of the .svelte file or imported in from another location.

   - (5) **required** props:

     - **`value`** (_`number`_): this is passed as an attribute directly to the meter, and not within the options object. Sets the current value of the meter. Must be within the `minValue` to `maxValue` range. It is recommended to use a reactive variable to allow meter value to change as necessary.
     - **`maxValue`** (_`number`_): sets the maximum value for the meter range.
     - **`minValue`** (_`number`_): sets the minimum value for the meter range.
     - **`meterLabel`** (_`string`_): sets the text label for the meter. The label will be automatically joined with a percentage calculation, unless otherwise specified. See `displayDecimal` in _optional_ props section.
     - **`id`** (_`string`_): sets the id for the meter. Remember to provide different id numbers when instantiating more than one meter on a page as the id should be unique.

   - (8) _optional_ props:

     - **`lowValue`** (_`number`_): sets the value from which a current value below is considered low. Must be greater than `minValue` and less than the `maxValue` and `highValue`.
     - **`highValue`** (_`number`_): sets the value from which a current value above is considered high. Must be less than `maxValue` and greater than the `minValue` and `lowValue`.
     - **`optimumValue`** (_`number`_): sets the optimal numeric value of the meter. Must be a number between the `minValue` and `maxValue`. If the optimal value is set between the `minValue` and `lowValue`, or the `maxValue` and `highValue`, this range is considered optimal. Different browsers will color the bar differently depending on where the current value falls in relation to the optimal value.
     - **`valueText`** (_`string`_): used for assistive technologies that read the value of the meter to the users. Most assistive technologies will read value as a percentage by default, thus this prop should be provided if a percentage read does not make sense in the context of your meter use.
     - **`displayDecimal`** (_`boolean`_): this will default to false. If set to true, this indicates to the meter that the value should not be presented as a percentage. This prop must be accompanied by the units prop described next.
     - **`units`** (_`string`_): sets the units to be displayed in the meter label should the percentage default not be relevant.
     - **`meterStyle`** (_`string`_): sets the style for the meter for any custom styles.
     - **`labelStyle`** (_`string`_): sets the style for the meter label for any custom styles.

#### Example Options Object

```js
const meterOptions = {
	value: 60,
	maxValue: 100,
	minValue: 0,
	meterLabel: 'Demo meter',
	id: 1,
	lowValue: 20,
	highValue: 80,
	optimumValue: 85
};
```

3. A meter instance can be created by placing the code below in the body of your .svelte file.

```js
<Meter options={meterOptions} />
```

#### Styling the Meter with Classes

The meter is made of 2 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-meter: This applies styling to the meter itself
- sv-meter-label: This applies styling to the label for the meter

---

### NavBar

1. Import the navigation bar (nav bar) component using the command below in the script section of your .svelte file.

```js
import NavBar from 'svve11/NavBar.svelte';
```

2. To supply the nav bar with its contents, an options object is passed as a prop to the nav bar. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 6 properties.

   - (5) **required** props:

     - **`id`** (_`string`_): This will be the id attribute you reference for styling inside your navbar component. An example would be “navbar”.
     - **`contentInfo`** (an _`array`_ of _`objects`_): It contains all the content to be displayed in your nav bar. Each object in the array must contain:
       - **`subheading`** (_`string`_): Sets the subheading for this section of the nav bar.
       - **`options`**(an _`array`_ of _`strings`_): Contains strings in the order you want them to appear in the nav bar section.
       - **`links`**(_`array`_): Sets the href attributes for each option provided. This array should be provided in the same order that the options array was provided.

   - (5) _optional_ props:

     - **`header`** (_`string`_): It contains the heading for the entire nav bar.
     - **`imgSrc`** (_`string`_): It contains the file path for an image you want included at the top of the nav bar, such as a company logo.
     - **`imgClass`** (_`string`_): This will set the class name for the imgSrc for styling purposes.
     - **`imgAlt`** (_`string`_): This sets the alternate text in the event the image cannot render.

#### Example Options Object

```js
const navOptions = {
	id: 'nav-bar',
	// header: 'Menu',
	contentInfo: [
		{
			subheading: '',
			options: ['Home', 'Github'],
			links: ['/', 'https://github.com/oslabs-beta/svve11']
		},
		{
			subheading: 'Components',
			options: [
				'Accordion',
				'Button',
				'Checkbox',
				'Meter',
				'Nav Bar',
				'Radio Button',
				'Table',
				'Text Input'
			],
			links: [
				'/pages/accordion',
				'/pages/button',
				'/pages/checkbox',
				'/pages/meter',
				'/pages/navbar',
				'/pages/radiobutton',
				'/pages/table',
				'/pages/textinput'
			]
		},
		{
			subheading: '',
			options: ['About the team'],
			links: ['/about']
		}
	],
	imgSrc: logo,
	imgClass: 'svvell-logo',
	imgAlt: 'svve11'
};
```

3. A nav bar instance can be created by placing the code below in the body of your .svelte file.

```js
<NavBar options={navOptions} />
```

#### Styling the Nav Bar with Classes

The nav bar is made of 5 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-navbar: This applies styling to the nav bar
- sv-navbar-header: This applies styling to the main heading of the nav bar
- sv-navbar-subheader: This applies styling to each subheading of the nav bar
- sv-navbar-section: This applies styling to each section of the nav bar
- sv-navbar-option: This applies styling to each option of the nav bar

---

### Radio Button

1. Import the radio button component using the command below in the script section of your .svelte file.

```js
import RadioButton from 'svve11/RadioButton.svelte';
```

2. To supply the radio button with its contents, an options object is passed as a prop to the radio button. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 6 properties.

   - (2) **required** props:

     - **`id`** (_`string`_): sets the `id` attribute of the radio button component.
     - **`radioButtonLabel`** (_`string`_): sets the text label that corresponds with component

   - (4) _optional_ props:
     - **`checked`** (_`boolean`_): sets whether the radio button will come pre-checked.
     - **`radioButtonStyle`** (_`string`_): sets the styling for the radio button
     - **`radioButtonLabelStyle`** (_`string`_): sets the styling for the radio button label text'
     - **`name`** (_`string`_): sets the group name to which the radio button belongs. All radio buttons in one group should have the same name attribute. This property must be defined to allow only one radio button to be selected within a given group.
     - **`value`** (_`string`_): sets the value associated with the given radio button.

#### Example Options Object

```js
const radioButtonOptions = {
	id: 'radioButtonOne',
	radioButtonLabel: 'Pizza',
	checked: false,
	radioButtonStyle: 'height: 1.5em; width: 1.5em;',
	radioButtonLabelStyle: 'font-size:1.5em;',
	name: 'food',
	value: 1
};
```

3. A radio button instance can be created by placing the code below in the body of your .svelte file.

```js
<RadioButton options={radioButtonOptions} />
```

#### Styling the Radio Button with Classes

The radio button is made of 2 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-radio-button-input: This applies styling to the radio button input element
- sv-radio-button-label: This applies styling to the label for the radio button element

---

### Table

1. Import the table component using the command below in the script section of your .svelte file.

```js
import Table from 'svve11/Table.svelte';
```

2. To supply the table with its contents, an options object is passed as a prop to the table. This object can be created in the script section of the .svelte file or imported in from another location. The options object has (6) properties.

   - (4) **required** properties:

     - **`ariaLabel`** (_`string`_): sets the `aria-label` attribute of the table
     - **`ariaDescription`** (_`string`_): this `string` will be displayed as the title of the table. It will also set the table's `aria-description` attribute.
     - **`columnNames`** (an _`array`_ of _`strings`_): each `string` in the array corresponds to a column name of the table.
     - **`rowsContent`** (an _`array`_ of _`arrays`_ of _`strings`_):
       - each inner `array` corresponds to a row of the table
         - each `string` in the inner `array` corresponds to a cell in the row
         - **Note:** the number of `strings` in each of these `arrays` should match the number of `strings` in the **`columnNames`** `array`

   - (2) _optional_ properties:

     - **`id`** (_`string`_): sets the `id` attribute of the table
     - **`styles`** (_`object`_ with (6) optional properties):
       - **`overallStyles`** (_`string`_): sets the `style` attribute of the overall table element
       - **`titleStyles`** (_`string`_): sets the `style` attribute of the table's title
       - **`headersRowStyles`** (_`string`_) sets the `style` attribute of the first row of the table, which contains the table's column names
       - **`generalRowStyles`** (_`string`_): sets the `style` attributes of all the table's rows
       - **`oddRowStyles`** (_`string`_): sets the `style` attributes of all the table's odd rows
       - **`evenRowStyles`** (_`string`_): sets the `style` attributes of all the table's even rows

#### Example Options Object

```js
const tableOptions = {
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
		evenRowStyles: 'background-color: lightgrey'
	}
};
```

3. A table instance can be created by placing the code below in the body of your .svelte file.

```js
<Table options={tableOptions} />
```

#### Styling the Table with Classes

The table is made of 5 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-table: This applies styling to the table as a whole
- sv-table-title: This applies styling to the table title
- sv-table-row-headers: This applies styling to the header row of the table
- sv-table-row: This applies styling to all of the rows in the table
  - sv-table-row-even: This applies styling to each even row in the table
  - sv-table-row-odd: This applies styling to each odd row in the table
- sv-table-cell: This applies styling to each cell within the table

---

### Text Input

1. Import the text input component using the command below in the script section of your .svelte file.

```js
import TextInput from 'svve11/TextInput.svelte';
```

2. To supply the text input with its contents, an options object is passed as a prop to the text input. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 6 properties.

   - (4) **required** props:

     - **`label`** (_`string`_): describes what the text input is requesting from the user.
     - **`placeholder`** (_`string`_): sets the text displayed in the text input box before the user inputs anything. This gives the user a hint as to what kind of input is being requested.
     - **`id`** (_`string`_): Specifies a unique id for the text field for developers to reference. An example would be “user-email”.
     - **`type`** (_`string`_): Specifies what kind of input is expected by the developer. An example would be “email”.

   - (2) _optional_ props:
     - **`inputStyle`** (_`string`_): sets the style attribute for the text input box.
     - **`labelStyle`** (_`string`_): sets the style attribute for the label above the text input box.

#### Example Options Object

```js
const textInputOptions = {
	label: 'Your email here:',
	placeholder: 'jsmith@gmail.com',
	id: 'user-email',
	type: 'email',
	labelStyle: 'font-family:Times New Roman; font-size:20px',
	inputStyle: 'color: blue'
};
```

3. A text input instance can be created by placing the code below in the body of your .svelte file.

```js
<TextInput options={textInputOptions} />
```

4. The following are optional attributes available with this component. Each of these attributes has the same function as the HTML attribute with its same name. Please check [W3Schools](https://www.w3schools.com/tags/tag_input.asp) or [MDN's](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) webpages to learn more about how these work. By default, all attributes of type boolean are set to false.

   - **`max`** (_`string`_)
   - **`min`** (_`string`_)
   - **`maxLength`** (_`string`_)
   - **`size`** (_`string`_)
   - **`step`** (_`string`_)
   - **`inputStyle`** (_`string`_)
   - **`labelStyle`** (_`string`_)
   - **`autocomplete`** (_`boolean`_)
   - **`disabled`** (_`boolean`_)
   - **`multiple`** (_`boolean`_)
   - **`readonly`** (_`boolean`_)
   - **`required`** (_`boolean`_)

#### Styling the Text Input with Classes

The text input is made of 2 components that can have styles applied to them using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:

- sv-text-input: This applies styling to the text input input element
- sv-text-input-label: This applies styling to the label for the text input element

---

## The Svve11 Team

> Nurbek Jouraboev [@iamNurbek](https://github.com/iamNurbek) <br />
> Simon H Lee [@LeeSimonH](https://github.com/LeeSimonH) <br />
> Timothy Barry [@tbarry16](https://github.com/tbarry16) <br />
> Paul Swierkosz [@swierkopa](https://github.com/swierkopa) <br />

<hr>

## If You Want To Contribute!

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

### Support Svve11

If you found this interesting or helpful at all, feel free to drop a :star: [![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/Svve11?style=social&label=Star&)](https://github.com/oslabs-beta/Svve11/stargazers) :star: on this project to show your support!

### The future of Svve11

All bugs, tasks or enhancements are tracked as <a href="https://github.com/oslabs-beta/Svve11/issues">GitHub issues</a>.

The following is a list of features + improvements for future open-source developers that the The Svve11 team has either started or would like to see implemented. If you have additional new ideas, feel free to implement those as well! Much appreciated.

Some components to add:

- Alert
- Clickable Image Link
- Dialog (Modal)
- Disclosure
- Listbox
- Menu Button
- Slider
- Tooltip

Some enhancements to add:

- Give each component customized classes or ids
- Create a Prototyping GUI to build and test components

## License

This project is available under the MIT License.

```

```
