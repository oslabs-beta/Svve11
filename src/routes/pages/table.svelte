<script lang="ts">
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Table';
	const githubSourceLink = 'https://github.com/Svve11/';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#table';

	const tableProps = {
		id: 'props-table-table',
		ariaLabel: 'Table props table',
		ariaDescription: 'This table describes the props that should be passed to the table component',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['ariaLabel', 'string', 'true', 'N/A'],
			['ariaDescription', 'string', 'true', 'N/A'],
			['columnNames', 'array of strings', 'true', 'N/A'],
			['rowsContent', 'array of arrays of strings', 'true', 'N/A'],
			['id', 'string', 'false', 'N/A'],
			['style', 'object', 'false', 'N/A']
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
			A table is a tabular structure constructed of rows of data stored in individual cells within
			the row. Tables are not widgets, and therefore are not focusable.
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
              import <span class="curly-symbol">&#10100</span> Table <span class="curly-symbol"
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
					<h3>Creating a Table</h3>
					<p>
						A table instance can be created by placing the code below in the body of your Svelte
						file.
					</p>
					<pre><code class="code-block">
              {`<Table {tableProps}`}
              </code></pre>
					<p>
						To supply the table with its contents, a tableProps object is passed as a prop to the
						table. This object can be created in the script section of the .svelte file or imported
						in from another location. The tableProps object has (6) properties.
					</p>
					<ul class="options-object-list">
						<li>
							ariaLabel (string): This property is <span class="bold-word">required</span>, and sets
							the aria-label attribute of the table
						</li>
						<li>
							ariaDescription (string): This property is <span class="bold-word">required</span>,
							and sets the title of the table. It will also set the table's aria-description
							attribute.
						</li>
						<li>
							columnNames (array of strings): This property is <span class="bold-word"
								>required</span
							>. Each string in the array corresponds to column name of the table. Column names will
							be added in the order they are input into this array.
						</li>
						<li>
							rowsContent (array of arrays of strings): This property is <span class="bold-word"
								>required</span
							>. Each array in the main array corresponds to a row in the table. Each string within
							each array corresponds to the entry in a cell in the row, again with the order of
							strings matching the order they will be placed in the row cells. The number of strings
							in each array must match the number of columns, thus an empty string should be
							supplied where an empty cell is desired.
						</li>
						<li>
							id (string): This property is <span class="bold-word">optional</span>, and sets the id
							attribtue of the table.
						</li>
						<li>
							styles (object): sets the styles for the various table components. Each key in the
							object is defined as follows:
						</li>
						<ul>
							<li>
								overallStyles (string): sets the style attribute of the overall table element.
							</li>
							<li>titleStyles (string): sets the style attribute of the table's title</li>
							<li>
								headersRowStyles (string): sets the style attribute of the first row of the table
								which contains the column names.
							</li>
							<li>generalRowStyles (string): sets the attribute of all the table's rows.</li>
							<li>oddRowStyles (string): sets the style attributes of all the table's odd rows.</li>
							<li>
								evenRowStyles (string): sets the style attribute of all the table's even rows.
							</li>
						</ul>
					</ul>
					<h4>Example Table Code:</h4>
					<pre><code class="code-block">
            {`const tableProps = {
                    id: 'demo-table',
                    ariaLabel: 'demo',
                    ariaDescription: 'svve11 team information',
                    columnNames: ['Name', 'Age', 'Favorite Color'],
                    rowsContent: [
                        ['Nurbek', '19', 'White'],
                        ['Paul', '26', 'Red'],
                        ['Tim', '29', 'Blue'],
                        ['Simon', '26', 'Green']
                    ],
                    styles: {
                        overallStyles: 'background-color: powderblue',
                        titleStyles: 'text-align: left;',
                        headersRowStyles: 'background-color: grey',
                        generalRowStyles: 'font-weight: lighter',
                        oddRowStyles: 'background-color: white',
                        evenRowStyles: 'background-color: lightgrey',
                    }
                };
        
            <Table {tableProps} />`}
              </code></pre>
					<h4>Example Table:</h4>
					<div class="example-text-input">
						<Table
							tableProps={{
								id: 'demo-table',
								ariaLabel: 'demo',
								ariaDescription: 'svve11 team information',
								columnNames: ['Name', 'Age', 'Favorite Color'],
								rowsContent: [
									['Nurbek', '19', 'White'],
									['Paul', '26', 'Red'],
									['Tim', '29', 'Blue'],
									['Simon', '26', 'Green']
								],
								styles: {
									overallStyles: 'background-color: powderblue',
									titleStyles: 'text-align: left;',
									headersRowStyles: 'background-color: grey',
									generalRowStyles: 'font-weight: lighter',
									oddRowStyles: 'background-color: white',
									evenRowStyles: 'background-color: lightgrey'
								}
							}}
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
