<script>
	import Button from '$lib/Button.svelte';
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';
	const componentName = 'Button';
	const githubSourceLink = 'https://github.com/Svve11/';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#button';

	const tableProps = {
		id: 'props-table-button',
		ariaLabel: 'Button props table',
		ariaDescription: 'This table describes the props that should be passed to the button component',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['id', 'string', 'true', 'N/A'],
			['label', 'string', 'true', 'N/A'],
			['content', 'string', 'true', 'N/A'],
			['handleClick', 'function', 'false', 'N/A'],
			['style', 'string', 'false', 'N/A']
		],
		styles: tableStyles
	};

	const buttonOptions = {
		id: 'demo-button-1',
		content: 'Click me!',
		label: 'accessible-button-1',
		handleClick: () => console.log('You clicked a button!'),
		style: 'height: 50px; width:300px;'
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
			A button is a widget that enables users to trigger an action or event, such as submitting a
			form, opening a dialog, canceling an action, or performing a delete operation.
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
              import Button from 'svve11/Button.svelte'
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
					<h3>Creating a Button</h3>
					<p>
						A button instance can be created by placing the code below in the body of your Svelte
						file.
					</p>
					<pre><code class="code-block">
              {`<Button {id} {label} {content} {handleClick} {style}/>`}
              </code></pre>
					<p>Each attribute should be defined as follows:</p>
					<ul class="options-object-list">
						<li>id (string): sets the id attribute of the button component.</li>
						<li>label (string): sets the aria-label attribute of the button component.</li>
						<li>content (string): sets the text that is displayed inside the button component.</li>
						<li>
							handleClick (function): defined the action or event to be triggered when the button is
							clicked.
						</li>
						<li>
							style (string): This attribute is <span class="bold-word">optional</span> and sets the
							styles of the button component.
						</li>
					</ul>
					<h4>Example Button Code:</h4>
					<pre><code class="code-block">
              {`<Button 
                id="demo-button-1" 
                label="accessible-button-1" 
                content="Click me!" 
                handleClick={() => console.log('You clicked a button!')} 
                style="height: 50px; width:300px;"
              />`}
              </code></pre>
					<h4>Example Button:</h4>
					<div class="example-button">
						<!-- <Button
							id="demo-button-1"
							label="accesible-button-1"
							content="Click me!"
							handleClick={() => console.log('You clicked a button!')}
							style="height: 50px; width: 300px;"
						/> -->
						<Button options={buttonOptions} />
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
	.example-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
