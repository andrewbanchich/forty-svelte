<script>
	import { assets } from '$app/paths';

	export let title;
	export let description;
	export let image;
	export let width;
	export let color;
</script>

<article style="background-image: url('{assets}{image}'); width: {width};">
	<a href="landing">
		<header class="major">
			<h3>{title}</h3>
			<p>{description}</p>
		</header>
		<div id="color" style="background-color: {color};" />
	</a>
</article>

<style>
	article {
		align-items: center;
		display: flex;
		transition: transform 0.25s ease, opacity 0.25s ease, filter 1s ease, -webkit-filter 1s ease;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 40vh;
		max-height: 40em;
		min-height: 23em;
		overflow: hidden;
		position: relative;
		width: 40%;
		padding: 4em 3em 2em 3em;
	}

	article:nth-child(4n-1),
	article:nth-child(4n-2) {
		grid-column: span 3;
	}

	article:nth-child(4n),
	article:nth-child(4n-3) {
		grid-column: span 2;
	}

	/* @media screen and (max-width: 980px) {
		article {
		width: 50% !important;
		}
		}

		@media screen and (max-width: 480px) {
		article {
		width: 100% !important;
		}
		} */

	header {
		position: relative;
		z-index: 3;
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
	}

	article #color {
		-moz-transition: opacity 0.5s ease;
		-webkit-transition: opacity 0.5s ease;
		-ms-transition: opacity 0.5s ease;
		transition: opacity 0.5s ease;
		bottom: 0;
		content: '';
		display: block;
		height: 100%;
		left: 0;
		opacity: 0.85;
		position: absolute;
		width: 100%;
		z-index: 2;
	}

	article:after {
		background-color: rgba(36, 41, 67, 0.25);
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}

	article:hover #color {
		opacity: 0;
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
