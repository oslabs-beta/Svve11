<script>
	import Checkbox from '$lib/Checkbox.svelte';
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Checkbox';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/Checkbox.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#checkbox';

	const tableOptions = {
		id: 'props-table-Checkbox',
		ariaLabel: 'Checkbox props table',
		ariaDescription:
			'This table describes the props that should be passed to the checkbox in the options object',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['id', 'string', 'true', 'N/A'],
			['checkBoxLabel', 'string', 'true', 'N/A'],
			['checked', 'boolean', 'false', 'false'],
			['checkBoxStyle', 'string', 'false', 'N/A'],
			['checkBoxLabelStyle', 'string', 'false', 'N/A'],
			['name', 'string', 'false', 'N/A'],
			['value', 'string', 'false', 'N/A']
		],
		styles: tableStyles
	};

	const checkboxOptions = {
		checkBoxLabel: 'checkbox number one',
		id: 'checkbox-1',
		checked: false,
		checkBoxStyle: 'height: 1.5em; width: 1.5em; vertical-align: middle;',
		checkBoxLabelStyle: 'font-size:1em; vertical-align: middle;'
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
			A checkbox is a widget that enables users to select zero, one or many options from a list of
			options. This means that each checkbox is independent of the other checkboxes in the list.
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
import Checkbox from 'svve11/Checkbox.svelte'
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
					<h3>Creating a Checkbox</h3>
					<p>
						To supply the checkbox with its contents, an options object is passed as a prop to the
						checkbox. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 7 properties.
					</p>
					<ul class="options-object-list">
						<h4>Required Props</h4>
						<li>id (string): sets the id attribute of the checkbox component.</li>
						<li>
							checkBoxLabel (string): sets the aria-label attribute of the checkbox component.
						</li>
						<h4>Optional Props</h4>
						<li>
							checked (boolean): sets the initial state of the checkbox, where true will render a
							pre-checked box and false will render a non-checked checkbox.
						</li>
						<li>checkBoxStyle (string): sets the styling for the checkbox</li>
						<li>checkBoxLabelStyle (string): sets the styling for the checkbox label text.</li>
						<li>
							name (string): sets the group name to which the checkbox belongs. All checkbox in one
							group should have the same name attribute.
						</li>
						<li>value (string): sets the value associated with the given checkbox.</li>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block">
{`const checkboxOptions = {
  checkBoxLabel: 'checkbox number one',
  id: 'checkbox-1',
  checked: false,
  checkBoxStyle: 'height: 1.5em; width: 1.5em; vertical-align: middle;',
  checkBoxLabelStyle: 'font-size:1em; vertical-align: middle;'
};`}
              </code></pre>
					<h4>Instantiating a checkbox</h4>
					<pre><code class="code-block">
{`<Checkbox options={checkboxOptions}/>`}
	  </code></pre>
					<h4>Example Checkbox:</h4>
					<div class="example-checkbox">
						<Checkbox options={checkboxOptions} />
					</div>
				</section>
			</fieldset>
		</section>

		<section>
			<fieldset>
				<legend>Styling</legend>
				<h2>Styling</h2>
				<p>
					The checkbox is made of 2 components that can have styles applied to them using the
					pre-assigned classes and a globally scoped CSS stylesheet. The classes are:
				</p>
				<ul class="options-object-list">
					<li>sv-checkbox-input: This applies styling to the checkbox itself</li>
					<li>sv-checkbox-label: This applies styling to the label for each checkbox</li>
				</ul>
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
</style>
