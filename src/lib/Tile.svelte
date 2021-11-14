<script>
	export let title;
	export let description;
	export let image;
	export let width;
	export let color;
</script>

<article style="background-image: url('{image}'); width: {width};">
	<div id="color" style="background-color: {color};" />
	<header class="major">
		<h3><a href="landing" class="link">{title}</a></h3>
		<p>{description}</p>
	</header>
</article>

<style>
	article {
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-transition: -moz-transform 0.25s ease, opacity 0.25s ease, -moz-filter 1s ease,
			-webkit-filter 1s ease;
		-webkit-transition: -webkit-transform 0.25s ease, opacity 0.25s ease, -webkit-filter 1s ease,
			-webkit-filter 1s ease;
		-ms-transition: -ms-transform 0.25s ease, opacity 0.25s ease, -ms-filter 1s ease,
			-webkit-filter 1s ease;
		transition: transform 0.25s ease, opacity 0.25s ease, filter 1s ease, -webkit-filter 1s ease;
		padding: 4em 4em 2em 4em;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		cursor: default;
		height: 40vh;
		max-height: 40em;
		min-height: 23em;
		overflow: hidden;
		position: relative;
		width: 40%;
	}

	* {
		border-top: 0 !important;
	}

	@media screen and (max-width: 1280px) {
		article {
			padding: 4em 3em 2em 3em;
			height: 30vh;
			max-height: 30em;
			min-height: 20em;
		}
	}

	@media screen and (max-width: 980px) {
		article {
			width: 50% !important;
		}
	}

	@media screen and (max-width: 736px) {
		article {
			padding: 3em 1.5em 1em 1.5em;
			height: 16em;
			max-height: none;
			min-height: 0;
		}

		article h3 {
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 480px) {
		article {
			height: 20em;
			width: 100% !important;
		}
	}

	article header {
		position: relative;
		z-index: 3;
	}

	article h3 {
		font-size: 1.75em;
	}

	article h3 a:hover {
		color: inherit !important;
	}

	article .link.primary {
		border: 0;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 4;
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

	article.is-transitioning {
		-moz-transform: scale(0.95);
		-webkit-transform: scale(0.95);
		-ms-transform: scale(0.95);
		transform: scale(0.95);
		-moz-filter: blur(0.5em);
		-webkit-filter: blur(0.5em);
		-ms-filter: blur(0.5em);
		filter: blur(0.5em);
		opacity: 0;
	}
</style>
