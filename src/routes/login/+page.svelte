<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import LogoBlack from "$lib/icons/LogoBlack.svelte";

</script>

<div class="page flex justify-center items-center w-full w-full h-screen">
	<div class="bg-white rounded-lg p-14 w-full lg:w-1/4 flex flex-col gap-6 justify-center items-center">
		<h1 class="font-bold text-3xl text-center mb-7">Zaloguj się do LinkUMG</h1>
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
		background-color: #111E2B;
	}
</style>
