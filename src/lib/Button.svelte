<script lang="ts">
	import { goto } from '$app/navigation';
	export let href = null;
	export let color = '#fff';
	export let fill = false;

	const go = (url) => {
		if (href) goto(href);
	};
</script>

<button on:click={go} class:fill>
	<slot />
	<slot name="icon" />
</button>

<style>
	button {
		display: flex;
		gap: 1rem;
		width: auto;
		height: auto;
		align-items: center;
		appearance: none;
		transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
			color 0.2s ease-in-out;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 600;
		height: 3.5em;
		letter-spacing: 0.25em;
		line-height: 3.5em;
		padding: 0 1.75em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
		color: #ffffff;
		background-color: transparent;
		border: 2px solid #fff;
	}

	.fill {
		color: #000;
		background-color: #ffffff;
	}

	button.fill:hover,
	button.fill:active {
		background-color: #9bf1ff;
		border-color: #9bf1ff;
	}

	button:not(.fill):hover,
	button:not(.fill):active {
		color: #9bf1ff;
		border-color: #9bf1ff;
	}
</style>
