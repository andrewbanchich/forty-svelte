<script>
	import Banner from '$lib/Banner.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Banner color="hsl(250, 36%, 64%, 85%)" image="/images/pic07.jpg">
	<span slot="header">Landing</span>

	<p>
		Lorem ipsum dolor sit amet nullam consequat<br />
		sed veroeros. tempus adipiscing nulla.
	</p>
</Banner>

<div id="main">
	<Section title="Sed amet aliquam">
		Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
		condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem
		ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et
		orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In
		efficitur ligula tate urna.
	</Section>

	<Section title="Orci maecenas" image="images/pic08.jpg">
		Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
		condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna
		pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
		tempus.
	</Section>

	<Section title="Rhoncus magna" image="images/pic09.jpg" imagePos="right">
		Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
		condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna
		pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
		tempus.
	</Section>

	<Section title="Sed nunc ligula" image="images/pic10.jpg">
		Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus
		condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna
		pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
		tempus.
	</Section>

	<Section title="Massa libero">
		Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna
		magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna.
		Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem
		consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
		amet pharetra et feugiat tempus.
	</Section>
</div>
