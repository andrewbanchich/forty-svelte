<script lang="ts">
	export let open;
</script>

<nav id="menu">
	<div class="inner">
		<ul class="links">
			<li><a href="/">Home</a></li>
			<li><a href="/landing">Landing</a></li>
			<li><a href="/generic">Generic</a></li>
			<li><a href="/elements">Elements</a></li>
		</ul>

		<ul class="actions stacked">
			<li><a href="#" class="button primary fit">Get Started</a></li>
			<li><a href="#" class="button fit">Log In</a></li>
		</ul>
	</div>
</nav>

<style>
	#menu {
		transition: transform 0.35s ease, opacity 0.35s ease, visibility 0.35s;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		justify-content: center;
		pointer-events: none;
		background: rgba(36, 41, 67, 0.9);
		box-shadow: none;
		height: 100%;
		left: 0;
		/* opacity: 0; */
		overflow: hidden;
		padding: 3em 2em;
		position: fixed;
		top: 0;
		/* visibility: hidden; */
		width: 100%;
		/* z-index: 3; */
	}

	#menu .inner {
		-moz-transition: -moz-transform 0.35s ease-out, opacity 0.35s ease, visibility 0.35s;
		-webkit-transition: -webkit-transform 0.35s ease-out, opacity 0.35s ease, visibility 0.35s;
		-ms-transition: -ms-transform 0.35s ease-out, opacity 0.35s ease, visibility 0.35s;
		transition: transform 0.35s ease-out, opacity 0.35s ease, visibility 0.35s;
		-moz-transform: rotateX(20deg);
		-webkit-transform: rotateX(20deg);
		-ms-transform: rotateX(20deg);
		transform: rotateX(20deg);
		-webkit-overflow-scrolling: touch;
		max-width: 100%;
		max-height: 100vh;
		/* opacity: 0; */
		overflow: auto;
		text-align: center;
		/* visibility: hidden; */
		width: 18em;
	}

	#menu .inner > :first-child {
		margin-top: 2em;
	}

	#menu .inner > :last-child {
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

	#menu ul.links > li > a:not(.button) {
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

	#menu ul.links > li > .button {
		display: block;
		margin: 0.5em 0 0 0;
	}

	#menu ul.links > li:first-child > a:not(.button) {
		border-top: 0 !important;
	}

	#menu {
		pointer-events: auto;
		opacity: 1;
		visibility: visible;
	}

	#menu .inner {
		-moz-transform: none;
		-webkit-transform: none;
		-ms-transform: none;
		transform: none;
		opacity: 1;
		visibility: visible;
	}
</style>
