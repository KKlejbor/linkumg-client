<script lang="ts">
	import user from '$lib/images/user.png';
	import Localization from '../lib/icons/Localization.svelte';
	import Trash from '../lib/icons/Trash.svelte';
	import Edit from '../lib/icons/Edit.svelte';
	import Modal from './Modal.svelte';
	import Clock from '../lib/icons/Clock.svelte';
	import Input from "src/components/Input.svelte";
	import TextArea from "src/components/TextArea.svelte";
	import Button from "src/components/Button.svelte";

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

<div class="grid grid-cols-10 gap-x-5 bg-white p-4 shadow-md rounded-lg break-words">
	<div class="col-span-2">
		<img src={user} alt="user" class="rounded-full mb-2" />
		<span>Figma Sp. z o. o</span>
	</div>
	<div class="col-span-6 flex justify-between flex-col text-xl">
		<span class="text-3xl cursor-pointer" on:click={showMore}>Konserwator powierzchni płaskich</span>
		<span>Umowa o prace</span>
		<span>Pełen etat</span>
		<span class="flex gap-1.5 items-center">
			<Localization class="w-4 h-4" />
			Gdańsk
		</span>
	</div>
	<div class="col-span-2 flex flex-col justify-between text-right">
		<div>
			<button on:click={editForm} class="mr-2 outline-none">
				<Edit class="w-5 h-5" />
			</button>
			<button on:click={deleteForm} class="outline-none">
				<Trash class="w-5 h-5" />
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

		<div class="w-1/2 mt-6 text-right flex self-end">
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
		<div class="flex flex-row-reverse gap-6 flex-end">
			<button class="uppercase text-red-600 font-medium">Usuń</button>
			<button on:click={deleteForm} class="uppercase text-blue-600 font-medium">Anuluj</button>
		</div>
	</Modal>
{/if}

{#if showMoreModal}
	<Modal heading="" bind:open={showMoreModal}>
		<div class="grid gap-y-4 lg:gap-y-0 lg:grid-cols-10 lg:gap-x-9 auto-cols-fr">
			<div class="lg:col-span-2 text-center">
				<div class="flex flex-col py-4 text-xl">
					<img class="rounded-full" src={user} alt="user" />
					<span>Figma Sp. z.o.o</span>
					<span>Email: nanana@gmail.com</span>
					<span>Nr tel.: 123456789</span>
				</div>
			</div>
			<div class="lg:col-span-6 flex flex-col gap-4">
				<div class="text-4xl">
					Konserwator powierzchni płaskich
				</div>

				<div class="ml-5">
					<span class="text-2xl mr-3">Typ umowy:</span>
					Umowa o pracę
				</div>
				<div class="ml-5">
					<span class="text-2xl mr-3">Etat:</span>
					Pełen etat
				</div>
				<div class="ml-5">
					<span class="text-2xl mr-3">Lokalizacja:</span>
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
			<div class="lg:col-span-2 text-4xl">
				4000 - 6000 zł
			</div>
		</div>

		<div class="flex justify-end gap-2 mt-3 items-center font-medium text-xl">
			<Clock class="w-5 h-5" />
			29.10.2020 | 21:34
		</div>
	</Modal>
{/if}