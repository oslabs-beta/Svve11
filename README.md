![](/src/img/Svve11%20Logo.png)

<p align="center">
  <img src="http`xs://img.shields.io/badge/License-MIT-green.svg" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues"/>
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master" /> 
</p>

<h2 align="center"> Svelte Accessible Component Library </h2>

## About Us

Svve11 is a Svelte Accessible Component Library

check out our website [http://localhost:8080/](http://localhost:8080/)

## Features

✅ **Making your component accessible**

✅ **Ability to simple copy and paste code and have it working**

---

<br>

## Getting Started

### Installation

**Prerequisite**: Make sure you downloaded most recent versions of components

1. Fork and clone this repository.
2. `npm install`
3. `npm start dev`

### Technologies

[Svelte](https://svelte.dev/) | [Typescript](https://www.typescriptlang.org/) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) | [DENO](https://deno.com/deploy/docs) | [Express](https://expressjs.com/en/starter/installing.html) | [Jest](https://jestjs.io/) | [Svelte-Kit](https://kit.svelte.dev/docs/introduction)

---

<br>

## Component

### CheckBox

1. **IMPORT** the checkbox component by **COPY** and **PASTE** code **_BELOW_** on the file where you'll render the checkbox

   - `import Checkbox from "./lib/components/Checkbox.svelte"`

2. Head to the file where the checkbox will be used, simply **COPY** and **PASTE** code **_BELOW_**
   - `<Checkbox checkBoxValue="" id="" checked="" />`

- **Make sure to give value to all the variables**, if not you will encounter problems down the road.
- **checkBoxValue** will be the **_TEXT_** you render next to the checkbox
- **ID** will be the id you'd like to give to the checkbox
- **CHECKED** checked will be wether you'd like to check box to be **_CHECKED_** from start or not

### Form

### Accordion

1. Import the accordion component using the command below in the script section of your .svelte file.

   ```js
   import { Accordion } from "Svve11";
   ```

2. An accordion instance can be created by placing the code below in the body of your .svelte file.

   ```js
   <Accordion options={options} />
   ```

3. To supply the accordion with its contents, an options object is passed as a prop to the accordion. This object can be created in the script section of the .svelte file or imported in from another location. The options object has 4 properties.

   - `panelInfo`: This property is **required**. It must be an array of objects, with each object containing information for one accordion item. The object must contain:

     - an `id` property set to a number. If you will have more than one accordion in your application, be sure to continue the sequence of numbers instead of starting back at 1. Each panel should have a unique `id`.
     - a `panelContent` property set to a string specifying the desired contents of each panel.
     - a `headerTitle` property set to a string that clearly describes each section of the accordion.

   - `headerLevel`: This property is **required**, and sets the `aria-level` for each header in the accordion. For information on deciding the appropriate value to be supplied, visit [this](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) webpage.

   - `styles`: This property is optional. If this property is supplied, it must be an array with 4 entries. If you wish to leave out an entry in one position, `null` must be included at the correct index. Each entry is a string that resembles a style object.

     - The first entry will style the headers of the accordion
     - The second entry will style the panels of the accordion
     - The third entry will style each individual item within the accordion.
     - The fourth entry will style the entirety of the accordion

   - `multiselectable`: This property is optional, and will default to `false`. When set to `true`, the accordion will allow multiple panels to be open at a time. When set to `false`, the opening of one panel will cause the collapse of the current panel so that only one panel is open at a time.

   #### Example Options Object

<<<<<<< HEAD
```js
const options = {
  multiselectable: false,
  headerLevel: 4,
  styles: ['header styles', 'panel styles', 'item styles', 'accordion styles'],
  panelInfo: [
    {
      id: 1,
      panelContent: 'My first panel text.',
      headerTitle: 'My first header title',
    },
    {
      id: 2,
      panelContent: 'My second panel text.',
      headerTitle: 'My second header title',
    },
  ],
};
```

#### Example Styles String

`"height: 50px; width: 100%; background-color: coral; border: 1px solid black"`
=======
   ```js
   const options = {
     panelInfo: [
       {
         id: 1,
         panelContent: "My first panel text.",
         headerTitle: "My first header title",
       },
       {
         id: 2,
         panelContent: "My second panel text.",
         headerTitle: "My second header title",
       },
     ],
     headerLevel: 4,
     styles: [
       "header styles",
       "panel styles",
       "item styles",
       "accordion styles",
     ],
     multiselectable: false,
   };
   ```

   #### Example Styles String

   ```js
   "height: 50px; width: 100%; background-color: coral; border: 1px solid black";
   ```
>>>>>>> main

### Button

#### More Component to Come...

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
