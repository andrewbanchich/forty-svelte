<script>
	import Banner from '$lib/Banner.svelte';
	import Button from '$lib/Button.svelte';
	import Tiles from '$lib/Tiles.svelte';
	import WideSection from '$lib/WideSection.svelte';
</script>

<Banner image="/images/banner.jpg" height="75vh">
	<span slot="header">
		Hi, my name is Forty
		<hr />
	</span>

	<div id="content">
		<p>
			A responsive site template designed by HTML5 UP<br />
			and released under the Creative Commons.
		</p>

		<Button text="Get Started" href="#one">
			<svg slot="icon" viewBox="0 0 20 20" width="24px" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</Button>
	</div>
</Banner>

<div id="main">
	<Tiles />
	<WideSection />
</div>

<style>
	#content {
		display: flex;
		align-items: center;
		margin: 0 0 2em 0;
		gap: 1.5rem;
	}

	hr {
		margin-top: 1rem;
		margin-bottom: 1rem;
		background-color: #fff;
		height: 5px;
	}
</style>
