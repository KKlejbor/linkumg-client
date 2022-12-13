<script lang="ts">
	import user from '$lib/images/user.png';
	import UserDetailsProperty from 'src/components/UserDetailsProperty.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import Camera from '$lib/icons/Camera.svelte';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { useGetUserInfo } from 'src/queries/useUser';
	import { getNotificationsContext } from 'svelte-notifications';
	import { notification } from 'src/locales/pl/common.json';
	import { notificationLocation, notificationTime } from 'src/utils/globalState';
	import { usePatchCollege } from 'src/queries/useCollege';
	import type { CollegePatch } from 'src/models/College';

	const queryClient = useQueryClient();
	const { addNotification } = getNotificationsContext();
	const userInfo = useGetUserInfo();

	let isEditProfileActive = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = true;
	};
	const desactiveEditProfileMode = () => {
		isEditProfileActive = false;
	};

	const patchCollege = usePatchCollege(queryClient, {
		onSuccess: () => {
			isEditProfileActive = false;
			addNotification({
				text: notification.user.update.success,
				type: 'success',
				position: notificationLocation,
				removeAfter: notificationTime
			});
		},
		onError: (error) => {
			addNotification({
				text: error.response?.data,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime
			});
			addNotification({
				text: notification.user.update.error,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime
			});
		}
	});

	let editCollege: CollegePatch = {
		about: '',
		avatar: ''
	};

	if ($userInfo.isSuccess && $userInfo.data) {
		editCollege.about = $userInfo.data.about;
		editCollege.avatar = ($userInfo.data.avatar) === null ? 'test.jpg' : $userInfo.data.avatar + '.jpg';
	}

	const editCollegeHandler = () => {
		const editCollegeData: CollegePatch = {
			about: editCollege.about,
			avatar: editCollege.avatar
		};

		$patchCollege.mutate(editCollegeData);
	};
</script>

<div class="bg-bgSecondary p-10">
	<h1 class="text-bold text-center text-[70px]">Profil</h1>
	<div class="relative grid lg:grid-cols-3">
		<div class="mb-20 px-10 text-3xl lg:h-[80%]">
			<h1 class="mb-4 font-bold">O mnie</h1>
			{#if isEditProfileActive}
				<TextArea bind:value={editCollege.about} />
			{:else}
				<p class="break-words text-justify">
					{editCollege.about}
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
					on:click={editCollegeHandler}
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
					<UserDetailsProperty heading="Nazwa" value={$userInfo.data.name} />
					<UserDetailsProperty heading="E-mail" value={$userInfo.data.email} />
				{:else}
					<Input label="Nazwa" disabled={true} bind:value={$userInfo.data.name} />
					<Input label="E-mail" disabled={true} bind:value={$userInfo.data.email} />
				{/if}
			</div>
		{/if}
	</div>
</div>
