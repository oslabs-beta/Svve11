<script lang="ts">
	// importing all logo paths
	import svve11Logo from '../images/svve11-logo-cropped-purple-transparent.png';
	import jestLogo from '../images/tech-icons/jest-logo-F9901EBBF7-seeklogo.com.png';
	import NVDALogo from '../images/tech-icons/nvda_200x200.png';
	import VoiceOverLogo from '../images/tech-icons/voiceover_logo.png';
	import JAWSLogo from '../images/tech-icons/JAWS-screenreader-logo.png';
	import ChromeLogo from '../images/tech-icons/chrome-logo.svg';
	import SafariLogo from '../images/tech-icons/Safari_browser_logo.svg';
	import FirefoxLogo from '../images/tech-icons/Firefox_logo_2019.svg';
	import EdgeLogo from '../images/tech-icons/Microsoft_Edge_logo_(2019).svg';
	import ImageLink from '../pending/ImageLink.svelte';
  import RadioButton from '../pending/RadioButton.svelte';
import Radiobutton from './pages/radiobutton.svelte';

	// setting ImageLink props for each logo and its corresponding link
	const imgLinkOptions = {
		svve11: {
			href: 'https://svve11.io/',
			src: svve11Logo,
			title: 'svve11 homepage',
			alt: 'svve11 logo'
		},
		jest: {
			href: 'https://jestjs.io/',
			src: jestLogo,
			title: 'Jest website',
			alt: 'Jest logo',
			imgClass: 'tech-icon',
			postText: 'Jest'
		},
		NVDA: {
			href: 'https://www.nvaccess.org/download/',
			src: NVDALogo,
			title: 'NVDA website',
			alt: 'NVDA logo',
			imgClass: 'tech-icon',
			postText: 'NVDA'
		},
		VoiceOver: {
			href: 'https://www.apple.com/accessibility/vision/',
			src: VoiceOverLogo,
			title: 'Apple VoiceOver website',
			alt: 'Apple VoiceOver logo',
			imgClass: 'tech-icon',
			postText: 'VoiceOver'
		},
		JAWS: {
			href: 'https://www.freedomscientific.com/products/software/jaws/',
			src: JAWSLogo,
			title: 'JAWS website',
			alt: 'JAWS logo',
			imgClass: 'tech-icon',
			postText: 'JAWS'
		},
		Chrome: {
			href: 'https://www.google.com/chrome/',
			src: ChromeLogo,
			title: 'Google Chrome website',
			alt: 'Google Chrome logo',
			imgClass: 'tech-icon',
			postText: 'Chrome'
		},
		Safari: {
			href: 'https://www.apple.com/safari/',
			src: SafariLogo,
			title: 'Safari website',
			alt: 'Safari logo',
			imgClass: 'tech-icon',
			postText: 'Safari'
		},
		Firefox: {
			href: 'https://www.mozilla.org/en-US/firefox/new/',
			src: FirefoxLogo,
			title: 'Mozilla Firefox website',
			alt: 'Mozilla Firefox logo',
			imgClass: 'tech-icon',
			postText: 'Safari'
		},
		Edge: {
			href: 'https://www.microsoft.com/en-us/edge',
			src: EdgeLogo,
			title: 'Microsoft Edge website',
			alt: 'Microsoft Edge logo',
			imgClass: 'tech-icon',
			postText: 'Edge'
		}
	};
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
						<ImageLink options={imgLinkOptions.jest} />
					</li>
					<li>Screen readers:</li>
					<ul>
						<li><ImageLink options={imgLinkOptions.NVDA} /></li>
						<li><ImageLink options={imgLinkOptions.VoiceOver} /></li>
						<li><ImageLink options={imgLinkOptions.JAWS} /></li>
					</ul>
					<li>Browsers:</li>
					<ul>
						<li><ImageLink options={imgLinkOptions.Chrome} /></li>
						<li><ImageLink options={imgLinkOptions.Safari} /></li>
						<li><ImageLink options={imgLinkOptions.Firefox} /></li>
						<li><ImageLink options={imgLinkOptions.Edge} /></li>
					</ul>
				</ul>
			</section>
		</fieldset>
	</section>
</article>

<style lang="scss">
	@import '../stylesheets/variables';
</style>
