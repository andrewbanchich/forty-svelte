<script>
	import Tile from '$lib/Tile.svelte';
</script>

<section id="one" class="tiles">
	<Tile width="40%" title="Aliquam" description="Ipsum dolor sit amet" image="/images/pic01.jpg" />
	<Tile width="60%" title="Tempus" description="feugiat amet tempus" image="/images/pic02.jpg" />
	<Tile width="60%" title="Magna" description="Lorem etiam nullam" image="/images/pic03.jpg" />
	<Tile width="40%" title="Ipsum" description="Nisl sed aliquam" image="/images/pic04.jpg" />
	<Tile
		width="40%"
		title="Consequat"
		description="Ipsum dolor sit amet"
		image="/images/pic05.jpg"
	/>
	<Tile width="60%" title="Etiam" description="Feugiat amet tempus" image="/images/pic06.jpg" />
</section>

<style>
	.tiles {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		border-top: 0 !important;
	}

	.tiles article:nth-child(6n - 5):before {
		background-color: #6fc3df;
	}

	.tiles article:nth-child(6n - 4):before {
		background-color: #8d82c4;
	}

	.tiles article:nth-child(6n - 3):before {
		background-color: #ec8d81;
	}

	.tiles article:nth-child(6n - 2):before {
		background-color: #e7b788;
	}

	.tiles article:nth-child(6n - 1):before {
		background-color: #8ea9e8;
	}

	.tiles article:nth-child(6n):before {
		background-color: #87c5a4;
	}

	@media screen and (max-width: 1280px) {
		.tiles article {
			padding: 4em 3em 2em 3em;
			height: 30vh;
			max-height: 30em;
			min-height: 20em;
		}
	}

	@media screen and (max-width: 980px) {
		.tiles article {
			width: 50% !important;
		}
	}

	@media screen and (max-width: 736px) {
		.tiles article {
			padding: 3em 1.5em 1em 1.5em;
			height: 16em;
			max-height: none;
			min-height: 0;
		}

		.tiles article h3 {
			font-size: 1.5em;
		}
	}

	@media screen and (max-width: 480px) {
		.tiles {
			display: block;
		}

		.tiles article {
			height: 20em;
			width: 100% !important;
		}
	}
</style>
