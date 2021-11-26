<script lang="ts">
	import Tile from '$lib/Tile.svelte';

	const articles = [
		{ title: 'Aliquam', description: 'Ipsum dolor sit amet', image: '/images/pic01.jpg' },
		{ title: 'Tempus', description: 'Feugiat amet tempus', image: '/images/pic02.jpg' },
		{ title: 'Magna', description: 'Lorem etiam nullam', image: '/images/pic03.jpg' },
		{ title: 'Ipsum', description: 'Nisl sed aliquam', image: '/images/pic04.jpg' },
		{ title: 'Consequat', description: 'Ipsum dolor sit amet', image: '/images/pic05.jpg' },
		{ title: 'Etiam', description: 'Feugiat amet tempus', image: '/images/pic06.jpg' }
	];

	const width = (i: number) => (i % 4 === 0 || i % 4 === 3 ? '40%' : '60%');

	const color = (i: number) =>
		i % 6 === 0
			? '#6fc3df'
			: i % 6 === 1
			? '#8d82c4'
			: i % 6 === 2
			? '#ec8d81'
			: i % 6 === 3
			? '#e7b788'
			: i % 6 === 4
			? '#8ea9e8'
			: '#87c5a4';
</script>

<section id="tiles">
	{#each articles as article, i}
		<Tile
			width="100%"
			title={article.title}
			color="{color(i)}aa"
			description={article.description}
			image={article.image}
		/>
	{/each}
</section>

<style>
	#tiles {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	@media (max-width: 540px) {
		#tiles {
			grid-template-columns: 1fr;
		}
	}
</style>
