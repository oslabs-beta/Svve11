/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
// import '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Button from '../lib/Button.svelte';

let user;
let button;
const options = {
	content: 'test descriptive content',
	id: 'test-button',
	label: 'accessible-button',
	handleClick: (e) => (e.target.textContent = 'clicked')
};

// before each test runs run,
beforeEach(() => {
	// set up a user to dispatch events
	user = userEvent.setup();

	// render a Button for testing
	const { getByText } = render(Button, { options });
	button = getByText('test descriptive content');
});

describe('Running accessible Button tests', () => {
	describe('WAI-ARIA Roles, States, Properties tests', () => {
		test('It has an accessible label', () => {
			expect(button).toHaveAttribute('aria-label');
		});

		test('It has an accessible name', () => {
			expect(button).toHaveAccessibleName('accessible-button');
		});

		test('Its content is unique and descriptive', () => {
			expect(button).toHaveTextContent('test descriptive content');
		});

		test('It is not autofocused', () => {
			expect(document.activeElement).not.toBe(button);
		});

		test('It can can be be activated with a click', async () => {
			await user.click(button);
			expect(button).toHaveTextContent('clicked');
		});

		test('It triggers an event or action', async () => {
			await user.click(button);
			expect(button).toHaveTextContent('clicked');
		});
	});

	describe('Keyboard interaction tests', () => {
		test('It can be focused by pressing tab', async () => {
			await user.tab();
			expect(document.activeElement).toBe(button);
		});

		test('It can can be be activated by pressing space', async () => {
			// focus the button
			user.tab();
			// press space
			await user.keyboard(' ');
			expect(button).toHaveTextContent('clicked');
		});

		test('It can can be be activated by pressing enter', async () => {
			// focus the button
			user.tab();
			// press enter
			await user.keyboard('{enter}');
			expect(button).toHaveTextContent('clicked');
		});

		test('Keys that are not space or enter do not activate the button', async () => {
			user.tab();
			await user.keyboard('`1234567890qwertyuiopasdfghjklzxcvbnm');
			expect(button).toHaveTextContent('test descriptive content');
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
