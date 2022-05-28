<script lang="ts">
	import '../app.css';
	// import Navbar from './components/Navbar.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import logo from '../images/svvell-logo-yellow.png';

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
	};
</script>

<section class="main-container">
	<section id="nav-container">
		<!-- <Navbar /> -->
		<NavBar options={navOptions} />
	</section>

	<slot />
</section>

<style>
</style>
