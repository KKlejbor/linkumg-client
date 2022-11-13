<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import LogoBlack from '$lib/icons/LogoBlack.svelte';
</script>

<div class="page flex h-screen w-full w-full items-center justify-center">
	<div
		class="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-white p-14 lg:w-1/4"
	>
		<h1 class="mb-7 text-center text-3xl font-bold">Zaloguj się do LinkUMG</h1>
		<LogoBlack class="w-40" />
		<Input name="email" id="email" label="Login" />
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
		background-color: #111e2b;
	}
</style>
