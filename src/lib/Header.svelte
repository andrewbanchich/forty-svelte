<script>
	import { base } from '$app/paths';

	export let menuOpen = false;
</script>

<header id="header">
	<a href={base} id="logo">
		<strong>Forty</strong>
		<span>by HTML5 UP</span>
	</a>

	<nav id="menu" on:click={() => (menuOpen = !menuOpen)}>Menu</nav>
</header>

<style>
	#header {
		display: flex;
		justify-content: space-between;
		background-color: #2a2f4a;
		box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
		cursor: default;
		font-weight: 600;
		height: 3.25em;
		left: 0;
		letter-spacing: 0.25em;
		line-height: 3.25em;
		margin: 0;
		position: fixed;
		text-transform: uppercase;
		top: 0;
		width: 100%;
		z-index: 2;
	}

	#logo {
		border: 0;
		display: inline-block;
		font-size: 0.8em;
		height: inherit;
		line-height: inherit;
		padding: 0 1.5em;
	}

	#logo strong {
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: #ffffff;
		color: #242943;
		display: inline-block;
		line-height: 1.65em;
		margin-right: 0.325em;
		padding: 0 0.125em 0 0.375em;
	}

	#logo:hover strong {
		background-color: #9bf1ff;
	}

	#logo:active strong {
		background-color: #53e3fb;
	}

	#menu {
		border: 0;
		display: block;
		font-size: 0.8em;
		height: inherit;
		line-height: inherit;
		padding: 0 0.75em;
		position: relative;
		padding-right: 3.325em !important;
		cursor: pointer;
	}

	#menu:hover {
		color: #9bf1ff;
	}

	#menu:last-child {
		padding-right: 1.5em;
	}

	#menu:before,
	#menu:after {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 24px 32px;
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		right: 1.5em;
		top: 0;
		width: 24px;
	}

	#menu:after {
		transition: opacity 0.2s ease-in-out;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
		opacity: 0;
	}

	#menu:hover:after,
	#menu:active:after {
		opacity: 1;
	}

	#menu:last-child {
		padding-right: 3.875em !important;
	}

	#menu:last-child:before,
	#menu:last-child:after {
		right: 2em;
	}

	#header.alt.style1 #logo strong {
		color: #6fc3df;
	}

	#header.alt.style2 #logo strong {
		color: #8d82c4;
	}

	#header.alt.style3 #logo strong {
		color: #ec8d81;
	}

	#header.alt.style4 #logo strong {
		color: #e7b788;
	}

	#header.alt.style5 #logo strong {
		color: #8ea9e8;
	}

	#header.alt.style6 #logo strong {
		color: #87c5a4;
	}

	@media screen and (max-width: 1680px) {
		#menu {
			padding-right: 3.75em !important;
		}

		#menu:last-child {
			padding-right: 4.25em !important;
		}
	}

	@media screen and (max-width: 1280px) {
		#menu {
			padding-right: 4em !important;
		}

		#menu:last-child {
			padding-right: 4.5em !important;
		}
	}

	@media screen and (max-width: 736px) {
		#header {
			height: 2.75em;
			line-height: 2.75em;
		}

		#logo {
			padding: 0 1em;
		}

		#menu {
			padding: 0 0.5em;
			padding-right: 3.25em !important;
		}

		#menu:last-child {
			padding-right: 1em;
		}

		#menu:before,
		#menu:after {
			right: 0.75em;
		}

		#menu:last-child {
			padding-right: 4em !important;
		}

		#menu:last-child:before,
		#menu:last-child:after {
			right: 1.5em;
		}
	}

	@media screen and (max-width: 480px) {
		#logo span {
			display: none;
		}

		#menu {
			overflow: hidden;
			padding-right: 0 !important;
			text-indent: 5em;
			white-space: nowrap;
			width: 5em;
		}

		#menu:before,
		#menu:after {
			right: 0;
			width: inherit;
		}

		#menu:last-child:before,
		#menu:last-child:after {
			width: 4em;
			right: 0;
		}
	}
</style>
