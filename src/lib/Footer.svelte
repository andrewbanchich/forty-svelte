<script>
	import GitHubIcon from './icons/GitHubIcon.svelte';
	import LinkedInIcon from './icons/LinkedInIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';
</script>

<footer id="footer">
	<div id="social-media">
		<TwitterIcon />
		<GitHubIcon />
		<LinkedInIcon />
	</div>

	<ul class="copyright">
		<li>&copy; Untitled</li>
		<li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
	</ul>
</footer>

<style>
	footer {
		padding: 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	#social-media {
		display: flex;
		gap: 1rem;
	}

	.copyright {
		font-size: 0.8em;
		list-style: none;
		padding-left: 0;
	}

	.copyright li {
		border-left: solid 1px rgba(212, 212, 255, 0.1);
		color: rgba(244, 244, 255, 0.2);
		display: inline-block;
		line-height: 1;
		margin-left: 1em;
		padding-left: 1em;
	}

	.copyright li:first-child {
		border-left: 0;
		margin-left: 0;
		padding-left: 0;
	}

	a {
		text-decoration: none;
	}
</style>
