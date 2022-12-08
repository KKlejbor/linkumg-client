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
	import type { StudentPatch } from 'src/models/Student';
	import type { Socials } from 'src/models/Socials';
	import { usePatchStudent } from 'src/queries/useStudent';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import Edit from '$lib/icons/Edit.svelte';

	const queryClient = useQueryClient();
	let isEditProfileActive = false;
	let editLinkedin = false;
	let editGitub = false;
	let editFacebook = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = true;
	};

	const openLinkedinModal = (event: any) => {
		if (isEditProfileActive) {
			event.preventDefault();
			editLinkedin = true;
		}
	};

	const closeLinkedinModal = () => {
		editLinkedin = false;
	};

	const openGithubModal = (event: any) => {
		if (isEditProfileActive) {
			event.preventDefault();
			editGitub = true;
		}
	};

	const closeGithubModal = () => {
		editGitub = false;
	};

	const openFacebookModal = (event: any) => {
		if (isEditProfileActive) {
			event.preventDefault();
			editFacebook = true;
		}
	};

	const closeFacebookModal = () => {
		editFacebook = false;
	};

	const patchStudent = usePatchStudent(queryClient, {
		onSuccess: () => {
			isEditProfileActive = false;
		},
		onError: () => {}
	});

	let socials: Socials = {
		facebook: '',
		github: '',
		instagram: '',
		linkedin: ''
	};

	let editStudent: StudentPatch = {
		birthDate: '',
		phone: '',
		about: '',
		socials: socials,
		avatar: ''
	};
	const editStudentHandler = () => {
		const editStudentData: StudentPatch = {
			birthDate: editStudent.birthDate,
			phone: editStudent.phone,
			about: editStudent.about,
			socials: editStudent.socials,
			avatar: editStudent.avatar
		};

		$patchStudent.mutate(editStudentData);
	};
</script>

<div class="w-full bg-bgSecondary p-14">
	<h1 class="text-bold text-center text-[70px]">Profil</h1>
	<div class="relative grid lg:grid-cols-3">
		<div class="mb-20 px-10 text-3xl lg:h-[80%]">
			<h1 class="mb-4 font-bold">O mnie</h1>
			{#if isEditProfileActive}
				<TextArea bind:value={editStudent.about} />
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
			{#if isEditProfileActive}
				<button
					on:click={editStudentHandler}
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white"
					>Zapisz</button
				>
				<button
					on:click={activeEditProfileMode}
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white"
					>Anuluj</button
				>
			{:else}
				<button
					on:click={activeEditProfileMode}
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white"
					>Edytuj profil</button
				>
			{/if}
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
				<Input label="Wiek" bind:value={editStudent.birthDate} />
				<Input label="Lokalizacja" />
				<Input label="Kontakt" bind:value={editStudent.phone} />
			{/if}
			<div class="flex gap-6">
				<a href="/" target="_blank" on:click={openLinkedinModal}>
					<Linkedin class="w-10" />
				</a>
				<a href="/" target="_blank" on:click={openGithubModal}>
					<Github class="w-10" />
				</a>
				<a href="/" target="_blank" on:click={openFacebookModal}>
					<Facebook class="w-10" />
				</a>
			</div>
		</div>
	</div>
	{#if editLinkedin}
		<Modal heading="Edytuj" bind:open={editLinkedin}>
			<div class="py-6">
				<Input label="Link do Linkedin'a" />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button class="font-medium uppercase text-red-600">Usuń</button>
				<button on:click={closeLinkedinModal} class="font-medium uppercase text-blue-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
	{#if editGitub}
		<Modal heading="Edytuj" bind:open={editGitub}>
			<div class="py-6">
				<Input label="Link do Github'a" />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button class="font-medium uppercase text-red-600">Usuń</button>
				<button on:click={closeGithubModal} class="font-medium uppercase text-blue-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
	{#if editFacebook}
		<Modal heading="Edytuj" bind:open={editFacebook}>
			<div class="py-6">
				<Input label="Link do Facebooka" />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button class="font-medium uppercase text-red-600">Usuń</button>
				<button on:click={closeFacebookModal} class="font-medium uppercase text-blue-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
</div>
