<script lang="ts">
	// export let id: string = "";
	import logo from '../../images/svvell-logo-yellow.png';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" rel="stylesheet" />
</svelte:head>

<section class="nav-section">
	<nav id="navbard">
		<div id="logo-container">
			<img src={logo} alt="Svvell" id="logo-image" />
		</div>
		<ul id="head">
			<li><a class="nav-list-item" href="/">Home</a></li>
			<li>
				<a class="nav-list-item" href="https://github.com/oslabs-beta/svve11" target="_blank"
					>GitHub</a
				>
			</li>
			<!-- <li><a href="#">Blog</a></li> -->
			<!-- <li><a href="#">Svelte Community</a></li> -->
		</ul>
		<hr aria-hidden="true" class="border" />
		<label for="component-list" class="nav-label">Library Components:</label>
		<ul id="component-list">
			<li><a class="nav-list-item" href="/pages/accordion">Accordion</a></li>
			<li><a class="nav-list-item" href="/pages/button">Button</a></li>
			<li><a class="nav-list-item" href="/pages/checkbox">Checkbox</a></li>
			<li><a class="nav-list-item" href="/pages/textinput">Text Input</a></li>
		</ul>
		<hr aria-hidden="true" class="border" />
		<ul class="miscellaneous-nav-list">
			<li><a class="nav-list-item" href="about">About the team</a></li>
			<li><a class="nav-list-item" href="/">Blog</a></li>
		</ul>
	</nav>
</section>

<style>
	@media screen and (max-width: 667px) {
		.nav-list-item {
			font-size: 8px;
		}

		ul li::before {
			font-size: 8px;
		}

		.nav-label {
			font-size: 8px;
		}
	}

	@media screen and (min-width: 667) {
		.nav-list-item {
			font-size: 12px;
		}

		ul li::before {
			font-size: 12px;
		}

		.nav-label {
			font-size: 20px;
		}
	}

	/* @media screen and (min-width: 1200px) {
    .nav-list-item {
      font-size: 12px;
    }
  } */

	.nav-label {
		color: white;
		margin-bottom: 10px;
	}

	.nav-section {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	#logo-image {
		width: 100%;
		height: auto;
	}

	#logo-container {
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}

	nav {
		height: 100%;
		margin: 0;
		background-color: #eb1646;
		padding: 20px 5px;
		gap: 0.5em;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul li::before {
		color: white;
		content: '\2014    ';
	}

	li a {
		text-decoration: none;
		color: white;
		/* font-size: 20px; */
		font-weight: 300;
	}

	hr {
		display: block;
		unicode-bidi: isolate;
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
		margin-inline-start: auto;
		margin-inline-end: auto;
		box-sizing: content-box;
		height: 0;
		border: none;
		border-top: 1px solid #e1e1e1;
		margin: 3rem 0;
		opacity: 1;
	}
</style>
