<script>
	import { assets } from '$app/paths';

	export const color = '#242943';
	export const parallax = false;
	export const major = false;
	export let image;

	let scrollY = 0;
	$: bgPosition = -scrollY / 2;
</script>

<svelte:window bind:scrollY />

<section
	id="banner"
	class:major
	style="background-image: url('{assets}{image}'); background-position: center {bgPosition}px;"
>
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

		background-repeat: no-repeat;
		background-size: cover;
		height: 75vh;
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

	h1 {
		font-size: clamp(3rem, -0.25rem + 5.5556vw, 5rem);
		margin-bottom: 0;
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
</style>
