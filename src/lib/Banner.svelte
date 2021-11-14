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

	<div id="color" style="background-color: {color};" />
</section>

<style>
	#banner {
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		padding: 6em 0 2em 0;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-bottom: 0 !important;
		cursor: default;
		height: 60vh;
		margin-bottom: -3.25em;
		max-height: 32em;
		min-height: 22em;
		position: relative;
		top: -3.25em;
	}

	#content {
		font-size: 0.7em;
		font-weight: 600;
		letter-spacing: 0.25em;
		text-transform: uppercase;
	}

	#color {
		-moz-transition: opacity 2.5s ease;
		-webkit-transition: opacity 2.5s ease;
		-ms-transition: opacity 2.5s ease;
		transition: opacity 2.5s ease;
		-moz-transition-delay: 0.75s;
		-webkit-transition-delay: 0.75s;
		-ms-transition-delay: 0.75s;
		transition-delay: 0.75s;
		pointer-events: none;
		content: '';
		display: block;
		height: 100%;
		left: 0;
		opacity: 0.85;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}

	#banner h1 {
		font-size: 3.25em;
	}

	#banner > .inner {
		-moz-transition: opacity 1.5s ease, -moz-transform 0.5s ease-out, -moz-filter 0.5s ease,
			-webkit-filter 0.5s ease;
		-webkit-transition: opacity 1.5s ease, -webkit-transform 0.5s ease-out, -webkit-filter 0.5s ease,
			-webkit-filter 0.5s ease;
		-ms-transition: opacity 1.5s ease, -ms-transform 0.5s ease-out, -ms-filter 0.5s ease,
			-webkit-filter 0.5s ease;
		transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease,
			-webkit-filter 0.5s ease;
		padding: 0 !important;
		position: relative;
		z-index: 2;
	}

	#banner > .inner .image {
		display: none;
	}

	#banner > .inner header {
		width: auto;
	}

	#banner > .inner header > :first-child {
		width: auto;
	}

	#banner > .inner header > :first-child:after {
		max-width: 100%;
	}

	#banner.major {
		height: 75vh;
		min-height: 30em;
		max-height: 50em;
	}

	#banner.major.alt {
		opacity: 0.75;
	}

	#banner.style1:after {
		background-color: #6fc3df;
	}

	#banner.style3:after {
		background-color: #ec8d81;
	}

	#banner.style4:after {
		background-color: #e7b788;
	}

	#banner.style5:after {
		background-color: #8ea9e8;
	}

	#banner.style6:after {
		background-color: #87c5a4;
	}

	/* 
		body.is-preload #banner:after {
		opacity: 1;
		}
	*/

	body.is-preload #banner > .inner {
		-moz-filter: blur(0.125em);
		-webkit-filter: blur(0.125em);
		-ms-filter: blur(0.125em);
		filter: blur(0.125em);
		-moz-transform: translateX(-0.5em);
		-webkit-transform: translateX(-0.5em);
		-ms-transform: translateX(-0.5em);
		transform: translateX(-0.5em);
		opacity: 0;
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
