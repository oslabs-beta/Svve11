import '@testing-library/jest-dom';
import TextInput from "../components/TextInput.svelte";
import { render } from "@testing-library/svelte";
import userEvent from '@testing-library/user-event';

let user;
let input;
let label;

const props = {
  label: "This is a test",
  placeholder: "Test",
  id: "testInputText",
  type: "text"
}

beforeEach(() => {
  // // set up a user to dispatch events
  user = userEvent.setup();

  // render a Button for testing
  const { component, getByText, getByLabelText } = render(TextInput, { ...props });
  input = getByLabelText('This is a test');
  label = getByText('This is a test');
});

describe('Running accessible TextInput tests', () => {
  describe('Check that all attributes have been passed down properly', () => {
    test('<input> has correct placeholder attribute', () => {
      expect(input).toHaveAttribute('placeholder', 'Test');
    });

    test('<input> has correct type attribute', () => {
      expect(input).toHaveAttribute('type', 'text');
    });
    
    test('<input> and <label> have matching for/id attributes', () => {
      expect(input).toHaveAttribute('id', 'testInputText');
      expect(label).toHaveAttribute('for', 'testInputText');
    });
  });

  describe('Check that keyboard interaction works', () => { 
    test('It can be focused by pressing tab', async () => {
      await user.tab();
      // console.log('current active element:', document.activeElement);
      expect(document.activeElement).toBe(input);
    });
  })
});

/* 
Add test for styles when finished with TextInput.svelte styles
*/

  