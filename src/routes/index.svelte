<script lang="ts">
<<<<<<< HEAD

    import Navbar from './components/Navbar.svelte';
    import AccordionPage from './pages/accordion.svelte'
    // import Table from '../lib/Table.svelte';
    import Button from '$lib/Button.svelte';

    // let pageState = {
    //   main: true,
    //   accordion: false,
    //   button: false,
    //   checkbox: false,
    //   textInput: false
    // }

  const tableProps = {
    id: 'demo-table',
    ariaLabel:'demo',
    ariaDescription: 'svve11 team information',
    columnNames: ['Name', 'Age', 'Address'],
    rowsContent: [
      ['Simon Lee', '26', 'Murland'],
      ['Paul Swierkosz', '24', 'Canadia'],
      ['Timothy Barry', '29', 'Kenturkey'],
      ['Nurbek Jourbourev', '19', 'New Joisey']
    ]
  }

=======
>>>>>>> 442530ae5e0525459e9aa963ae0f078a9cea6f80
</script>

<article class="page-component">
	<header>
		<h1>Welcome to Svve11</h1>

		<p>
			Here at Svve11, we believe that accessible web development is the future. We know that
			creating and designing accessible web pages can be a challenge, thus we have created a library
			of Svelte components built with an accessibility first design strategy. These components can
			be easily imported into your Svelte files and quickly rendered to your web pages.
		</p>
	</header>

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
</article>

<style>
</style>
