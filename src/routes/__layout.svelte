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
