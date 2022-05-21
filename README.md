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

## Component

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

### CheckBox

1. Import the CheckBox component using the command below in the script section of your .svelte file.

   ```js
   import { CheckBox } from 'Svve11';
   ```

2. An accordion instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <Checkbox checkBoxLabel="" id="" checked={} checkBoxStyle={''} checkBoxLabelStyle={''} />
   ```

3. The CheckBox component has (5) props:

- `Props`
  - **`id`** (_`string`_): sets the `id` attribute of the button component.
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
	checkBoxLabelStyle={'font-size:1.5em; '}
/>
```

### Form

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
