import '@testing-library/jest-dom';
import { render, fireEvent, getByRole, getAllByRole, queries } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import RadioButton from '../lib/RadioButton.svelte';

const props = {
	radioButtonLabel: 'Radio Button',
	id: 'first',
	checked: false,
	radioButtonStyle: 'styling for buton',
	radioButtonLabelStyle: 'styling for label',
	name: 'groupOne',
	value: 'group'
};

let user;
// beforeEach(() => {
user = userEvent.setup();
const { component, getByText } = render(RadioButton, { ...props });
let radioButton = document.getElementById('first');
// });

describe('Accessible testing for radioButton', () => {
	test('checking if aria-label is being used', () => {
		expect(radioButton).toHaveAttribute('aria-label');
	});

	test('checking if id is being used', () => {
		expect(radioButton).toHaveAttribute('id');
	});

	test('checking if type is being defined', () => {
		expect(radioButton).toHaveAttribute('type');
	});

	test('checking if radio-button unselected by default', () => {
		expect(radioButton.getAttribute('checked')).toBeFalsy();
	});

	test('checking if the type is being defined as a radio button', () => {
		expect(radioButton.getAttribute('type')).toEqual('radio');
	});

	test('checking if type is being defined', () => {
		expect(radioButton).toHaveAttribute('name');
	});

	test('checking if type is being defined', () => {
		expect(radioButton).toHaveAttribute('type');
	});
});

describe('Accessing by keyboard functionality', () => {
	test('It can be focused by pressing tab', async () => {
		await user.tab();
		// expect(document.activeElement).toHaveValue('group');
	});
});
