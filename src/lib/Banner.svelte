<script>
	import { assets } from '$app/paths';
	import { fly } from 'svelte/transition';

	export let color = 'hsl(230, 30%, 20%, 85%)';
	export let parallax = false;
	export let image;
	export let height = '60vh';

	let scrollY = 0;
	$: bgPosition = -scrollY / 2;
</script>

<svelte:window bind:scrollY />

<section
	id="banner"
	style="background-image: url('{assets}{image}'); background-position: center {bgPosition}px; height: {height};"
>
	<div class="inner" style="background-color: {color};">
		<header in:fly={{ x: -20, duration: 500 }}>
			<h1>
				<slot name="header" />
			</h1>
		</header>

		<div id="content" in:fly={{ x: -20, duration: 500 }}>
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
	}

	.inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 3rem;
	}

	#content {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.25em;
		text-transform: uppercase;
	}

	h1 {
		font-size: clamp(3rem, -0.25rem + 5.5556vw, 5rem);
		margin-bottom: 0;
		max-width: 65rem;
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
</style>
