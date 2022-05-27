<script lang="ts">
  const tableProps = {
    id: 'props-table-accordion',
    ariaLabel:'demo',
    ariaDescription: 'svve11 team information',
    columnNames: ['Name', 'Age', 'Address'],
    rowsContent: [
      ['Simon Lee', '26', 'Murland'],
      ['Paul Swierkosz', '26', 'Canadia'],
      ['Timothy Barry', '29', 'Kenturkey'],
      ['Nurbek Jourbourev', '19', 'New Joisey']
    ]
  }

	const tableProps = {
		id: 'demo-table',
		ariaLabel: 'demo',
		ariaDescription: 'svve11 team information',
		columnNames: ['Name', 'Age', 'Address'],
		rowsContent: [
			['Simon Lee', '26', 'Murland'],
			['Paul Swierkosz', '26', 'Canadia'],
			['Timothy Barry', '29', 'Kenturkey'],
			['Nurbek Jourbourev', '19', 'New Joisey']
		],
		styles: {
			overallTableStyles: 'background-color: none',
			headerRowStyles: 'background-color: powderblue',
			genRowStyles: 'background-color: white',
			tableTitleStyles: 'background-color: red'
		}
	};
</script>

  <article class="page-component">
    <header>
    <h1>Welcome to Svve11</h1>

		<section>
			<fieldset>
				<legend>Installation</legend>
				<h2>Installation</h2>
				<section class="content-section">
					<p>For npm, run the following in your command line</p>
					<pre><code class="code-block">  
          npm install 'svve11'
        </code></pre>
					<p>For yarn, run:</p>
					<pre><code class="code-block">
          yarn add 'svve11'
        </code></pre>
				</section>
			</fieldset>
		</section>

<<<<<<< HEAD
=======
		<section><Table {tableProps} /></section>
	</article>
</section>

>>>>>>> main
<style>
</style>
