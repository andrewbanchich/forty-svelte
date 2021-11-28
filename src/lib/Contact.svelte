<script>
	import Button from './Button.svelte';
</script>

<section id="contact">
	<div class="inner">
		<section id="form">
			<form method="post" action="#">
				<div class="fields">
					<div class="field half">
						<label for="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div class="field half">
						<label for="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div class="field">
						<label for="message">Message</label>
						<textarea name="message" id="message" rows="6" />
					</div>
				</div>

				<div id="form-buttons">
					<Button fill>Send Message</Button>
					<Button>Clear</Button>
				</div>
			</form>
		</section>

		<section class="split">
			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-envelope" />
					<h3>Email</h3>
					<a href="#">information@untitled.tld</a>
				</div>
			</section>

			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-phone" />
					<h3>Phone</h3>
					<span>(000) 000-0000 x12387</span>
				</div>
			</section>

			<section>
				<div class="contact-method">
					<span class="icon solid alt fa-home" />
					<h3>Address</h3>
					<span
						>1234 Somewhere Road #5432<br />
						Nashville, TN 00000<br />
						United States of America</span
					>
				</div>
			</section>
		</section>
	</div>
</section>

<style>
	#contact {
		border-bottom: solid 1px rgba(212, 212, 255, 0.1);
		overflow-x: hidden;
	}

	#contact > .inner {
		display: flex;
	}

	#form {
		padding: 3rem;
	}

	#form-buttons {
		display: flex;
		gap: 1rem;
	}

	#contact > .inner > :nth-child(2n - 1) {
		border-right: solid 1px rgba(212, 212, 255, 0.1);
		width: 60%;
	}

	#contact > .inner > :nth-child(2n) {
		padding-left: 3em;
		width: 40%;
	}

	#contact > .inner > .split {
		padding: 0;
	}

	#contact > .inner > .split > * {
		padding: 3em 0 1em 3em;
		position: relative;
	}

	#contact > .inner > .split > *:before {
		border-top: solid 1px rgba(212, 212, 255, 0.1);
		content: '';
		display: block;
		margin-left: -3em;
		position: absolute;
		top: 0;
		width: calc(100vw + 3em);
	}

	#contact > .inner > .split > :first-child:before {
		display: none;
	}
</style>
