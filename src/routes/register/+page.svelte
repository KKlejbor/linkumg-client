<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Select from 'src/components/Select.svelte';

	const registerOptions = ['Student', 'Firma'];
	const facultyOptions = ['WE', 'WM', 'WN', 'WZNiJ'];
	let selected = 'Wybierz rodzaj konta';
	let facultySelected = 'Wybierz wydział';
</script>

<div class="page w-full h-screen flex justify-center items-center">
	<div class="bg-white rounded-lg p-14 w-full lg:w-1/3 m-auto flex flex-col gap-6 sm:justify-center items-center">
		<h1 class="font-bold text-3xl text-center mb-7">Zarejestruj się na LinkUMG</h1>
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
