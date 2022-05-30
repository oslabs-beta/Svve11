<script lang="ts">
	import logo from '../images/svve11-logo-blue-transparent-cropped.png';
</script>

<article id="splash" class="page-component">
	<header>
		<h1 style="font-family: 'Lobster', cursive;">
			It's a <img id="splash-logo" src={logo} alt="svve11 logo" /> day!
		</h1>

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
			</section>
		</fieldset>
	</section>
</article>

<style lang="scss">
	@import '../stylesheets/variables';

	#splash {
		header {
			display: flex;
			flex-direction: column;
			#splash-logo {
				display: inline-block;
				height: 7rem;
			}
			h1 {
				font-size: 8rem;
				color: $blue;
				margin-bottom: 0;
			}
			p {
				font-size: 1.5rem;
				font-style: italic;
				font-weight: 400;
				width: 65%;
				padding-left: 3rem;
				margin-top: 2rem;
				margin-bottom: 3rem;
				color: $darkgrey;
			}
		}
		section {
			* {
				color: $blue;
			}
		}
	}
</style>
