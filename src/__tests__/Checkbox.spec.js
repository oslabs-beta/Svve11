import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Checkbox from '../lib/Checkbox.svelte';

let user;
let checkbox;
const options = {
	checkBoxLabel: 'This is checkbox value',
	id: 'checkBoxOne',
	checked: false,
	defaultStyle: 'display: inline-block; user-select: none;'
};

beforeEach(() => {
  user = userEvent.setup();
  const { component } = render(Checkbox, { options });
  checkbox = document.getElementById('checkBoxOne');
});

describe('Accessible Checkbox Testing Unit Tests', () => {
	test('checking for aria-label', () => {
		expect(checkbox).toHaveAttribute('aria-label');
	});

	test('checking for id', () => {
		expect(checkbox).toHaveAttribute('id');
	});

	test('checking for type', () => {
		expect(checkbox).toHaveAttribute('type');
	});

	test('testing if the checkbox is starting off as not checked', () => {
		expect(checkbox.getAttribute('checked')).toBeFalsy();
	});

	test('checking for type to equal checkbox', () => {
		expect(checkbox.getAttribute('type')).toEqual('checkbox');
	});

	test('checking if check box name is accessible', () => {
		// expect(checkbox.getAttribute('name')).toEqual('accessible-checkbox');
	});

	test('checking if check box name is accessible', () => {
		// expect(checkbox.getAttribute('value')).toEqual('box');
	});

	// test('checking for checkbox display styling', () => {
	// expect(checkbox.getAttribute('style')).toEqual(props.styles[0]);
	// });

	// test('checking for checkbox user-select styling', () => {
	//   expect(checkbox.getAttribute('style').toEqual(props.styles[1]));
	// });
});

// describe('Accessible button key press testing', () => {
//   test('checking it on/off when space press', async () => {
//     user.tab();
//     await user.keyboard(' ');
//     expect(checkbox.getAttribute('checked')).toBeTruthy();
//   });
// });
