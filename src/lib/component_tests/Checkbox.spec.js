import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';

import Checkbox from '../components/Checkbox.svelte';

describe('Accessible Button Testing Unit Tests', () => {
  describe('Button Unit Tests', () => {
    const { component } = render(Checkbox);

    // Does the button have a role attribute of button
    it('It should have type attribute', () => {});
  });
});

/**
 * 1. Check if the checkbox in defined
 * 2. Check if the it contains aria-labelby
 * 3. Check if the aria-labelby has a string that
 */
