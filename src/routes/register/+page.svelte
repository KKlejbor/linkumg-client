<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Select from 'src/components/Select.svelte';

	const registerOptions = ['Wybierz rodzaj konta', 'Student', 'Firma'];
	const facultyOptions = ['Wybierz wydział', 'WE', 'WM', 'WN', 'WZNiJ'];
	let selected = registerOptions[0];
	let facultySelected = 'Wybierz wydział';
</script>

<div class="page flex h-screen w-full items-center justify-center">
	<div
		class="m-auto flex w-full flex-col items-center gap-6 rounded-lg bg-white p-14 sm:justify-center lg:w-1/3"
	>
		<h1 class="mb-7 text-center text-3xl font-bold">Zarejestruj się na LinkUMG</h1>
		<Input label="Imię" />
		<Input label="Nazwisko" />
		<Input label="Email" />
		<Input label="Hasło" />
		<Select options={registerOptions} bind:selected />
		{#if selected === 'Student'}
			<Input label="Numer albumu" />
			<Select options={facultyOptions} bind:selected={facultySelected} />
		{:else if selected === 'Firma'}
			<Input label="Nazwa firmy" />
			<Input label="NIP" />
		{/if}
		<Button value="Zarejestruj się" />
		<a href="/login">Zaloguj się na LinkUMG</a>
	</div>
</div>

<style>
	.page {
		background-image: url(../../lib/images/rejestacja.png);
		background-size: cover;
	}
</style>
