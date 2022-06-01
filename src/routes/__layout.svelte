<script lang="ts">
	import '../app.scss';
	import NavBarWebsite from '../components/NavBar-website.svelte';
	import logo from '../images/svve11-logo-white-transparent-cropped.png';

	const navOptions = {
		id: 'nav-bar',
		// header: 'Menu',
		contentInfo: [
			{
				subheading: '',
				options: ['Home', 'Github'],
				links: ['/', 'https://github.com/oslabs-beta/svve11']
			},
			{
				subheading: 'Components',
				options: [
					'Accordion',
					'Button',
					'Checkbox',
					'Meter',
					'Nav Bar',
					'Radio Button',
					'Table',
					'Text Input'
				],
				links: [
					'/pages/accordion',
					'/pages/button',
					'/pages/checkbox',
					'/pages/meter',
					'/pages/navbar',
					'/pages/radiobutton',
					'/pages/table',
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
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lobster&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="main-container">
	<!-- <section id="nav-container">
		<NavBar options={navOptions} />
	</section> -->

	<NavBarWebsite options={navOptions} />
	<slot />
</section>

<style lang="scss">
</style>
