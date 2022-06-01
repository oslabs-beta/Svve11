<script lang="ts">
	import svve11Logo from '../images/svve11-logo-blue-transparent-cropped.png';
	import jestLogo from '../images/tech-icons/jest-logo-F9901EBBF7-seeklogo.com.png';
	import NVDALogo from '../images/tech-icons/nvda_200x200.png';
	import VoiceOverLogo from '../images/tech-icons/voiceover_logo.png';
	import JAWSLogo from '../images/tech-icons/JAWS-screenreader-logo.png';
	import ChromeLogo from '../images/tech-icons/chrome-logo.svg';
	import SafariLogo from '../images/tech-icons/Safari_browser_logo.svg';
	import FirefoxLogo from '../images/tech-icons/Firefox_logo_2019.svg';
	import EdgeLogo from '../images/tech-icons/Microsoft_Edge_logo_(2019).svg';

</script>

<article id="splash" class="page-component">
	<header>
		<h1 style="font-family: 'Lobster', cursive;">
			It's a <img id="splash-logo" src={svve11Logo} alt="svve11 logo" /> day
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
						target="_blank"
						href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Guides</a
					> with our testing suite:
				</p>
				<ul id="testing-list">
					<li>
						Unit-testing of individual components with
						<a target="_blank" href="https://jestjs.io/">
							<img class="tech-icon" src={jestLogo} alt="Jest logo" />
							Jest
						</a>
					</li>
					<li>Screen readers:</li>
					<ul>
						<li>
							<a target="_blank" href="https://www.nvaccess.org/download/">
								<img class="tech-icon" src={NVDALogo} alt="NVDA logo" />
								NVDA
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.apple.com/accessibility/vision/">
								<img class="tech-icon" src={VoiceOverLogo} alt="VoiceOver logo" />
								VoiceOver
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.freedomscientific.com/products/software/jaws/">
								<img class="tech-icon" src={JAWSLogo} alt="JAWS logo" />
								JAWS
							</a>
						</li>
					</ul>
					<li>Browsers:</li>
					<ul>
						<li>
							<a target="_blank" href="https://www.google.com/chrome/">
								<img class="tech-icon" src={ChromeLogo} alt="Google Chrome logo" />
								Google Chrome</a
							>
						</li>
						<li>
							<a target="_blank" href="https://www.apple.com/safari/">
								<img class="tech-icon" src={SafariLogo} alt="Safari logo" />
								Safari
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.mozilla.org/en-US/firefox/new/">
								<img class="tech-icon" src={FirefoxLogo} alt="Mozilla Firefox logo" />
								Mozilla Firefox
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.microsoft.com/en-us/edge">
								<img class="tech-icon" src={EdgeLogo} alt="Microsoft Edge logo" />
								Microsoft Edge
							</a>
						</li>
					</ul>
				</ul>
			</section>
		</fieldset>
	</section>
</article>

<style lang="scss">
	@import '../stylesheets/variables';
</style>
