<script>
	import Table from '../../lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Nav Bar';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/NavBar.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#aria_lh_navigation';

	const options1 = {
		id: 'testnav',
		header: 'Menu',
		contentInfo: [
			{
				subheading: 'general',
				options: ['option1', 'option2', 'option3'],
				links: ['', '', '']
			},
			{
				subheading: 'other stuff',
				options: ['option4', 'option5', 'option6'],
				links: ['', '', '']
			}
		]
	};

	const tableOptions = {
		id: 'props-table-navbar',
		ariaLabel: 'Nav Bar props table',
		ariaDescription:
			'This table describes the props that should be passed to the nav bar in the options object',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['id', 'string', 'true', 'N/A'],
			['contentInfo', 'array of objects', 'true', 'N/A'],
			['header', 'string', 'false', 'N/A'],
			['imgSrc', 'string', 'false', 'N/A'],
			['imgClass', 'string', 'false', 'N/A'],
			['imgAlt', 'string', 'false', 'N/A']
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
			A navigation bar (nav bar) is a collection of landmarks that each contain a group of links
			that can be used to navigate through the webpage. This component will provide you with a nav
			bar where each collection contains a list of anchor tags which can be clicked to navigate to
			the supplied endpoint.
		</p>
	</header>

	<main>
		<!-- Installation Guide -->
		<section>
			<fieldset>
				<legend>Installation</legend>
				<h2>Installation</h2>
				<section class="content-section">
					<p>Import the component in the script section of your Svelte file:</p>
					<pre><code class="code-block">
            import NavBar from 'svve11/NavBar.svelte'
          </code></pre>
				</section>
			</fieldset>
		</section>
		<!-- Usage Guide -->
		<section class="main-section">
			<fieldset>
				<legend>Usage</legend>
				<h2>Usage</h2>
				<section class="content-section">
					<h3>Creating a Nav Bar</h3>
					<p>
						A nav bar instance can be created by placing the code below in the body of your Svelte
						file.
					</p>
					<pre><code class="code-block">
            {'<NavBar {options} />'}
            </code></pre>
					<p>
						To supply the nav bar with its contents, an options object is passed as a prop to the
						nav bar. This object can be created in the script section of the .svelte file or
						imported in from another location. The options object has 6 properties.
					</p>
					<ul class="options-object-list">
						<li>
							id (string): This property is <span class="bold-word">required</span>. This will be
							the id attribute you reference for styling inside your navbar component.
						</li>
						<li>
							contentInfo (array): This property is <span class="bold-word">required</span>. This
							will set the main content in your nav bar. This array contains a series of objects
							that should be defined as follows:
						</li>
						<ul>
							<li>
								options (array): This property is <span class="bold-word">required</span>. The array
								contains a series of strings, and the order of the strings will determine the order
								they appear in the nav bar section. This will define the text labeling a given nav
								landmark.
							</li>
							<li>
								links (array): This property is <span class="bold-word">required</span>. The array
								contains a series of strings, and the order of the strings should mimic that of the
								options array above. These strings will set the href attribute of the anchor tag
								that enable navigation.
							</li>
							<li>
								subheading (string): This property is <span class="bold-word">optional</span>. This
								will set the subheading for a section of the nav bar.
							</li>
						</ul>
						<li>
							header (string): This property is <span class="bold-word">optional</span>. This will
							set the heading for the entire nav bar.
						</li>
						<li>
							imgSrc (string): This property is <span class="bold-word">optional</span>. This will
							set the file path for an image you want to include at the top of the menu.
						</li>
						<li>
							imgClass (string): This property is <span class="bold-word">optional</span>. This will
							set the class for the image included with the imgSrc attribute.
						</li>
						<li>
							imgAlt (string): This property is <span class="bold-word">optional</span>. This will
							set the alternate text for the image included with the imgSrc attribute.
						</li>
					</ul>
					<h4>Example Options Object:</h4>
					<pre><code class="code-block example-code">
            {`options = {
                id: 'nav-bar',
                header: 'Menu',
                contentInfo: [
                    {
                        subheading: '',
                        options: ['Home', 'Github'],
                        links: ['/', 'https://github.com/oslabs-beta/svve11']
                    },
                    {
                        subheading: 'Library Components:',
                        options: [
                            'Accordion',
                            'Button',
                            'Checkbox',
                            'Meter',
                            'Nav Bar',
                            'Radio Button',
                            'Text Input'
                        ],
                        links: [
                            '/pages/accordion',
                            '/pages/button',
                            '/pages/checkbox',
                            '/pages/meter',
                            '/pages/navbar',
                            '/pages/radiobutton',
                            '/pages/textinput'
                        ]
                    },
                    {
                        subheading: '',
                        options: ['About the team'],
                        links: ['/about']
                    }
                ],
                imgSrc: logo,
                imgClass: 'svvell-logo',
                imgAlt: 'svve11'
            };`}
			</code></pre>
					<p>
						Styles can be applied to different parts of the NavBar in your CSS stylesheet by
						referencing the appropriate id and class names.
					</p>
					<p>
						As an example, the nav bar for this webpage is made using this component and the options
						object above was used to create it.
					</p>
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
	.options-object-list {
		line-height: 1.3;
	}
</style>
