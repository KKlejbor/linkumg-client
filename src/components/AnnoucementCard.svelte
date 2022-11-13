<script lang="ts">
	import user from '$lib/images/user.png';
	import Localization from '../lib/icons/Localization.svelte';
	import Trash from '../lib/icons/Trash.svelte';
	import Edit from '../lib/icons/Edit.svelte';
	import Modal from './Modal.svelte';
	import Clock from '../lib/icons/Clock.svelte';
	import Input from 'src/components/Input.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import Button from 'src/components/Button.svelte';

	let editModal = false;
	let deleteModal = false;
	let showMoreModal = false;

	const editForm = () => {
		editModal = !editModal;
	};

	const deleteForm = () => {
		deleteModal = !deleteModal;
	};

	const showMore = () => {
		showMoreModal = !showMoreModal;
	};
</script>

<div class="grid grid-cols-10 gap-x-5 break-words rounded-lg bg-white p-4 shadow-md">
	<div class="col-span-2">
		<img src={user} alt="user" class="mb-2 rounded-full" />
		<span>Figma Sp. z o. o</span>
	</div>
	<div class="col-span-6 flex flex-col justify-between text-xl">
		<span class="cursor-pointer text-3xl" on:click={showMore}>Konserwator powierzchni płaskich</span
		>
		<span>Umowa o prace</span>
		<span>Pełen etat</span>
		<span class="flex items-center gap-1.5">
			<Localization class="h-4 w-4" />
			Gdańsk
		</span>
	</div>
	<div class="col-span-2 flex flex-col justify-between text-right">
		<div>
			<button on:click={editForm} class="mr-2 outline-none">
				<Edit class="h-5 w-5" />
			</button>
			<button on:click={deleteForm} class="outline-none">
				<Trash class="h-5 w-5" />
			</button>
		</div>
		<div class="text-2xl">4000 - 6000 zł</div>
		<span>29.10.2020</span>
	</div>
</div>

{#if editModal}
	<Modal heading="Ogłoszenie o korepetycje" bind:open={editModal}>
		<div class="flex flex-col gap-6 py-4">
			<Input label="Tytuł oferty" />
			<Input label="Lokalizacja" />
			<Input label="Kategoria" />
			<Input label="Stawka godzinowa" />
			<div class="h-40">
				<TextArea class="h-40" label="Opis oferty" />
			</div>
		</div>

		<div class="mt-6 flex w-1/2 self-end text-right">
			<Button value="Dodaj ogłoszenie" />
		</div>
	</Modal>
{/if}

{#if deleteModal}
	<Modal heading="Usuń" bind:open={deleteModal}>
		<p class="whitespace-pre-line pt-6 pb-12">
			Czy jesteś pewny/a, że chcesz usunać swoje ogłoszenie <q>Konserwator powierzchi płaskich</q>?
			Pamiętaj nie bedzie już można tego cofnąć.
		</p>
		<div class="flex-end flex flex-row-reverse gap-6">
			<button class="font-medium uppercase text-red-600">Usuń</button>
			<button on:click={deleteForm} class="font-medium uppercase text-blue-600">Anuluj</button>
		</div>
	</Modal>
{/if}

{#if showMoreModal}
	<Modal heading="" bind:open={showMoreModal}>
		<div class="grid auto-cols-fr gap-y-4 lg:grid-cols-10 lg:gap-y-0 lg:gap-x-9">
			<div class="text-center lg:col-span-2">
				<div class="flex flex-col py-4 text-xl">
					<img class="rounded-full" src={user} alt="user" />
					<span>Figma Sp. z.o.o</span>
					<span>Email: nanana@gmail.com</span>
					<span>Nr tel.: 123456789</span>
				</div>
			</div>
			<div class="flex flex-col gap-4 lg:col-span-6">
				<div class="text-4xl">Konserwator powierzchni płaskich</div>

				<div class="ml-5">
					<span class="mr-3 text-2xl">Typ umowy:</span>
					Umowa o pracę
				</div>
				<div class="ml-5">
					<span class="mr-3 text-2xl">Etat:</span>
					Pełen etat
				</div>
				<div class="ml-5">
					<span class="mr-3 text-2xl">Lokalizacja:</span>
					Gdańsk
				</div>
				<p class="break-words text-justify text-2xl">
					Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien
					być z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny
					nastrój w moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy
					znaleźć sobie ciekawe zajęcie.
				</p>
			</div>
			<div class="text-4xl lg:col-span-2">4000 - 6000 zł</div>
		</div>

		<div class="mt-3 flex items-center justify-end gap-2 text-xl font-medium">
			<Clock class="h-5 w-5" />
			29.10.2020 | 21:34
		</div>
	</Modal>
{/if}
