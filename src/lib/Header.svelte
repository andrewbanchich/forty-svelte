<script>
	import { base } from '$app/paths';
</script>

<header id="header">
	<a href="/{base}" class="logo">
		<strong>Forty</strong>
		<span>by HTML5 UP</span>
	</a>
	<nav>
		<a href="#menu">Menu</a>
	</nav>
</header>

<style>
	#header {
		display: flex;
		/* background-color: #2a2f4a; */
		/* box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15); */
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
		z-index: 1000;
	}

	#header .logo {
		border: 0;
		display: inline-block;
		font-size: 0.8em;
		height: inherit;
		line-height: inherit;
		padding: 0 1.5em;
	}

	#header .logo strong {
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: #ffffff;
		color: #242943;
		display: inline-block;
		line-height: 1.65em;
		margin-right: 0.325em;
		padding: 0 0.125em 0 0.375em;
	}

	#header .logo:hover strong {
		background-color: #9bf1ff;
	}

	#header .logo:active strong {
		background-color: #53e3fb;
	}

	#header nav {
		display: flex;
		justify-content: flex-end;
		flex-grow: 1;
		height: inherit;
		line-height: inherit;
	}

	#header nav a {
		border: 0;
		display: block;
		font-size: 0.8em;
		height: inherit;
		line-height: inherit;
		padding: 0 0.75em;
		position: relative;
		vertical-align: middle;
	}

	#header nav a:last-child {
		padding-right: 1.5em;
	}

	#header nav a[href='#menu'] {
		padding-right: 3.325em !important;
	}

	#header nav a[href='#menu']:before,
	#header nav a[href='#menu']:after {
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

	#header nav a[href='#menu']:after {
		transition: opacity 0.2s ease-in-out;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
		opacity: 0;
	}

	#header nav a[href='#menu']:hover:after,
	#header nav a[href='#menu']:active:after {
		opacity: 1;
	}

	#header nav a[href='#menu']:last-child {
		padding-right: 3.875em !important;
	}

	#header nav a[href='#menu']:last-child:before,
	#header nav a[href='#menu']:last-child:after {
		right: 2em;
	}

	#header.alt.style1 .logo strong {
		color: #6fc3df;
	}

	#header.alt.style2 .logo strong {
		color: #8d82c4;
	}

	#header.alt.style3 .logo strong {
		color: #ec8d81;
	}

	#header.alt.style4 .logo strong {
		color: #e7b788;
	}

	#header.alt.style5 .logo strong {
		color: #8ea9e8;
	}

	#header.alt.style6 .logo strong {
		color: #87c5a4;
	}

	@media screen and (max-width: 1680px) {
		#header nav a[href='#menu'] {
			padding-right: 3.75em !important;
		}

		#header nav a[href='#menu']:last-child {
			padding-right: 4.25em !important;
		}
	}

	@media screen and (max-width: 1280px) {
		#header nav a[href='#menu'] {
			padding-right: 4em !important;
		}

		#header nav a[href='#menu']:last-child {
			padding-right: 4.5em !important;
		}
	}

	@media screen and (max-width: 736px) {
		#header {
			height: 2.75em;
			line-height: 2.75em;
		}

		#header .logo {
			padding: 0 1em;
		}

		#header nav a {
			padding: 0 0.5em;
		}

		#header nav a:last-child {
			padding-right: 1em;
		}

		#header nav a[href='#menu'] {
			padding-right: 3.25em !important;
		}

		#header nav a[href='#menu']:before,
		#header nav a[href='#menu']:after {
			right: 0.75em;
		}

		#header nav a[href='#menu']:last-child {
			padding-right: 4em !important;
		}

		#header nav a[href='#menu']:last-child:before,
		#header nav a[href='#menu']:last-child:after {
			right: 1.5em;
		}
	}

	@media screen and (max-width: 480px) {
		#header .logo span {
			display: none;
		}

		#header nav a[href='#menu'] {
			overflow: hidden;
			padding-right: 0 !important;
			text-indent: 5em;
			white-space: nowrap;
			width: 5em;
		}

		#header nav a[href='#menu']:before,
		#header nav a[href='#menu']:after {
			right: 0;
			width: inherit;
		}

		#header nav a[href='#menu']:last-child:before,
		#header nav a[href='#menu']:last-child:after {
			width: 4em;
			right: 0;
		}
	}
</style>
