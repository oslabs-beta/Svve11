/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Accordion from '../lib/Accordion.svelte';

// List of Accordion Parts:
// - Accordion: contains accordion item(s)
// - Accordion Item: contains header and panel
// - Accordion Header: contains button
// - Accordion Button: labels header
// - Accordion Panel: contains contents

describe('Accessible Accordion Unit Tests', () => {
	const options = {
		multiselectable: true,
		headerLevel: 4,
		styles: {
			accordionHeaderStyle: 'Header styles string',
			accordionPanelStyle: 'Panel styles string;',
			accordionItemStyle: 'Item styles string',
			overallAccordionStyle: 'Accordion styles string'
		},
		panelInfo: [
			{
				id: 1,
				panelContent:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.',
				headerTitle: 'First Section'
			},
			{
				id: 2,
				panelContent:
					'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.',
				headerTitle: 'Second Section'
			}
		]
	};

	describe('Button Unit Tests', () => {
		let buttons, button, user;
		beforeEach(() => {
			const { getAllByRole, getByText } = render(Accordion, { options });
			buttons = getAllByRole('button');
			button = getByText('First Section');
			user = userEvent.setup();
		});

		it('should have a role attribute set to button', () => {
			expect(buttons.length).toEqual(options.panelInfo.length);
		});

		it('should have no siblings', () => {
			expect(button.nextElementSibling).toEqual(null);
		});

		it('should have an attribute aria-expanded initialized to false', () => {
			expect(button.getAttribute('aria-expanded')).toEqual('false');
		});

		it('should toggle aria-expanded when clicked', async () => {
			expect(button.getAttribute('aria-expanded')).toEqual('false');
			await user.click(button);
			expect(button.getAttribute('aria-expanded')).toEqual('true');
			await user.click(button);
			expect(button.getAttribute('aria-expanded')).toEqual('false');
		});

		it('should have an attribute aria-label that toggles between an empty string and panel contents when clicked', async () => {
			expect(button.getAttribute('aria-label')).toEqual('');
			await user.click(button);
			expect(button.getAttribute('aria-label')).toEqual(options.panelInfo[0].panelContent);
			await user.click(button);
			expect(button.getAttribute('aria-label')).toEqual('');
		});

		it('should have a class name set to header-button', () => {
			expect(button.getAttribute('class')).toContain('sv-accordion-button');
		});

		it('should habe an id attribute set to button and the id number', () => {
			expect(button.getAttribute('id')).toEqual(`button${options.panelInfo[0].id}`);
		});

		it('should have an attribute aria-controls set to the panel it controls', () => {
			expect(button.getAttribute('aria-controls')).toEqual(`panel${options.panelInfo[0].id}`);
		});

		it('should be passed the styles string in the accordionHeaderStyle of the styles property in options object', () => {
			expect(button.getAttribute('style')).toEqual(options.styles.accordionHeaderStyle);
		});

		it('should be able to have focus', () => {
			user.tab();
			expect(button).toHaveFocus();
		});

		it('should expand/collapse when space key is pressed', async () => {
			user.tab();
			expect(button.getAttribute('aria-expanded')).toEqual('false');
			expect(button).toHaveFocus();
			expect(button.getAttribute('aria-label')).toEqual('');
			await user.keyboard(' ');
			expect(button.getAttribute('aria-expanded')).toEqual('true');
			expect(button.getAttribute('aria-label')).toEqual(options.panelInfo[0].panelContent);
			await user.keyboard('{enter}');
			expect(button.getAttribute('aria-expanded')).toEqual('false');
			expect(button.getAttribute('aria-label')).toEqual('');
		});

		it('should expand/collapse when enter key is pressed', async () => {
			user.tab();
			expect(button.getAttribute('aria-expanded')).toEqual('false');
			expect(button).toHaveFocus();
			expect(button.getAttribute('aria-label')).toEqual('');
			await user.keyboard('{enter}');
			expect(button.getAttribute('aria-expanded')).toEqual('true');
			expect(button.getAttribute('aria-label')).toEqual(options.panelInfo[0].panelContent);
			await user.keyboard('{enter}');
			expect(button.getAttribute('aria-expanded')).toEqual('false');
			expect(button.getAttribute('aria-label')).toEqual('');
		});
	});

	describe('Header Unit Tests', () => {
		let headers, heading, button;
		beforeEach(() => {
			const { getAllByRole, getByText } = render(Accordion, { options });
			headers = getAllByRole('heading');
			heading = getAllByRole('heading')[0];
			button = getByText('First Section');
		});

		it('should have a role attribute set to heading', () => {
			expect(headers.length).toEqual(options.panelInfo.length);
		});

		it('should have a class attribute set to accordion-header', () => {
			expect(heading.getAttribute('class')).toContain('accordion-header');
		});

		it('should have a child that is a button', () => {
			expect(heading.firstChild).toBe(button);
		});

		it('should have an aria-level attribute set to appropriate header level number', () => {
			expect(heading.getAttribute('aria-level')).toEqual(options.headerLevel.toString());
		});

		it('should be passed the styles string in the 0th index of the styles array', () => {
			expect(heading.getAttribute('style')).toEqual(options.styles.accordionHeaderStyle);
		});
	});

	describe('Panel Unit Tests', () => {
		let panels, panel;

		beforeEach(() => {
			const { getAllByRole } = render(Accordion, { options });
			panels = getAllByRole('region');
			panel = panels[0];
		});

		it('should have a role attribute set to region', () => {
			expect(panels.length).toEqual(options.panelInfo.length);
		});

		it('should have an id attribute set to panel and the appropriate id number', () => {
			expect(panel.getAttribute('id')).toEqual(`panel${options.panelInfo[0].id}`);
		});

		it('should have an aria-labelledby attribute set to the button labeling it', () => {
			expect(panel.getAttribute('aria-labelledby')).toEqual(`button${options.panelInfo[0].id}`);
		});

		it('should have a class attribute set to accordion-panel', () => {
			expect(panel.getAttribute('class')).toContain('accordion-panel');
		});

		it('should be passed the appropriate styles', () => {
			expect(panel.getAttribute('style')).toEqual(options.styles.accordionPanelStyle);
		});
	});

	describe('Item Unit Tests', () => {
		let items, item, button, panel, header, user;
		beforeEach(() => {
			const { getByText, getAllByRole } = render(Accordion, { options });
			items = document.getElementsByClassName('sv-accordion-item');
			item = items[0];
			button = document.querySelector('.sv-accordion-button');
			panel = document.querySelector('.sv-accordion-panel');
			header = document.querySelectorAll('.sv-accordion-header')[0];
			user = userEvent.setup();
		});

		it('should render one item for each panelInfo in options object', () => {
			expect(items.length).toEqual(options.panelInfo.length);
		});

		it('should have a data-state attribute set to collapsed initially, and should toggle to expanded when corresponding button is clicked', async () => {
			expect(item.getAttribute('data-state')).toBe('collapsed');
			await user.click(button);
			expect(item.getAttribute('data-state')).toBe('expanded');
		});

		it('should have two children, the first being the button and the second the panel', () => {
			expect(item.firstChild).toBe(header);
			expect(item.firstChild.firstChild).toBe(button);
			expect(item.firstChild.nextElementSibling).toBe(panel);
			expect(item.firstChild.nextElementSibling.nextElementSibling).toEqual(null);
		});
	});

	describe('Accordion Unit Tests', () => {
		it('should have an aria-multiselectable attribute corresponding to that passed into the options object', () => {
			const {} = render(Accordion, { options });
			const accordion = document.getElementsByClassName('sv-accordion-main')[0];
			expect(accordion.getAttribute('aria-multiselectable')).toEqual(`${options.multiselectable}`);
		});
	});
});
