<script lang="ts">
	import GitHub from '../images/Github-logo-circle-purple.png';
	import LinkedIn from '../images/LinkedIn-logo-circle-purple.png';
	export let name: string = '';
	export let GitHubLink: string = '';
	export let LinkedInLink: string = '';
	
</script>

<section class="team-member">
	<slot />
	<h2 class="name">{name}</h2>
	<h3 class="role">Software Engineer</h3>
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
		color: $color-text-darkest;
	}

	.team-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: .5rem;
		.name {
			font-size: 2rem;
			margin-bottom: 0;
		}
		.role {
			font-size: 1.4rem;
			margin:0;
			margin-bottom: 1rem;
		}
		.team-member-info {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1em;
			a img {
				height: 3em;
			}
		}
	}
	@media screen and (max-width: 884px) {
		.team-member-info {
			a img {
				height: 2em;
			}
		}
	}
</style>
