<script lang="ts">
	// import logo from '../images/svve11-logo-blue-transparent-cropped.png';
	// import Accordion from '../lib/Accordion.svelte';
	// import Button from '../lib/Button.svelte';
	// import Checkbox from '../lib/Checkbox.svelte';
	// import Meter from '../lib/Meter.svelte';
	// import NavBar from '../lib/NavBar.svelte';
	// import RadioButton from '../lib/RadioButton.svelte';
	// import Table from '../lib/Table.svelte';
	// import TextInput from '../lib/TextInput.svelte';
	import logo from '../images/svve11-logo-blue-transparent-cropped.png';
</script>

<!-- Checking for hover prop tips -->
<!-- <Accordion />
<Button />
<Checkbox />
<Meter />
<NavBar />
<RadioButton />
<Table />
<TextInput /> -->

<article id="splash" class="page-component">
	<header>
		<h1 style="font-family: 'Lobster', cursive;">
			It's a <img id="splash-logo" src={logo} alt="svve11 logo" /> day
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

			<legend />
			<h2>Fully tested, ready-to-use</h2>
			<section class="content-section">
				<p>
					All of our components have been fully tested against the <a
						href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Guides</a
					> with our testing suite:
				</p>
				<ul id="testing-list">
					<li>
						Unit-testing of individual components with
						<img
							class="tech-icon"
							src="src/images/tech-icons/jest-logo-F9901EBBF7-seeklogo.com.png"
							alt="Jest logo"
						/><a href="https://jestjs.io/"> Jest </a>
					</li>
					<li>Screen readers:</li>
					<ul>
						<li>
							<img class="tech-icon" src="src/images/tech-icons/nvda_200x200.png" alt="NVDA logo" />
							<a href="https://www.nvaccess.org/download/">NVDA</a>
						</li>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/voiceover_logo.png"
								alt="VoiceOver logo"
							/>
							<a href="https://www.apple.com/accessibility/vision/">VoiceOver</a>
						</li>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/JAWS-screenreader-logo(1).png"
								alt="JAWS logo"
							/>
							<a href="https://www.freedomscientific.com/products/software/jaws/">JAWS</a>
						</li>
					</ul>
					<li>Browsers:</li>
					<ul>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/chrome-logo.svg"
								alt="Google Chrome logo"
							/>
							<a href="https://www.google.com/chrome/">Google Chrome</a>
						</li>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/Safari_browser_logo.svg"
								alt="Safari logo"
							/>
							<a href="https://www.apple.com/safari/">Safari</a>
						</li>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/Firefox_logo_2019.svg"
								alt="Mozilla Firefox logo"
							/>
							<a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>
						</li>
						<li>
							<img
								class="tech-icon"
								src="src/images/tech-icons/Microsoft_Edge_logo_(2019).svg"
								alt="Microsoft Edge logo"
							/>
							<a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>
						</li>
					</ul>
				</ul>
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
