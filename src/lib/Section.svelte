<script lang="ts">
	export let title;
	export let image = null;
	export let imagePos: 'left' | 'right' = 'left';
</script>

<section style="flex-direction: {imagePos === 'left' ? 'row' : 'row-reverse'};">
	{#if image}
		<img src={image} />
	{/if}

	<div id="content">
		<header>
			<h2>{title}</h2>
		</header>

		<span>
			<slot />
		</span>

		<ul>
			<li>
				<a href="landing" class="button next"> Get Started </a>
			</li>
		</ul>
	</div>
</section>

<style>
	section {
		display: flex;
	}

	#content {
		padding: 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	img {
		object-fit: cover;
	}

	h2 {
		margin: 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		padding: 0;
	}
</style>
