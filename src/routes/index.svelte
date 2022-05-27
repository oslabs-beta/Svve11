<script lang="ts">
<<<<<<< HEAD
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
=======
	import Navbar from './components/Navbar.svelte';
	import AccordionPage from './pages/accordion.svelte';
	import Table from '../lib/Table.svelte';
	import Button from '$lib/Button.svelte';

	// let pageState = {
	//   main: true,
	//   accordion: false,
	//   button: false,
	//   checkbox: false,
	//   textInput: false
	// }
>>>>>>> main

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

<<<<<<< HEAD
  <article class="page-component">
    <header>
    <h1>Welcome to Svve11</h1>
=======
<section class="main-container">
	<section id="nav-container">
		<Navbar pages="" />
	</section>

	<article class="page-component">
		<header>
			<h1>Welcome to Svve11</h1>

			<p>
				Here at Svve11, we believe that accessible web development is the future. We know that
				creating and designing accessible web pages can be a challenge, thus we have created a
				library of Svelte components built with an accessibility first design strategy. These
				components can be easily imported into you Svelte files and quickly rendered to your web
				pages.
			</p>
		</header>
>>>>>>> main

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
