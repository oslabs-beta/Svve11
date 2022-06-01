/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Table from './../lib/Table.svelte';

let user;
let table;

const options = {
	id: 'test-table',
	ariaLabel: 'test',
	ariaDescription: 'Table Component for Testing',
	columnNames: ['Name', 'Age', 'Favorite Color'],
	rowsContent: [
		['Nurbek', '19', 'White'],
		['Paul', '26', 'Red'],
		['Tim', '29', 'Blue'],
		['Simon', '26', 'Green']
	],
	styles: {
		overallStyles: 'background-color: powderblue',
		titleStyles: 'text-align: left;',
		headersRowStyles: 'background-color: grey',
		generalRowStyles: 'font-weight: lighter',
		oddRowStyles: 'background-color: white',
		evenRowStyles: 'background-color: lightgrey'
	}
};

beforeEach(() => {
	// set up a user to dispatch events
	user = userEvent.setup();

	// render a Table for testing
	const { component } = render(Table, { options });
	table = document.getElementById('test-table');
});

describe('Running accessible Table tests', () => {
	describe('WAI-ARIA Roles, States, Properties tests', () => {
		test('It has a role table', () => {
			expect(table);
		});

		test('It has an accessible label', () => {
			expect(table).toHaveAttribute('aria-label');
			expect(table).toHaveAccessibleName('test');
		});

		test('It has an accessible description', () => {
			expect(table).toHaveAccessibleDescription('Table Component for Testing');
		});
	});

	describe('a11y checklist tests', () => {
		test('The table should have a caption element', () => {
			const caption = document.getElementById('test_table_desc');
			console.log('table caption:', caption);
			expect(table).toContainElement(caption);
		});

		test('Its caption element should provide a title for the table', () => {
			const caption = document.getElementById('test_table_desc');
			expect(caption.textContent).toBe('Table Component for Testing');
		});
	});

	describe('Keyboard interaction tests', () => {
		test('It can be focused by pressing tab', async () => {
			// press tab
			await user.tab();
			expect(document.activeElement).toHaveAccessibleName('test');
		});
	});
});
