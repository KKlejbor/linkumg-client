<script lang="ts">
	import user from '$lib/images/user.png';
	import Localization from '../../lib/icons/Localization.svelte';
	import Trash from '../../lib/icons/Trash.svelte';
	import Edit from '../../lib/icons/Edit.svelte';
	import Modal from '../Modal.svelte';
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { getNotificationsContext } from 'svelte-notifications';
	import Clock from '../../lib/icons/Clock.svelte';
	import type { PrivateLesson, PrivateLessonPost } from 'src/models/PrivateLesson';
	import { useDeletePrivateLesson, usePatchPrivateLesson } from 'src/queries/usePrivateLesson';
	import { notification } from 'src/locales/pl/common.json';
	import InputNumber from '../Form/InputNumber.svelte';
	import { notificationLocation, notificationTime } from 'src/utils/globalState';
	import { storagedUser } from 'src/api/Auth';


	const { addNotification } = getNotificationsContext();

	export let privateLesson: PrivateLesson;

	const queryClient = useQueryClient();

	const deletePrivateLesson = useDeletePrivateLesson(queryClient, {
		onSuccess: () => {
			deleteForm();
			addNotification({
				text: notification.privateLesson.delete.success,
				type: 'success',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		},
		onError: () => {
			addNotification({
				text: notification.privateLesson.delete.error,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		}
	});

	const patchPrivateLesson = usePatchPrivateLesson(queryClient, privateLesson.lessonId, {
		onSuccess: () => {
			editForm();
			addNotification({
				text: notification.privateLesson.update.success,
				type: 'success',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		},
		onError: (error) => {
			addNotification({
				text: error.response?.data,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
			addNotification({
				text: notification.privateLesson.update.error,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		}
	});

	let editModal = false;
	let deleteModal = false;
	let showMoreModal = false;

	const showMore = () => {
		showMoreModal = !showMoreModal;
	};

	const deleteForm = () => {
		deleteModal = !deleteModal;
	};

	const editForm = () => {
		editModal = !editModal;
	};

	const deletePrivateLessonId = () => {
		$deletePrivateLesson.mutate(privateLesson.lessonId);
	};

  let privateLessonForm: PrivateLessonPost = {
	  description: privateLesson.description,
	  location: privateLesson.location,
	  title: privateLesson.title,
	  pricePerHour: privateLesson.pricePerHour,
	  category: privateLesson.category,
  }

	const editPrivateLesson = () => {
		const editPrivateLesson: PrivateLessonPost = {
			description: privateLessonForm.description,
			location: privateLessonForm.location,
			pricePerHour: privateLessonForm.pricePerHour,
			category: privateLessonForm.category,
			title: privateLessonForm.title
		};

		$patchPrivateLesson.mutate(editPrivateLesson);
	};
	console.log($storagedUser?.id);
	console.log(privateLesson.studentDto.id);
</script>

<div class="grid grid-cols-10 gap-x-5 break-words rounded-lg bg-white p-4 shadow-md">
	<div class="col-span-2">
		<img src={user} alt="user" class="mb-2 rounded-full" />
		<span>{privateLesson.studentDto.name}</span>
	</div>
	<div class="col-span-6 flex flex-col justify-between text-xl">
		<span class="cursor-pointer text-3xl" on:click={showMore}>{privateLesson.title}</span>
		<span>{privateLesson.category}</span>
		<span>{privateLesson.studentDto.about}</span>
		<span class="flex items-center gap-1.5">
			<Localization class="h-4 w-4" />
			{privateLesson.location}
		</span>
	</div>
	<div class="col-span-2 flex flex-col justify-between text-right">
		<div>
			{#if $storagedUser?.id === privateLesson.studentDto.id}
			<button on:click={editForm} class="mr-2 outline-none">
				<Edit class="h-5 w-5" />
			</button>
			<button on:click={deleteForm} class="outline-none">
				<Trash class="h-5 w-5" />
			</button>
			{/if}
		</div>
		<div class="text-2xl">{privateLesson.pricePerHour}/h zł</div>
		<span>{new Date(privateLesson.lastUpdateAt).toLocaleString()}</span>
	</div>
</div>

{#if deleteModal}
	<Modal heading="Usuń" bind:open={deleteModal}>
		<p class="whitespace-pre-line pt-6 pb-12">
			Czy jesteś pewny/a, że chcesz usunać swoje ogłoszenie <q>{privateLesson.title}</q>? Pamiętaj nie
			bedzie już można tego cofnąć.
		</p>
		<div class="flex-end flex flex-row-reverse gap-6">
			<button class="font-medium uppercase text-red-600" on:click={deletePrivateLessonId}>Usuń</button>
			<button class="font-medium uppercase text-blue-600" on:click={deleteForm}>Anuluj</button>
		</div>
	</Modal>
{/if}

{#if showMoreModal}
	<Modal heading="" bind:open={showMoreModal}>
		<div class="grid auto-cols-fr gap-y-4 lg:grid-cols-10 lg:gap-y-0 lg:gap-x-9">
			<div class="text-center lg:col-span-2">
				<div class="flex flex-col py-4 text-xl">
					<img class="rounded-full" src={user} alt="user" />
					<span>{privateLesson.studentDto.name}</span>
					<span>Email: {privateLesson.studentDto.email}</span>
					<span>Nr tel.: {privateLesson.studentDto.phone}</span>
				</div>
			</div>
			<div class="flex flex-col gap-4 lg:col-span-6">
				<div class="text-4xl">{privateLesson.title}</div>

				<div class="ml-5">
					<span class="mr-3 text-2xl">Kategoria:</span>
					{privateLesson.category}
				</div>
				<div class="ml-5">
					<span class="mr-3 text-2xl">Lokalizacja:</span>
					{privateLesson.location}
				</div>
				<p class="break-words text-justify text-2xl">
					{privateLesson.description}
				</p>
			</div>
			<div class="text-4xl lg:col-span-2">{privateLesson.pricePerHour}/h zł</div>
		</div>

		<div class="mt-3 flex items-center justify-end gap-2 text-xl font-medium">
			<Clock class="h-5 w-5" />
			{new Date(privateLesson.lastUpdateAt).toLocaleString()}
		</div>
	</Modal>
{/if}

{#if editModal}
	<Modal heading={privateLesson.title} bind:open={editModal}>
		<form on:submit|preventDefault={editPrivateLesson}>
			<div class="mt-5 grid grid-cols-2 gap-10">
				<div class="col-span-1 flex flex-col gap-10">
					<Input label="Tytuł oferty" required={true} bind:value={privateLessonForm.title} />
					<Input label="Kategoria" required={true} bind:value={privateLessonForm.category} />
					<Input label="Lokalizacja" required={true} bind:value={privateLessonForm.location} />
          <InputNumber label="Lokalizacja" required={true} bind:value={privateLessonForm.pricePerHour} />
				</div>
				<div class="grid col-span-2 h-40">
					<TextArea label="Opis oferty" bind:value={privateLessonForm.description} />
				</div>
				<div class="col-start-2">
					<Button value="Aktualizuj " type="submit" />
				</div>
			</div>
		</form>
	</Modal>
{/if}
