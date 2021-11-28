<script lang="ts">
	import { fade } from 'svelte/transition';
	export let open;
</script>

<nav id="menu" transition:fade={{ duration: 150 }}>
	<div class="inner">
		<ul class="links" on:click={() => (open = false)}>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/landing">Landing</a>
			</li>
			<li>
				<a href="/generic">Generic</a>
			</li>
			<li>
				<a href="/elements">Elements</a>
			</li>
		</ul>

		<ul id="actions">
			<li>
				<a class="button primary fit">Get Started</a>
			</li>
			<li>
				<a class="button fit">Log In</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	#menu {
		align-items: center;
		display: flex;
		justify-content: center;
		background: rgba(36, 41, 67, 0.9);
		box-shadow: none;
		height: 100%;
		left: 0;
		overflow: hidden;
		padding: 3em 2em;
		position: fixed;
		top: 0;
		width: 100%;
		backdrop-filter: blur(0.5em);
	}

	.inner {
		max-width: 100%;
		max-height: 100vh;
		overflow: auto;
		text-align: center;
		width: 18em;
	}

	.inner > :first-child {
		margin-top: 2em;
	}

	.inner > :last-child {
		margin-bottom: 3em;
	}

	ul {
		margin: 0 0 1em 0;
		list-style: none;
		padding: 0;
	}

	li {
		padding: 0;
	}

	ul.links > li > a:not(.button) {
		border: 0;
		border-top: solid 1px rgba(212, 212, 255, 0.1);
		display: block;
		font-size: 0.8em;
		font-weight: 600;
		letter-spacing: 0.25em;
		line-height: 4em;
		text-decoration: none;
		text-transform: uppercase;
	}

	ul.links > li:first-child > a:not(.button) {
		border-top: 0 !important;
	}

	#actions li {
		margin-bottom: 1.3rem;
	}
</style>
