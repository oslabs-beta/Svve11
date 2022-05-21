import App from './App.svelte';
// import TextInput from './lib/components/TextInput.svelte';
// import Accordion from './lib/components/Accordion/Accordion.svelte';
// import Button from './lib/components/Button.svelte';
// import Checkbox from './lib/components/Checkbox.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

export default app;

// export const Svve11 = { TextInput, Accordion, Button, Checkbox };
