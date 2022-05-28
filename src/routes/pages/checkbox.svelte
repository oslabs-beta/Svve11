<script>
	import Checkbox from '$lib/Checkbox.svelte';
	import Table from '$lib/Table.svelte';

	const componentName = 'Checkbox';
	const githubSourceLink = 'https://github.com/Svve11/';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#checkbox';

	const tableProps = {
		id: 'props-table-button',
		ariaLabel: 'Button props table',
		ariaDescription:
			'This table describes the props that should be passed to the checkbox component',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['id', 'string', 'true', 'N/A'],
			['checkBoxLabel', 'string', 'true', 'N/A'],
			['checked', 'boolean', 'false', 'false'],
			['checkBoxStyle', 'string', 'false', 'N/A'],
			['checkBoxLabelStyle', 'string', 'false', 'N/A']
		],
		styles: {
			overallTableStyles: '',
			tableTitleStyles: 'font-size: 16px; text-align: left',
			headerRowStyles: 'width: 25%;',
			genRowStyles: 'width: 25%;'
		}
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
              import <span class="curly-symbol">&#10100</span> Checkbox <span class="curly-symbol"
								>&#10101</span
							> from 'svve11'
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
						A checkbox instance can be created by placing the code below in the body of your Svelte
						file.
					</p>
					<pre><code class="code-block">
              {`<Checkbox {checkBoxLabel} {id} {checked} {checkBoxStyle} {checkBoxLabelStyle}/>`}
              </code></pre>
					<p>Each attribute should be defined as follows:</p>
					<ul class="options-object-list">
						<li>id (string): sets the id attribute of the checkbox component.</li>
						<li>
							checkBoxLabel (string): sets the aria-label attribute of the checkbox component.
						</li>
						<li>
							checked (boolean): sets the initial state of the checkbox, where true will render a
							pre-checked box and false will render a non-checked checkbox.
						</li>
						<li>checkBoxStyle (string): sets the styling for the checkbox</li>
						<li>checkBoxLabelStyle (string): sets the styling for the checkbox label text.</li>
					</ul>
					<h4>Example Checkbox Code:</h4>
					<pre><code class="code-block">
              {`<Checkbox
                checkBoxLabel="checkbox number one"
                id="checkbox-1"
                checked={false}
                checkBoxStyle='height: 1.5em; width: 1.5em; vertical-align: middle;'
                checkBoxLabelStyle='font-size:1em; vertical-align: middle;'
              />`}
              </code></pre>
					<h4>Example Checkbox:</h4>
					<div class="example-checkbox">
						<Checkbox
							checkBoxLabel="checkbox number one"
							id="checkbox-1"
							checked={false}
							checkBoxStyle="height: 1.5em; width: 1.5em; vertical-align: middle;"
							checkBoxLabelStyle="font-size:1em; vertical-align: middle;"
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
</style>
