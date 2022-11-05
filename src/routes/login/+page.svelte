<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import logo_black from '$lib/images/logo_black.svg';
</script>

<div class="page">
	<div class="container">
		<span><b>Zaloguj się do LinkUMG</b></span>
		<img src={logo_black} class="logo-black" alt="logo" />
		<Input label="Login" />
		<Input type="password" label="Hasło" />
		<Button value="Zaloguj się" />
		<a class="register" href="/register">Zarejestruj się na LinkUMG</a>
	</div>
</div>

<style>
	.page {
		background-image: url(../../lib/images/login.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-color: #111E2B;
		margin-top: -100px;
		height: 100vh;
	}

	.container {
		background-color: white;
		border-radius: 30px;
		padding: 70px;
		align-items: center;
		gap: 30px;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	a {
		text-decoration: none;
		color: black;
	}

	span {
		font-size: 30px;
	}

	.register {
		color: #0A2C4E;
		font-weight: 400;
	}

	.logo-black {
		width: 130px;
	}

	@media only screen and (max-width: 768px) {
		.container {
			width: calc(100% - 100px);
			padding: 30px;
			gap: 15px;
		}
	}
</style>
