<script>
	import Accordion from '../../lib/Accordion.svelte';
	import Table from '../../lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Accordion';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/Accordion.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#accordion';

	const accordionOptions = {
		multiselectable: false,
		headerLevel: 4,
		styles: {
			accordionHeaderStyle: '',
			accordionPanelStyle: '',
			accordionItemStyle: '',
			overallAccordionStyle: ''
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
			},
			{
				id: 3,
				panelContent:
					'Dicat inani suscipit ne mel, eam ad viris tollit essent. Hinc facilis electram eu cum, usu ad praesent sadipscing, nam consetetur scriptorem cu. Labore mollis aperiam no vel, mollis feugait noluisse sed at. Nec ex vide eirmod audire.',
				headerTitle: 'Third Section'
			}
		]
	};

	const tableOptions = {
		id: 'props-table-accordion',
		ariaLabel: 'Accordion props table',
		ariaDescription:
			'This table describes the props that should be passed to the accordion in the options object',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['panelInfo', 'array of objects', 'true', 'N/A'],
			['headerLevel', 'number', 'true', 'N/A'],
			['multiselectable', 'boolean', 'false', 'true'],
			['styles', 'object', 'false', 'N/A']
		],
		styles: tableStyles
	};
</script>

<article class="page-component">
	<header>
		<h1>{componentName}</h1>
		<ul class="resource-links-list">
			<li>Source: <a href={githubSourceLink} target="_blank">{githubSourceLink}</a></li>
			<li>
				WAI-ARIA: <a href={WAIARIApracticesLink} target="_blank">{WAIARIApracticesLink}</a>
			</li>
		</ul>
		<p class="header-paragraph">
			An accordion is a vertically stacked set of interactive headings that each contain a title,
			content snippet, or thumbnail representing a section of content. The headings function as
			controls that enable users to reveal or hide their associated sections of content. Accordions
			are commonly used to reduce the need to scroll when presenting multiple sections of content on
			a single page.
		</p>
	</header>

	<main>
		<!-- Installation Guide -->
		<section>
			<fieldset>
				<legend>Installation</legend>
				<h2>Installation</h2>
				<section class="content-section">
					<p>Import the component in the script section of your Svelte file:</p>
					<pre><code class="code-block">
import Accordion from 'svve11/Accordion.svelte'
          </code></pre>
				</section>
			</fieldset>
		</section>
		<!-- Usage Guide -->
		<section class="main-section">
			<fieldset>
				<legend>Usage</legend>
				<h2>Usage</h2>
				<section class="content-section">
					<h3>Creating an Accordion</h3>
					<p>
						To supply the accordion with its contents, an options object is passed as a prop to the
						accordion. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 4 properties.
					</p>
					<ul class="options-object-list">
						<h4>Required Props</h4>
						<li>
							panelInfo (array): It must be an array of objects, with each object containing
							information for one accordion item. Each object must contain:
						</li>
						<ul>
							<li>
								id (number): Used to set the `id` of the accordion header and panel. If you will
								have more than one accordion in your application, be sure to continue the sequence
								of numbers instead of starting back at 1.
							</li>
							<li>panelContent (string): Sets text contents of the panel.</li>
							<li>headerTitle (string): Sets the title of the accordion section.</li>
						</ul>
						<li>
							headerLevel (number): Sets the aria-level for each header in the accordion. For
							information on deciding the appropriate value to be supplied, visit this
							<a
								href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level"
								target="_blank">ARIA webpage</a
							>.
						</li>
						<h4>Optional Props</h4>
						<li>
							styles (object): This property is an object with four assignable key/value pairs. The
							values must be strings, and the required key properties are:
						</li>
						<ul>
							<li>accordionHeaderStyle: sets the style attribute for each accordion header</li>
							<li>accordionPanelStyle: sets the style attribute for each accordion panel</li>
							<li>accordionItemStyle: sets the style attribute for each accordion item</li>
							<li>overallAccordionStyle: sets the style attribute for the accordion as a whole</li>
						</ul>
						<li>
							multiselectable (boolean): This will default to false. When set to true, the accordion
							can expand multiple panels at one time. When set to false, the accordion can expand
							only one panel at a time.
						</li>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block example-code">
{`const accordionOptions = { 
  panelInfo: [
	{
	  id: 1,
	  panelContent: 'My first panel text.',
	  headerTitle: 'My first header title'
	},
	{
	  id: 2,
	  panelContent: 'My second panel text.',
	  headerTitle: 'My second header title'
	}
  ],
  headerLevel: 4,
  styles: {
	accordionHeaderStyle: 'Header styles string',
	accordionPanelStyle: 'Panel styles string;',
	accordionItemStyle: 'Item styles string',
	overallAccordionStyle: 'Accordion styles string'
  },
  multiselectable: false
}`}
					</code></pre>
					<h4>Instantiating an accordion</h4>
					<pre><code class="code-block">
{'<Accordion options={accordionOptions} />'}
					</code></pre>
					<h4>Example Accordion:</h4>
					<div class="example-accordion">
						<Accordion options={accordionOptions} />
					</div>

					<h4>Styling the Accordion with Classes</h4>
					<p>
						The accordion is made of 5 different components that can have styles applied to them
						using the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:
					</p>
					<ul class="options-object-list">
						<li>sv-accordion-main: This applies styling to the accordion as whole</li>
						<li>
							sv-accordion-item: This applies styling to each accordion item within an accordion
						</li>
						<li>
							sv-accordion-header: This applies styling to each accordion header within an item
						</li>
						<li>
							sv-accordion-button: This applies styling to each accordion button within a header
						</li>
						<li>sv-accordion-panel: This applies styling to each accordion panel within an item</li>
					</ul>
				</section>
			</fieldset>
		</section>

		<section>
			<fieldset>
				<legend>Component API</legend>
				<h2>Component API</h2>
				<div role="region" tabindex="0" style="max-width:100%;overflow:auto" class="props-table">
					<Table options={tableOptions} />
				</div>
			</fieldset>
		</section>
	</main>
</article>

<style>
	/******* ID Styles for index page ********/

	.example-accordion {
		font-size: 16px;
	}

	.options-object-list {
		line-height: 1.3;
	}
</style>
