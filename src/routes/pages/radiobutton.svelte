<script lang="ts">
	import RadioButton from '$lib/RadioButton.svelte';
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Radio Button';
	const githubSourceLink = 'https://github.com/Svve11/';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#radiobutton';

	const tableProps = {
		id: 'props-table-button',
		ariaLabel: 'Button props table',
		ariaDescription:
			'This table describes the props that should be passed to the radio button component',
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
			<li>Source: <a href={githubSourceLink}>{githubSourceLink}</a></li>
			<li>
				WAI-ARIA: <a href={WAIARIApracticesLink}>{WAIARIApracticesLink}</a>
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
						A radio button instance can be created by placing the code below in the body of your
						Svelte file.
					</p>
					<pre><code class="code-block">
              {`<RadioButton {radioButtonLabel} {id} {checked} {radioButtonStyle} {radioButtonLabelStyle} />`}
              </code></pre>
					<p>Each attribute should be defined as follows:</p>
					<ul class="options-object-list">
						<li>id (string): sets the id attribute of the radio button component.</li>
						<li>
							name (string): sets the name attribute of the radio component. This should be the same
							string for each radio button within a group.
						</li>
						<li>
							radioButtonLabel (string): sets the aria-label attribute of the radio button
							component.
						</li>
						<li>
							checked (boolean): sets the initial state of the radio button, where true will render
							a pre-checked button and false will render a non-checked button.
						</li>
						<li>radioButtonStyle (string): sets the styling for the radio button</li>
						<li>
							radioButtonLabelStyle (string): sets the styling for the radio button label text.
						</li>
					</ul>
					<h4>Example Radio Button Code:</h4>
					<pre><code class="code-block">
		{`<RadioButton
		  name="food"
		  value={1}
		  radioButtonLabel="Pizza"
		  id="radioButtonOne"
		  checked={false}
		  radioButtonStyle="height: 1.5em; width: 1.5em;"
		  radioButtonLabelStyle="font-size:1.5em;"
		/>`}
              </code></pre>
					<h4>Example Radio Button Group:</h4>
					<div class="example-radiobutton">
						<RadioButton
							name="food"
							value={1}
							radioButtonLabel="Pizza"
							id="radioButtonOne"
							checked={false}
							radioButtonStyle="height: 1.5em; width: 1.5em;"
							radioButtonLabelStyle="font-size:1.5em;"
						/>
						<RadioButton
							name="food"
							value={2}
							radioButtonLabel="Spaghetti"
							id="radioButtonTwo"
							checked={false}
							radioButtonStyle="height: 1.5em; width: 1.5em;"
							radioButtonLabelStyle="font-size:1.5em;"
						/>
						<RadioButton
							name="food"
							value={3}
							radioButtonLabel="Salad"
							id="radioButtonThree"
							checked={false}
							radioButtonStyle="height: 1.5em; width: 1.5em;"
							radioButtonLabelStyle="font-size:1.5em;"
						/>
					</div>
				</section>
			</fieldset>
		</section>

		<section>
			<fieldset>
				<legend>Component API</legend>
				<h2>Component API</h2>
				<div role="region" tabindex="0" style="max-width:100%;overflow:auto" class="props-table">
					<Table {tableProps} />
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
