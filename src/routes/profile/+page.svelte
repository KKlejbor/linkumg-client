<script lang="ts">
	import user from '$lib/images/user.png';
	import UserDetailsProperty from 'src/components/UserDetailsProperty.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Camera from '$lib/icons/Camera.svelte';

	let isEditProfileActive = false;
	let editSocial = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = !isEditProfileActive;
	};

	const openSocialModal = (event) => {
		if (isEditProfileActive) {
			event.preventDefault();
			editSocial = true;
		}
	};

	const closeSocialModal = () => {
		editSocial = false;
	};
</script>

<div class="bg-bgSecondary p-10">
	<h1 class="text-bold text-center text-[70px]">Profil</h1>
	<div class="relative grid lg:grid-cols-3">
		<div class="mb-20 px-10 text-3xl lg:h-[80%]">
			<h1 class="mb-4 font-bold">O mnie</h1>
			{#if isEditProfileActive}
				<TextArea
					value="Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien być
					z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny nastrój w
					moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy znaleźć sobie
					ciekawe zajęcie."
				/>
			{:else}
				<p class="break-words text-justify">
					Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien
					być z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny
					nastrój w moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy
					znaleźć sobie ciekawe zajęcie.
				</p>
			{/if}
		</div>
		<div class="flex flex-col items-center self-center">
			<div class="relative border-x-0 border-bgPrimary px-10 lg:border-x-2">
				<img src={user} alt="user" class="mx-auto rounded-full" />
				{#if isEditProfileActive}
					<Camera class="absolute right-0 mr-10 -mt-10 h-10 w-10 cursor-pointer" />
				{/if}
			</div>
			<button
				on:click={activeEditProfileMode}
				class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white"
				>{isEditProfileActive ? 'Zapisz' : 'Edytuj profil'}</button
			>
		</div>
		<div class="flex flex-col gap-5 px-6">
			{#if !isEditProfileActive}
				<UserDetailsProperty heading="Imię" value="Jan" />
				<UserDetailsProperty heading="Nazwisko" value="Kowalski" />
				<UserDetailsProperty heading="Wiek" value="23 lat" />
				<UserDetailsProperty heading="Lokalizacja" value="Gdynia" />
				<UserDetailsProperty heading="Kontakt" value="569034436" />
			{:else}
				<Input label="Imię" />
				<Input label="Nazwisko" />
				<Input label="Wiek" />
				<Input label="Lokalizacja" />
				<Input label="Kontakt" />
			{/if}
			<div class="flex gap-6">
				<a href="/" target="_blank" on:click={openSocialModal}>
					<Linkedin class="w-10" />
				</a>
				<a href="/" target="_blank" on:click={openSocialModal}>
					<Github class="w-10" />
				</a>
				<a href="/" target="_blank" on:click={openSocialModal}>
					<Facebook class="w-10" />
				</a>
			</div>
		</div>
	</div>
	{#if editSocial}
		<Modal heading="Edytuj" bind:open={editSocial}>
			<div class="py-6">
				<Input label="Link do Facebooka" />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button class="font-medium uppercase text-red-600">Usuń</button>
				<button on:click={closeSocialModal} class="font-medium uppercase text-blue-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
</div>
