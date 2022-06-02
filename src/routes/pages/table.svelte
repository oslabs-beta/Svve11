<script lang="ts">
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Table';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/Table.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#table';

	const tableOptions = {
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
			<li>Source: <a href={githubSourceLink} target="_blank">{githubSourceLink}</a></li>
			<li>
				WAI-ARIA: <a href={WAIARIApracticesLink} target="_blank">{WAIARIApracticesLink}</a>
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
import Table from 'svve11/Table.svelte'
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
						To supply the table with its contents, an options object is passed as a prop to the
						table. This object can be created in the script section of the .svelte file or imported
						in from another location. The options object has 6 properties.
					</p>
					<ul class="options-object-list">
						<h4>Required Props</h4>
						<li><span class="bold">ariaLabel</span> (string): sets the aria-label attribute of the table</li>
						<li>
							<span class="bold">ariaDescription</span> (string): sets the title of the table. It will also set the table's
							aria-description attribute.
						</li>
						<li>
							<span class="bold">columnNames</span> (array of strings): each string in the array corresponds to a column name
							of the table.
						</li>
						<li>
							<span class="bold">rowsContent</span> (array of arrays of strings): each inner array corresponds to a row of the
							table. Each string in the inner array corresponds to a cell in the row. The number of
							strings in each of these arrays should match the number of strings in the columnNames
							array.
						</li>
						<h4>Optional Props</h4>
						<li><span class="bold">id</span> (string): sets the id attribtue of the table.</li>
						<li>
							<span class="bold">styles</span> (object): sets the styles for the various table components. Each key in the
							object is defined as follows:
						</li>
						<ul>
							<li>
								<span class="bold">overallStyles</span> (string): sets the style attribute of the overall table element.
							</li>
							<li><span class="bold">titleStyles</span> (string): sets the style attribute of the table's title</li>
							<li>
								<span class="bold">headersRowStyles</span> (string): sets the style attribute of the first row of the table
								which contains the column names.
							</li>
							<li><span class="bold">generalRowStyles</span> (string): sets the attribute of all the table's rows.</li>
							<li><span class="bold">oddRowStyles</span> (string): sets the style attributes of all the table's odd rows.</li>
							<li>
								<span class="bold">evenRowStyles</span> (string): sets the style attribute of all the table's even rows.
							</li>
						</ul>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block">
{`const tableOptions = {
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
	headersRowStyles: 'background-color: grey, color: white',
	generalRowStyles: 'font-weight: lighter',
	oddRowStyles: 'background-color: white',
	evenRowStyles: 'background-color: lightgrey'
  }
};`}
             		</code></pre>

					<h4>Instantiating a table</h4>
					<pre><code class="code-block">
{`<Table options={tableOptions}`}
					</code></pre>

					<h4>Example Table:</h4>
					<div class="example-text-input">
						<Table
							options={{
								id: 'demo-table',
								ariaLabel: 'demo',
								ariaDescription: 'svve11 team information',
								columnNames: ['Name', 'Age', 'Favorite Color'],
								rowsContent: [
									['Nurbek', '19', 'White'],
									['Paul', '26', 'Red'],
									['Tim', '29', 'Purple'],
									['Simon', '26', 'Green']
								],
								styles: {
									overallStyles: 'background-color: powderblue',
									titleStyles: 'text-align: left;',
									headersRowStyles: 'background-color: grey; color: white',
									generalRowStyles: 'font-weight: lighter',
									oddRowStyles: 'background-color: white',
									evenRowStyles: 'background-color: lightgrey'
								}
							}}
						/>
					</div>
					<section>
						<fieldset>
							<legend>Styling</legend>
							<h2>Styling</h2>
							<p>
								The table has 5 preassign classes that can be targeted and styled using a globally
								scoped CSS stylesheet. The classes are:
							</p>
							<ul class="options-object-list">
								<li><span class="bold">sv-table</span>: This applies styling to the table as a whole</li>
								<li><span class="bold">sv-table-title</span>: This applies styling to the table title</li>
								<li><span class="bold">sv-table-row-headers</span>: This applies styling to the header row of the table</li>
								<li><span class="bold">sv-table-row</span>: This applies styling to all of the rows in the table</li>
								<ul>
									<li><span class="bold">sv-table-row-even</span>: This applies styling to each even row in the table</li>
									<li><span class="bold">sv-table-row-odd</span>: This applies styling to each odd row in the table</li>
								</ul>
								<li><span class="bold">sv-table-cell</span>: This applies styling to each cell within the table</li>
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
</style>
