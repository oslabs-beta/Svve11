<script lang="ts">
	import GitHub from '../images/GitHub-logo.png';
	import LinkedIn from '../images/LinkedIn-logo.png';
	export let name: string = '';
	export let GitHubLink: string = '';
	export let LinkedInLink: string = '';
</script>

<section class="team-member">
	<slot />
	<h2>{name}</h2>
	<h3>Software Engineer</h3>
	<section class="team-member-info">
		<a href={GitHubLink}>
			<img src={GitHub} alt="GitHub Logo" class="github-logo" />
		</a>
		<a href={LinkedInLink}>
			<img src={LinkedIn} alt="LinkedIn Logo" class="linkedin-logo" />
		</a>
		<!-- {GitHubLink} -->
	</section>
</section>

<style lang="scss">
	@import '../stylesheets/variables';
	* {
		color: $blue;
	}

	.team-member {
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			font-size: 30px;
			margin-top: 20px;
		}

		.team-member-info {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 75px;
			a {
				img {
					padding: 10px;
				}
				.linkedin-logo {
					width: 45%;
				}
			}
		}
	}
</style>
