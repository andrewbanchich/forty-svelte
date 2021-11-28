<script>
	import { assets, base } from '$app/paths';
	import { fade } from 'svelte/transition';

	export let title;
	export let description;
	export let image;
	export let width;
	export let color;
</script>

<article
	style="background-image: url('{assets}{image}'); width: {width};"
	out:fade={{ duration: 400 }}
>
	<a href="{base}/landing" style="background-color: {color};">
		<header class="major">
			<h3>{title}</h3>
			<p>{description}</p>
		</header>
	</a>
</article>

<style>
	article {
		align-items: center;
		display: flex;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 40vh;
		max-height: 40em;
		min-height: 23em;
		overflow: hidden;
		position: relative;
		width: 40%;
	}

	article:nth-child(4n-1),
	article:nth-child(4n-2) {
		grid-column: span 3;
	}

	article:nth-child(4n),
	article:nth-child(4n-3) {
		grid-column: span 2;
	}

	header {
		position: relative;
	}

	article h3 {
		font-size: 1.75em;
	}

	a {
		display: flex;
		align-items: center;
		border: 0;
		height: 100%;
		width: 100%;
		padding: 4em 3em 2em 3em;
		transition: background-color ease 250ms;
		color: #fff;
	}

	a:hover {
		background-color: transparent !important;
	}

	header.major {
		width: max-content;
		margin-bottom: 2em;
	}

	header.major > :first-child:after {
		content: '';
		background-color: #ffffff;
		display: block;
		height: 2px;
		margin: 0.325em 0 0.5em 0;
		width: 100%;
	}

	header.major > p {
		font-size: 0.7em;
		font-weight: 600;
		letter-spacing: 0.25em;
		margin-bottom: 0;
		text-transform: uppercase;
	}
</style>
