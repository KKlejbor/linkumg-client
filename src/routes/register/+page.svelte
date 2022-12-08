<script lang="ts">
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Select from 'src/components/Form/Select.svelte';
	import type { RegisterCompany, RegisterStudent } from 'src/models/User';
	import { usePostRegisterCompany, usePostRegisterStudent } from '../../queries/useUser';
	import { useQueryClient } from '@sveltestack/svelte-query';

	const registerOptions = ['Wybierz rodzaj konta', 'Student', 'Firma'];
	const facultyOptions = ['Wybierz wydział', 'WE', 'WM', 'WN', 'WZNiJ'];
	let selected = registerOptions[0];
	let facultySelected = 'Wybierz wydział';

	const queryClient = useQueryClient();

	let email = '';
	let password = '';
	let name = '';
	let lastName = '';
	let indexNumber = '';
	let companyName = '';
	let nip = '';
	let error = '';
	let success = false;

	const postRegisterStudent = usePostRegisterStudent(queryClient, {
		onError: () => {
			error = "Błędne dane użytkownika";
		},
		onSuccess: () => {
			success = true;
			error = '';
		}
	});

	const postRegisterCompany = usePostRegisterCompany(queryClient, {
		onError: () => {
			error = "Błędne dane użytkownika";
		},
		onSuccess: () => {
			success = true;
			error = '';
		}
	});

	const register = () => {
		error = '';

		if(selected === 'Student') {
			if(facultySelected === 'Wybierz wydział')
			{
				error = 'Błędne dane użytkownika';
				return;
			}

			const registerData: RegisterStudent = {
				email: email,
				password: password,
				name: name,
				lastName: lastName,
				indexNumber: indexNumber,
				faculty: facultySelected
			};

			$postRegisterStudent.mutate(registerData);
		} else if(selected === 'Firma') {
			const registerData: RegisterCompany = {
				email: email,
				password: password,
				name: companyName,
				nip: nip
			};

			$postRegisterCompany.mutate(registerData);
		}
	};
</script>

<div class="page flex min-h-screen w-full items-center justify-center">
	<form class="w-full" on:submit|preventDefault={register}>
		<div
			class="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-white p-14 xl:w-1/3 lg:w-1/2 md:w-1/2"
		>
			{#if !success}
				<h1 class="mb-7 text-center text-3xl font-bold">Zarejestruj się na LinkUMG</h1>
				<div class="font-bold text-2xl text-red-500">{error}</div>
				{#if selected !== 'Firma'}
					<Input label="Imię" bind:value={name} />
					<Input label="Nazwisko" bind:value={lastName} />
				{/if}
				<Input label="Email" bind:value={email} />
				<Input label="Hasło" type="password" bind:value={password} />
				<Select label="" options={registerOptions} bind:selected />
				{#if selected === 'Student'}
					<Input label="Numer albumu" bind:value={indexNumber} />
					<Select label="" options={facultyOptions} bind:selected={facultySelected} />
				{:else if selected === 'Firma'}
					<Input label="Nazwa firmy" bind:value={companyName} />
					<Input label="NIP" bind:value={nip} />
				{/if}
				<Button value="Zarejestruj się" type="submit" />

			{:else}
				<div class="font-bold text-green-500 text-2xl">Twoje konto zostało stworzone!</div>
				<div>Wysłaliśmy do Ciebie e-mail z linkiem aktywacyjnym. Musisz aktywować konto przed zalogowaniem.</div>
			{/if}

			<a href="/login">Zaloguj się na LinkUMG</a>

		</div>
	</form>

</div>

<style>
    .page {
        background-image: url(../../lib/images/rejestacja.png);
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }
</style>
