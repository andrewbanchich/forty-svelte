<script>
	import { assets } from '$app/paths';

	export let color = '#242943';
	export let image;
	export let major = false;
</script>

<section id="banner" class:major style="background-image: url('{assets}{image}');">
	<div class="inner">
		<header class="major">
			<h1><slot name="header" /></h1>
		</header>

		<div id="content">
			<slot />
		</div>
	</div>
</section>

<style>
	#banner {
		display: flex;
		align-items: center;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 60vh;
	}

	.inner {
		background-color: hsl(231, 28%, 23%, 85%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem;
	}

	#content {
		font-size: 0.7em;
		font-weight: 600;
		letter-spacing: 0.25em;
		text-transform: uppercase;
	}

	#banner h1 {
		font-size: 3.25em;
	}

	.inner {
		height: 100%;
		width: 100%;
	}

	.inner header {
		width: auto;
	}

	.inner header > :first-child {
		width: auto;
	}

	.inner header > :first-child:after {
		max-width: 100%;
	}

	#banner.major {
		height: 75vh;
		min-height: 30em;
		max-height: 50em;
	}

	@media screen and (max-width: 1280px) {
		#banner {
			background-attachment: scroll;
		}
	}

	@media screen and (max-width: 736px) {
		#banner {
			padding: 5em 0 1em 0;
			height: auto;
			margin-bottom: -2.75em;
			max-height: none;
			min-height: 0;
			top: -2.75em;
		}

		#banner h1 {
			font-size: 2em;
		}

		#content {
			display: block;
		}

		.major {
			height: auto;
			min-height: 0;
			max-height: none;
		}
	}

	@media screen and (max-width: 480px) {
		#banner {
			padding: 6em 0 2em 0;
		}

		#content p br {
			display: none;
		}

		#banner.major {
			padding: 8em 0 4em 0;
		}
	}
</style>
