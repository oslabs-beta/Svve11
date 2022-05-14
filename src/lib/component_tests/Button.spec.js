import Button from '../components/Button.svelte';
import { render, fireEvent } from '@testing-library/svelte';

console.log('testing now...');

describe('Button unit tests:', () => {
	it('it works', async () => {
		const { getByText, getByTestId } = render(Button, {
			value: 'Click me'
		});
	});
});

/**
 * Tests:
 * ----------------------------------------------------------
 * WAI-ARIA Roles, States, Properties:
 * ----------------------------------------------------------
 * - has a role of button
 * - its content is unique and descriptive
 * - it cannot be autofocused
 * - has an accessible label
 *    - default: computed from any text content inside btn elmt
 *    - can also be provided by aria-labelledby or aria-label
 * - if it has a description
 *    - aria-describedby is set to ID of elmt containing the description
 * - aria-disabled is set to true when action associated w/ btn is unavailable
 * - all of its descendants are presentational
 *
 * If Toggle button...
 * - it has an aria-pressed attribute
 * - aria-pressed is set to true when btn toggled on
 * - aria-pressed is set to false when btn toggled off
 *
 * If Menu button...
 * - it has an aria-haspopup attribute
 * - aria-haspopup is set to either menu OR true
 * - You should be able to focus the button
 * - and then it should activate
 *    - on Click events
 *    - on pressing Space
 *    - on pressing Enter
 *    - It should not be activated by any other events
 *
 * - Does it trigger the desired event or action?
 *    e.g. submit a form, open a dialog, perform a delete operation
 *    - it should either be...
 *      - a button element
 *      - a input element with type = "button"
 *      - if anything else:
 *        - should be focusable
 *        - should have event handlers for click events
 *        - should have event handlers for keydown events
 *
 * ----------------------------------------------------------
 * Keyboard interaction tests:
 * ----------------------------------------------------------
 * - after button activation, it focus should be set correctly depending on button action
 *    - if activation does NOT dismiss current context:
 *        focus typ. returns to button
 *    - opens a dialog:
 *        focus moves inside the dialog
 *    - closes a dialog:
 *        focus typ. returns to button that opened the dialog
 *    - action indicates a context change
 *        focus typ. moves to starting point for that action
 *    - if btn activated w/ a shortcut key
 *        typ. remains in context from which shortcut ky was activated
 *          e.g. if Alt + U were assigned to an "Up" button that moves
 *               the currently focused item in a list one position higher in the list,
 *               pressing Alt + U when the focus is in the list
 *               would not move the focus from the list.
 *
 * ----------------------------------------------------------
 * Other:
 * ----------------------------------------------------------
 * - its [text] content has minimum 4.5:1 contrast ratio to its background
 * - if it has a border
 *    - its border color has minimum 3:1 contrast ratio to its surrounding context elmts
 * - if it doesn't have a border
 *    - its background color has minimum 3:1 contrast ratio to its surrounding context elmts
 *    - OR its background color is the same as its surrounding context
 * - it has a different style for when it's focused
 * - if btn can be disabled, aria-disabled set to true when disabled, false when active
 */
