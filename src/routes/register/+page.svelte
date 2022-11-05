<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Select from 'src/components/Select.svelte';

	const registerOptions = ['Student', 'Firma'];
	const facultyOptions = ['WE', 'WM', 'WN', 'WZNiJ'];
	let selected = registerOptions[0];
	let facultySelected = facultyOptions[0];
</script>

<div class="page">
	<div class="container">
		<span>Zarejestruj się</span>
		<Input label="Imię" />
		<Input label="Nazwisko" />
		<Input label="Email" />
		<Input label="Hasło" />
		<Select options={registerOptions} bind:selected />
		{#if selected === 'Student'}
			<Input label="Numer albumu" />
			<Select options={facultyOptions} bind:selected={facultySelected} />
		{:else}
			<Input label="Nazwa firmy" />
			<Input label="NIP" />
		{/if}
		<Button value="Zarejestruj się" />
		<a href="/login">Zaloguj się na LingUMG</a>
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}
	.page {
		background-image: url(../../lib/images/rejestacja.png);
		background-size: cover;
		width: 100vw;
		height: 100vh;
	}

	.container {
		background-color: white;
		border-radius: 30px;
		padding: 25px;
		align-items: center;
		gap: 12px;
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
