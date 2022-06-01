<script lang="ts">
	import RadioButton from '$lib/RadioButton.svelte';
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Radio Button';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/RadioButton.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#radiobutton';

	const tableOptions = {
		id: 'props-table-button',
		ariaLabel: 'Button props table',
		ariaDescription:
			'This table describes the props that should be passed to the radio button in the options object',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['id', 'string', 'true', 'N/A'],
			['name', 'string', 'true', 'N/A'],
			['radioButtonLabel', 'string', 'true', 'N/A'],
			['value', 'number', 'false', 'N/A'],
			['checked', 'boolean', 'false', 'false'],
			['radioButtonStyle', 'string', 'false', 'N/A'],
			['radioButtonLabelStyle', 'string', 'false', 'N/A']
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
			A radio button is a clickable widget that is used to gather user input or responses, and they
			are typically used within a group of radio buttons. Only one of the radio buttons can be
			checked at a time.
		</p>
	</header>

	<main>
		<section>
			<fieldset>
				<legend>Installation</legend>
				<h2>Installation</h2>
				<section class="content-section">
					<p>Import the component in the script section of your Svelte file:</p>
					<pre><code class="code-block">
import RadioButton from 'svve11/RadioButton.svelte'
            </code></pre>
				</section>
			</fieldset>
		</section>
		<!-- Usage Guide -->
		<section>
			<fieldset>
				<legend>Usage</legend>
				<h2>Usage</h2>
				<section class="content-section">
					<h3>Creating a Radio Button</h3>

					<p>
						To supply the radio button with its contents, an options object is passed as a prop to
						the radio button. This object can be created in the script section of the .svelte file
						or imported in from another location. The options object has 6 properties.
					</p>
					<ul class="options-object-list">
						<h4>Required Props</h4>
						<li>id (string): sets the id attribute of the radio button component.</li>
						<li>
							radioButtonLabel (string): sets the aria-label attribute of the radio button
							component.
						</li>
						<h4>Optional Props</h4>
						<li>checked (boolean): sets whether the radio button will come pre-checked.</li>
						<li>radioButtonStyle (string): sets the styling for the radio button</li>
						<li>
							radioButtonLabelStyle (string): sets the styling for the radio button label text.
						</li>
						<li>
							name (string): sets the group name to which the radio button belongs. All radio
							buttons in one group should have the same name attribute. This property must be
							defined to allow only one radio button to be selected within a given group.
						</li>
						<li>value (string): sets the value associated with the given radio button.</li>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block">
{`const radioButtonOptions = {
	id: 'radioButtonOne',
	radioButtonLabel: 'Pizza',
	checked: false,
	radioButtonStyle: 'height: 1.5em; width: 1.5em;',
	radioButtonLabelStyle: 'font-size:1.5em;',
	name: 'food',
	value: 1
};`}
              </code></pre>
					<h4>Instantiating a radio button</h4>
					<pre><code class="code-block">
{`<RadioButton options={radioButtonOptions} />`}
					</code></pre>
					<h4>Example Radio Button Group:</h4>
					<div class="example-radiobutton">
						<RadioButton
							options={{
								name: 'food',
								value: '1',
								radioButtonLabel: 'Pizza',
								id: 'radioButtonOne',
								checked: false,
								radioButtonStyle: 'height: 1.5em; width: 1.5em;',
								radioButtonLabelStyle: 'font-size:1.5em;'
							}}
						/>
						<RadioButton
							options={{
								name: 'food',
								value: '2',
								radioButtonLabel: 'Spaghetti',
								id: 'radioButtonTwo',
								checked: false,
								radioButtonStyle: 'height: 1.5em; width: 1.5em;',
								radioButtonLabelStyle: 'font-size:1.5em;'
							}}
						/>
						<RadioButton
							options={{
								name: 'food',
								value: '3',
								radioButtonLabel: 'Salad',
								id: 'radioButtonThree',
								checked: false,
								radioButtonStyle: 'height: 1.5em; width: 1.5em;',
								radioButtonLabelStyle: 'font-size:1.5em;'
							}}
						/>
					</div>
					<h4>Styling the Radio Button with Classes</h4>
					<p>
						The radio button is made of 2 components that can have styles applied to them using the
						pre-assigned classes and a globally scoped CSS stylesheet. The classes are:
					</p>
					<ul class="options-object-list">
						<li>sv-radio-button-input: This applies styling to the radio button input element</li>
						<li>
							sv-radio-button-label: This applies styling to the label for the radio button element
						</li>
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
	.example-radiobutton {
		display: grid;
		grid-template-columns: 2em 2em;
	}
</style>
