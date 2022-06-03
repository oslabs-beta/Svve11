<script>
	import Table from '$lib/Table.svelte';
	import TextInput from '$lib/TextInput.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Text Input';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/blob/main/package/TextInput.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#combobox';

	const tableOptions = {
		id: 'props-table-accordion',
		ariaLabel: 'Accordion props table',
		ariaDescription:
			'This table describes the props that should be passed to the text input in the options object',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['label', 'string', 'true', 'N/A'],
			['placeholder', 'string', 'true', 'N/A'],
			['id', 'string', 'true', 'N/A'],
			['type', 'string', 'true', 'N/A'],
			['inputStyle', 'string', 'false', 'N/A'],
			['labelStyle', 'string', 'false', 'N/A'],
			['max', 'string', 'false', 'N/A'],
			['min', 'string', 'false', 'N/A'],
			['maxLength', 'string', 'false', 'N/A'],
			['size', 'string', 'false', 'N/A'],
			['step', 'string', 'false', 'N/A'],
			['labelStyle', 'string', 'false', 'N/A'],
			['autocomplete', 'boolean', 'false', 'false'],
			['disabled', 'boolean', 'false', 'false'],
			['multiple', 'boolean', 'false', 'false'],
			['readonly', 'boolean', 'false', 'false'],
			['required', 'boolean', 'false', 'false']
		],
		styles: tableStyles
	};
	const textInputOptions1 = {
		label: 'Your email here: ',
		placeholder: 'jsmith@gmail.com',
		id: 'user-email',
		type: 'email'
	};
	const textInputOptions2 = {
		label: 'Your email here: ',
		placeholder: 'jsmith@gmail.com',
		id: 'user-email',
		type: 'email',
		labelStyle: 'font-family:Times New Roman; font-size:20px; color: blue',
		inputStyle: 'color: blue'
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
			A text input is a widget that enables users to input a string of text, typically in response
			to questions or to supply user information. Furthermore, text inputs are often paired with
			buttons for submission of the text.
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
import TextInput from 'svve11/TextInput.svelte'
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
					<h3>Creating a Text Input</h3>

					<p>
						To supply the text input with its contents, an options object is passed as a prop to the
						text input. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 6 properties.
					</p>
					<ul class="options-object-list">
						<h4>Required Props</h4>
						<li><span class="bold">label</span> (string): describes what the text input is requesting from the user</li>
						<li>
							<span class="bold">placeholder</span> (string): sets the text displayed in the text input box before the user
							inputs anything. This gives the user a hint as to what kind of input is being
							requested.
						</li>
						<li><span class="bold">id</span> (string): sets the unique id for the text field</li>
						<li><span class="bold">type</span> (string): sets the the kind of input expected to be submitted by the user.</li>
						<h4>Optional Props</h4>
						<li><span class="bold">inputStyle</span> (string): sets the style attribute for the text input box</li>
						<li>
							<span class="bold">labelStyle</span> (string): sets the style attribute for the label above the text input box
						</li>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block">
{`const textInputOptions = {
	label: 'Your email here:',
	placeholder: 'jsmith@gmail.com',
	id: 'user-email',
	type: 'email',
	labelStyle: 'font-family:Times New Roman; font-size:20px',
	inputStyle: 'color: blue'
};`}
              		</code></pre>
					<h4>Instantiating a text input</h4>
					<pre><code class="code-block">
{`<TextInput options={textInputOptions} />`}
					</code></pre>
					<h4>Example Text Input without styles:</h4>
					<div class="example-text-input">
						<TextInput options={textInputOptions1} />
					</div>
					<h4>Example Text Input with styles:</h4>
					<div class="example-text-input">
						<TextInput options={textInputOptions2} />
					</div>
					<p>
						There are a number of other optional attributes available with this component. Each of
						these attributes has the same function as the HTML attribute with its same name. Please
						check <a href="https://www.w3schools.com/tags/att_input_type_text.asp" target="_blank"
							>W3Schools' Input Tag Information</a
						>
						or
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text"
							target="_blank">MDN's Input Tag Information</a
						> webpages to learn more about how these work. By default all attributes of type boolean
						are set to false.
					</p>
					<ul>
						<li><span class="bold">max</span> (string)</li>
						<li><span class="bold">min</span> (string)</li>
						<li><span class="bold">maxLength</span> (string)</li>
						<li><span class="bold">size</span> (string)</li>
						<li><span class="bold">step</span> (string)</li>
						<li><span class="bold">autocomplete</span> (booelan)</li>
						<li><span class="bold">disabled</span> (booelan)</li>
						<li><span class="bold">multiple</span> (booelan)</li>
						<li><span class="bold">readonly</span> (booelan)</li>
						<li><span class="bold">required</span> (booelan)</li>
					</ul>

					<section>
						<fieldset>
							<legend>Styling</legend>
							<h2>Styling</h2>
							<p>
								The text input is made of 2 components that can have styles applied to them using
								the pre-assigned classes and a globally scoped CSS stylesheet. The classes are:
							</p>
							<ul class="options-object-list">
								<li><span class="bold">sv-text-input</span>: This applies styling to the text input input element</li>
								<li>
									<span class="bold">sv-text-input-label</span>: This applies styling to the label for the text input element
								</li>
							</ul>
						</fieldset>
					</section>
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
	.example-text-input {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.example-text-input {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
