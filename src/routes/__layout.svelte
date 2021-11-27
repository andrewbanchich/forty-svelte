<script context="module" lang="ts">
	// Disable SSR in dev mode since we're using `adapter-static`.
	export const ssr = false;
</script>

<script>
	import { base } from '$app/paths';

	import Header from '$lib/Header.svelte';
	import Menu from '$lib/Menu.svelte';
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';

	let menuOpen = false;
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.png" />
	<link rel="stylesheet" href="{base}/assets/css/main.css" />
</svelte:head>

<div id="wrapper">
	<Header bind:menuOpen />

	<slot />

	<Contact />
	<Footer />

	{#if menuOpen}
		<Menu bind:open={menuOpen} />
	{/if}
</div>

<style>
	#wrapper {
		transition: filter 0.35s ease, -webkit-filter 0.35s ease, opacity 0.375s ease-out;
	}
</style>
