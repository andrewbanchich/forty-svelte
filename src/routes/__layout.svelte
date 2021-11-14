<script>
	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div id="wrapper">
	<Header />
	<Menu />

	<slot />

	<Contact />
	<Footer />
</div>

<style>
	#wrapper {
		-moz-transition: -moz-filter 0.35s ease, -webkit-filter 0.35s ease, opacity 0.375s ease-out;
		-webkit-transition: -webkit-filter 0.35s ease, -webkit-filter 0.35s ease,
			opacity 0.375s ease-out;
		-ms-transition: -ms-filter 0.35s ease, -webkit-filter 0.35s ease, opacity 0.375s ease-out;
		transition: filter 0.35s ease, -webkit-filter 0.35s ease, opacity 0.375s ease-out;
		padding-top: 3.25em;
	}

	#wrapper.is-transitioning {
		opacity: 0;
	}

	:global(#wrapper > * > .inner) {
		padding: 4em 0 2em 0;
		margin: 0 auto;
		max-width: 65em;
		width: calc(100% - 6em);
	}

	@media screen and (max-width: 736px) {
		#wrapper > * > .inner {
			padding: 3em 0 1em 0;
			width: calc(100% - 3em);
		}
	}

	@media screen and (max-width: 736px) {
		#wrapper {
			padding-top: 2.75em;
		}
	}

	body.is-menu-visible #wrapper {
		-moz-filter: blur(0.5em);
		-webkit-filter: blur(0.5em);
		-ms-filter: blur(0.5em);
		filter: blur(0.5em);
	}
</style>
