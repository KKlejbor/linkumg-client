<script lang="ts">
	import user from '$lib/images/user.png';
	import UserDetailsProperty from 'src/components/UserDetailsProperty.svelte';
	import Input from 'src/components/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import TextArea from "src/components/TextArea.svelte";
	import Linkedin from "$lib/icons/Linkedin.svelte";
	import Github from "$lib/icons/Github.svelte";
	import Facebook from "$lib/icons/Facebook.svelte";
	import Camera from "$lib/icons/Camera.svelte";

	let isEditProfileActive = false;
	let editSocial = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = !isEditProfileActive;
	};

	const openSocialModal = (event) => {

		if(isEditProfileActive)
		{
			event.preventDefault();
			editSocial = true;
		}
	};

	const closeSocialModal = () => {
		editSocial = false;
	}
</script>

<div class="w-full bg-bgSecondary p-14">
	<h1 class="text-center text-[70px] text-bold">Profil</h1>
	<div class="grid lg:grid-cols-3 relative">

		<div class="text-3xl px-10">
			<h1 class="font-bold mb-4">O mnie</h1>
			{#if isEditProfileActive}
				<TextArea text="Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien być
					z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny nastrój w
					moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy znaleźć sobie
					ciekawe zajęcie." />
			{:else}
				<p class="text-justify break-words">
					Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien być
					z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny nastrój w
					moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy znaleźć sobie
					ciekawe zajęcie.
				</p>
			{/if}
		</div>
		<div class="flex items-center flex-col self-center">
			<div class="border-bgPrimary border-x-0 lg:border-x-2 px-10 relative">
				<img src={user} alt="user" class="mx-auto rounded-full" />
				{#if isEditProfileActive }
					<Camera class="w-10 h-10 cursor-pointer absolute right-0 mr-10 -mt-10" />
				{/if}
			</div>
			<button on:click={activeEditProfileMode} class="bg-bgButton rounded-full text-white px-5 py-3 mt-6 text-center">{ isEditProfileActive ? 'Zapisz' : 'Edytuj profil' }</button>
		</div>
		<div class="flex flex-col gap-5 px-6">
			{#if !isEditProfileActive}
				<UserDetailsProperty heading="Imię" value="Jan"/>
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
			<div class="flex flex-row-reverse gap-6 flex-end">
				<button class="uppercase text-red-600 font-medium">Usuń</button>
				<button on:click={closeSocialModal} class="uppercase text-blue-600 font-medium">Anuluj</button>
			</div>
		</Modal>
	{/if}
</div>