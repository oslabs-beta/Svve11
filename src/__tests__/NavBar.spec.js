import '@testing-library/jest-dom';
import {
	render,
	getByRole,
	getByAltText,
	getAllByAltText,
	getAllByRole
} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import NavBar from '../lib/NavBar.svelte';

let user;
let header;
let subheading;
let option1;
let option2;

const options = {
	id: 'testnav',
	header: 'Menu',
	contentInfo: [
		{
			subheading: 'Components',
			options: ['Button', 'Accordion'],
			links: ['../routes/pages/button.svelte', '../routes/pages/accordion.svelte']
		}
	],
	imgSrc: '../images/svve11-logo-white-transparent-cropped.png',
	imgClass: 'navbar-logo',
	imgAlt: 'company logo'
};

// before each test runs run,
beforeEach(() => {
	// set up a user to dispatch events
	user = userEvent.setup();

	// render a Button for testing
	const { getByText } = render(NavBar, { options });
	//header = getByText('Menu');
	console.log(document.body);
	subheading = getByText('Components');
	option1 = getByText('Button');
	option2 = getByText('Accordion');
});

describe('Running accessible NavBar tests', () => {
	describe('Keyboard interaction tests', () => {
		test('Can go down list of options using tab', async () => {
			await user.tab();
			// console.log('current active element:', document.activeElement);
			expect(document.activeElement).toBe(option1);
			await user.tab();
			expect(document.activeElement).toBe(option2);
		});
		test('Each option is paired with the appropriate link', async () => {
			await user.tab();
			const optionA = document.activeElement;
			expect(optionA).toHaveAttribute('href', '../routes/pages/button.svelte');

			await user.tab();
			const optionB = document.activeElement;
			expect(optionB).toHaveAttribute('href', '../routes/pages/accordion.svelte');
		});
	});
});
