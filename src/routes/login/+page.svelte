<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
</script>

<div class="page">
	<div class="container">
		<span>Zaloguj się</span>
		<Input label="Login" />
		<Input label="Hasło" />
		<Button value="Zaloguj się" />
		<a href="/register">Zarejestruj się na LingUMG</a>
	</div>
</div>

<style>
	.page {
		background-image: url(../../lib/images/login.png);
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.container {
		background-color: white;
		border-radius: 30px;
		padding: 50px;
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
</style>
