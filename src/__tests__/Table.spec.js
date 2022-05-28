/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Table from '../lib/Table.svelte';

let user;
let table;

const tableProps = {
	id: 'test-table',
	ariaLabel: 'test',
	ariaDescription: 'Accessible Table Component for Testing',
	columnNames: ['Name', 'Age', 'Address'],
	rowsContent: [
		['Simon Lee', '26', 'Murland'],
		['Paul Swierkosz', '26', 'Canadia'],
		['Timothy Barry', '29', 'Kenturkey'],
		['Nurbek Jourbourev', '19', 'New Joisey']
	],
	styles: {
		overallTableStyles: 'background-color: none',
		headerRowStyles: 'background-color: powderblue',
		genRowStyles: 'background-color: white',
		tableTitleStyles: 'background-color: red'
	}
};

beforeEach(() => {
	// set up a user to dispatch events
	user = userEvent.setup();

	// render a Table for testing
	const { component } = render(Table, { tableProps });
	table = document.getElementById('test-table');
	console.log(table);
});

describe('Running accessible Table tests', () => {
	describe('WAI-ARIA Roles, States, Properties tests', () => {
		test('It has an accessible label', () => {
			expect(table).toHaveAttribute('aria-label');
		});
	});

	describe('')
});
