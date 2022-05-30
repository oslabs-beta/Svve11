<script lang="ts">
	import AboutInfo from '../components/about-info.svelte';
	import logo from '../images/svve11-logo-blue-transparent-cropped.png';
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

	#about {
		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
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
		#team-display {
			display: flex;
			justify-content: space-between;

			* {
				color: $blue;
			}

			.team-images {
				display: flex;
				justify-content: space-between;
			}

			.team-image {
				height: 275px;
				width: 275px;
				border-radius: 100%;
				margin-top: 80px;
			}

			.team-names {
				display: flex;
				justify-content: space-between;
				margin: 0 20px;
				p {
					font-size: 2rem;
				}
			}
		}
	}
</style>
