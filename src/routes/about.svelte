<script lang="ts">
	import AboutInfo from '../components/about-info.svelte';
	import logo from '../images/svve11-logo-white-transparent-cropped.png';
	import Tim from '../images/timFancy.png';
	import Simon from '../images/simonFancy.png';
	import Nurbek from '../images/bekFancy.png';
	import Paul from '../images/paulFancy.png';
</script>

<article id="about" class="page-component">
	<header>
		<h1 style="font-family: 'Lobster', cursive;">
			It's a <img id="splash-logo" src={logo} alt="svve11 logo" /> day!
		</h1>

		<p>
			Hello! We are team Svve11. We are so excited you are joining us in making the web a more
			accessible place! If you would like to connect with us, feel free to click on the GitHub logo
			or the LinkedIn logo below our names to be redirected to the appropriate webpage.
		</p>
	</header>

	<body id="team-display">
		<AboutInfo
			GitHubLink="https://github.com/tbarry16"
			LinkedInLink="https://www.linkedin.com/in/timothy-barry-se/"
			name="Timothy Barry"
		>
			<img id="tim-image" class="team-image" src={Tim} alt="Timothy Barry" />
		</AboutInfo>
		<AboutInfo
			GitHubLink="https://github.com/LeeSimonH"
			LinkedInLink="https://www.linkedin.com/in/simonhlee/"
			name="Simon Lee"
		>
			<img id="simon-image" class="team-image" src={Simon} alt="Simon Lee" />
		</AboutInfo>
		<AboutInfo
			GitHubLink="https://github.com/iamNurbek"
			LinkedInLink="https://www.linkedin.com/in/iamnurbek/"
			name="Nurbek Jouraboev"
		>
			<img id="nurbek-image" class="team-image" src={Nurbek} alt="Nurbek Jouraboev" />
		</AboutInfo>
		<AboutInfo
			GitHubLink="https://github.com/swierkopa"
			LinkedInLink="https://www.linkedin.com/in/paulswierkosz/"
			name="Paul Swierkosz"
		>
			<img id="paul-image" class="team-image" src={Paul} alt="Paul Swierkosz" />
		</AboutInfo>
	</body>
</article>

<style lang="scss">
	@import '../stylesheets/variables';

// regular styles
	#about {
		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 2rem;
			#splash-logo {
				display: inline-block;
				height: 7rem;
			}
			h1 {
				color: $white;
				margin-bottom: 0;
				font-size: 8rem;
			}
			p {
				font-size: 1.5rem;
				font-style: italic;
				font-weight: 400;
				width: 80%;
				// padding-left: 0;
				margin-top: 2rem;
				margin-bottom: 3rem;
				color: $white;
			}
		}
		#team-display {
			display: flex;
			justify-content: space-between;
			gap: 1em;
			max-width: 90%;

			.team-image {
				height: 15vw;
				width: auto;
				border-radius: 100%;
				// margin-top: 80px;
			}
		}
	}

// mobile styles
	@media screen and (max-width: 884px) {
		#about {
			header {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				h1 {
					font-size: 40px;
				}
				#splash-logo {
					height: .85em;
				}
				p {
					font-size: 1.1rem;
					// width: 80%;
				}
			}

			#team-display {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;

				.team-image {
					margin-top: 0;
					height: 200px;
					width: 200px;
				}
			}
		}
	}
</style>
