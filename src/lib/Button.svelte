<script>
	import { goto } from '$app/navigation';
	export let href;
	export let text;

	const go = (url) => {
		if (href) goto(href);
	};
</script>

<button on:click={go}>
	{text}
	<slot name="icon" />
</button>

<style>
	button {
		display: flex;
		gap: 1rem;
		padding: 0.4rem 1rem;
		width: auto;
		height: auto;
	}
</style>
