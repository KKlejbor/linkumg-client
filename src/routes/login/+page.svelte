
<script lang="ts">
	import { goto } from '$app/navigation';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { storagedAuth, storagedToken } from 'src/api/Auth';
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import type { Login } from 'src/models/User';
	import { usePostLogin } from 'src/queries/useUser';
	import LogoBlack from '$lib/icons/LogoBlack.svelte';
	import { getNotificationsContext } from 'svelte-notifications';
	import jwt_decode from "jwt-decode";
	import { notificationLocation, notificationTime } from 'src/utils/globalState';
	
	const queryClient = useQueryClient();
	const { addNotification } = getNotificationsContext();

	let email = '';
	let password = '';
	let error = '';

	const postLogin = usePostLogin(queryClient, {
		onError: (error) => {
			addNotification({
				text: error.response?.data,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		},
		onSuccess: (response) => {
			$storagedToken = jwt_decode(response.accessToken)
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
		class="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-white p-14 xl:w-1/3 lg:w-1/2 md:w-1/2" 
	>
			<h1 class="mb-7 text-center text-3xl font-bold">Zaloguj się do LinkUMG</h1>
			<LogoBlack class="w-40" />
			<form on:submit|preventDefault={login}>
				<Input label="Login" name="email" required={true} bind:value={email} />
				<Input label="Hasło" name="password" required={true} bind:value={password} type="password" /> <br/>
				<Button value="Zaloguj się" type="submit" />
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
			background-attachment: fixed;
			min-height: 100vh;
		}
	</style>