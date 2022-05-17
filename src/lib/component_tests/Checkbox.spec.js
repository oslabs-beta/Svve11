import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  getByRole,
  getAllByRole,
} from '@testing-library/svelte';

import Checkbox from '../components/Checkbox.svelte';

const props = {
  checkBoxValue: 'This is checkbox value',
  id: 'checkBoxOne',
  checked: false,
};

const { component, getByText } = render(Checkbox, { ...props });
let checkbox = document.getElementById('checkBoxOne');

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

  test('checking if type equals checkbox', () => {
    expect(document.getAttribute('type')).toHaveTextContent('checkbox');
  });
});

/**
 * 1. Check if the checkbox in defined
 * 2. Check if the it contains aria-labelby
 * 3. Check if the aria-labelby has a string that
 */
