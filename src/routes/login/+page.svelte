
<script lang="ts">
	import { goto } from '$app/navigation';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { storagedAuth } from 'src/api/Auth';
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import type { Login } from 'src/models/User';
	import { usePostLogin } from 'src/queries/useUser';
	import LogoBlack from '$lib/icons/LogoBlack.svelte';
	
	const queryClient = useQueryClient();

	let email = '';
	let password = '';
	let error = '';

	const postLogin = usePostLogin(queryClient, {
		onError: () => {
			error = "Błędne dane logowania";
		},
		onSuccess: (response) => {
			$storagedAuth = response;
			goto('/');
		}
	});

	const login = () => {
		const loginData: Login = {
			email: email,
			password: password
		};

		$postLogin.mutate(loginData);
	};
</script>

<div class="page flex h-screen w-full w-full items-center justify-center">
	<div
		class="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-white p-14 lg:w-1/4"
	>
			<h1 class="mb-7 text-center text-3xl font-bold">Zaloguj się do LinkUMG</h1>
			<LogoBlack class="w-40" />
			<form on:submit|preventDefault={login}>
				<Input label="Login" name="email" required={true} bind:value={email} />
				<Input label="Hasło" name="password" required={true} bind:value={password} /> <br/>
				<Button value="Zaloguj się" type="submit" />
				{error}
			</form>
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