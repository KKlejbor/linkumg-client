
<script lang="ts">
	import { goto } from '$app/navigation';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { storagedAuth } from 'src/api/Auth';
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import type { Login } from 'src/models/User';
	import { usePostLogin } from 'src/queries/useUser';
	
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

	<div class="page">
		<div class="container">
			<span>Zaloguj się</span>
			<form on:submit|preventDefault={login}>
				<Input label="Login" name="email" required={true} bind:value={email} />
				<Input label="Hasło" name="password" required={true} bind:value={password} /> 
				<Button value="Zaloguj się" type="submit" />
				{error}
			</form>
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
