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
	import { useGetUserInfo } from 'src/queries/useUser';
	import { getNotificationsContext } from 'svelte-notifications';

	const queryClient = useQueryClient();
	const { addNotification } = getNotificationsContext();
	const userInfo = useGetUserInfo();

	let isEditProfileActive = false;
	let editLinkedin = false;
	let editGitub = false;
	let editFacebook = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = true;
	};
	const desactiveEditProfileMode = () => {
		isEditProfileActive = false;
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
			addNotification({
				text: 'Pomyślnie zaktualizowano użytkownika',
				type: 'success',
				position: 'bottom-center',
				removeAfter: 4000,
			});
		},
		onError: () => {
			addNotification({
				text: 'Wystąpił błąd przy aktualizowaniu użytkownika!',
				type: 'error',
				position: 'bottom-center',
				removeAfter: 4000,
			});
		}
	});

	let socials: Socials = {
		facebook: '',
		github: '',
		instagram: 'test',
		linkedin: ''
	};

	let editStudent: StudentPatch = {
		birthDate: '',
		phone: '',
		about: '',
		socials: socials,
		avatar: ''
	};

	if ($userInfo.isSuccess && $userInfo.data) {
		editStudent.about = $userInfo.data.about;
		editStudent.avatar = ($userInfo.data.avatar) === null ? 'test.jpg' : $userInfo.data.avatar + '.jpg';
		editStudent.birthDate = $userInfo.data.birthDate;
		editStudent.phone = $userInfo.data.phone;
		editStudent.socials = $userInfo.data.socials;
	}

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

<div class="bg-bgSecondary p-10">
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
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white">Zapisz</button
				>
				<button
					on:click={desactiveEditProfileMode}
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white">Anuluj</button
				>
			{:else}
				<button
					on:click={activeEditProfileMode}
					class="mt-6 rounded-full bg-bgButton px-5 py-3 text-center text-white"
					>Edytuj profil</button
				>
			{/if}
		</div>
		{#if $userInfo.isSuccess && $userInfo.data}
			<div class="flex flex-col gap-5 px-6">
				{#if !isEditProfileActive}
					<UserDetailsProperty heading="Imię" value={$userInfo.data.name} />
					<UserDetailsProperty heading="Nazwisko" value={$userInfo.data.lastName}/>
					<UserDetailsProperty heading="Wiek" value={$userInfo.data.birthDate} />
					<UserDetailsProperty heading="E-mail" value={$userInfo.data.email} />
					<UserDetailsProperty heading="Kontakt" value={$userInfo.data.phone} />
				{:else}
					<Input label="Imię" disabled={true} bind:value={$userInfo.data.name}/>
					<Input label="Nazwisko" disabled={true} bind:value={$userInfo.data.name} />
					<Input label="Wiek" bind:value={editStudent.birthDate} />
					<Input label="E-mail" disabled={true} bind:value={$userInfo.data.email} />
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
		{/if}
	</div>
	{#if editLinkedin}
		<Modal heading="Edytuj" bind:open={editLinkedin}>
			<div class="py-6">
				<Input label="Link do Linkedin'a" bind:value={editStudent.socials.linkedin} />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button on:click={closeLinkedinModal} class="font-medium uppercase text-blue-600">Zapisz</button>
				<button on:click={closeLinkedinModal} class="font-medium uppercase text-red-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
	{#if editGitub}
		<Modal heading="Edytuj" bind:open={editGitub}>
			<div class="py-6">
				<Input label="Link do Github'a" bind:value={editStudent.socials.github} />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button on:click={closeGithubModal} class="font-medium uppercase text-blue-600">Zapisz</button>
				<button on:click={closeGithubModal} class="font-medium uppercase text-red-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
	{#if editFacebook}
		<Modal heading="Edytuj" bind:open={editFacebook}>
			<div class="py-6">
				<Input label="Link do Facebooka" bind:value={editStudent.socials.facebook} />
			</div>
			<div class="flex-end flex flex-row-reverse gap-6">
				<button on:click={closeFacebookModal} class="font-medium uppercase text-blue-600">Zapisz</button>
				<button on:click={closeFacebookModal} class="font-medium uppercase text-red-600"
					>Anuluj</button
				>
			</div>
		</Modal>
	{/if}
</div>
