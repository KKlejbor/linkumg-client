<script lang="ts">
	import user from '$lib/images/user.png';
	import Localization from '../../lib/icons/Localization.svelte';
	import Trash from '../../lib/icons/Trash.svelte';
	import Edit from '../../lib/icons/Edit.svelte';
	import Modal from '../Modal.svelte';
	import Button from 'src/components/Form/Button.svelte';
	import { useDeleteJobOffers, usePatchJobOffers } from 'src/queries/useJobOffer';
	import Input from 'src/components/Form/Input.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import type { JobOffer, JobOfferPost } from 'src/models/JobOffer';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { getNotificationsContext } from 'svelte-notifications';
	import Clock from '../../lib/icons/Clock.svelte';
	import { notification } from 'src/locales/pl/common.json';
	import { notificationLocation, notificationTime } from 'src/utils/globalState';

	const { addNotification } = getNotificationsContext();

	export let jobOffer: JobOffer;

	const queryClient = useQueryClient();

	const deleteJobOffer = useDeleteJobOffers(queryClient, {
		onSuccess: () => {
			deleteForm();
			addNotification({
				text: notification.jobOffer.delete.success,
				type: 'success',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		},
		onError: () => {
			addNotification({
				text: notification.jobOffer.delete.error,
				type: 'error',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		}
	});

	const patchJobOffer = usePatchJobOffers(queryClient, jobOffer.offerId, {
		onSuccess: () => {
			editForm();
			addNotification({
				text: notification.jobOffer.update.success,
				type: 'success',
				position: notificationLocation,
				removeAfter: notificationTime,
			});
		},
		onError: () => {
			addNotification({
				text: notification.jobOffer.update.error,
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

	const deleteJobOfferById = () => {
		$deleteJobOffer.mutate(jobOffer.offerId);
	};

	let title = jobOffer.title;
	let location = jobOffer.location;
	let salaryDown = jobOffer.salaryDown.toString();
	let salaryUp = jobOffer.salaryUp.toString();
	let description = jobOffer.description;

	const editWorkAds = () => {
		const editWorkAdsData: JobOfferPost = {
			description: description,
			location: location,
			salaryDown: parseInt(salaryDown),
			salaryUp: parseInt(salaryUp),
			title: title
		};

		$patchJobOffer.mutate(editWorkAdsData);
	};
</script>

<div class="grid grid-cols-10 gap-x-5 break-words rounded-lg bg-white p-4 shadow-md">
	<div class="col-span-2">
		<img src={user} alt="user" class="mb-2 rounded-full" />
		<span>{jobOffer.companyDto.name}</span>
	</div>
	<div class="col-span-6 flex flex-col justify-between text-xl">
		<span class="cursor-pointer text-3xl" on:click={showMore}>{jobOffer.title}</span>
		<span>Umowa o prace</span>
		<span>Pełen etat</span>
		<span class="flex items-center gap-1.5">
			<Localization class="h-4 w-4" />
			{jobOffer.location}
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
		<div class="text-2xl">{jobOffer.salaryDown} - {jobOffer.salaryUp} zł</div>
		<span>{jobOffer.createdAt}</span>
	</div>
</div>

{#if deleteModal}
	<Modal heading="Usuń" bind:open={deleteModal}>
		<p class="whitespace-pre-line pt-6 pb-12">
			Czy jesteś pewny/a, że chcesz usunać swoje ogłoszenie <q>{jobOffer.title}</q>? Pamiętaj nie
			bedzie już można tego cofnąć.
		</p>
		<div class="flex-end flex flex-row-reverse gap-6">
			<button class="font-medium uppercase text-red-600" on:click={deleteJobOfferById}>Usuń</button>
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
					<span>{jobOffer.companyDto.name}</span>
					<span>Email: {jobOffer.companyDto.email}</span>
					<span>Nr tel.: {jobOffer.companyDto.phone}</span>
				</div>
			</div>
			<div class="flex flex-col gap-4 lg:col-span-6">
				<div class="text-4xl">{jobOffer.title}</div>

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
					{jobOffer.location}
				</div>
				<p class="break-words text-justify text-2xl">
					{jobOffer.description}
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

{#if editModal}
	<Modal heading={jobOffer.title} bind:open={editModal}>
		<form on:submit|preventDefault={editWorkAds}>
			<div class="mt-5 grid grid-cols-2 gap-10">
				<div class="col-span-1 flex flex-col gap-10">
					<Input label="Tytuł oferty" required={true} bind:value={title} />
					<Input label="Lokalizacja" required={true} bind:value={location} />
					<h4 class="-mb-5">Wynagrodzenie- przedział*</h4>
					<div class="flex gap-10">
						<Input label="Od" required={true} bind:value={salaryDown} />
						<span>-</span>
						<Input label="Do" required={true} bind:value={salaryUp} />
					</div>
				</div>
				<div class="grid col-span-2 h-40">
					<TextArea label="Opis oferty" bind:value={description} />
				</div>
				<div class="col-start-2">
					<Button value="Aktualizuj " type="submit" />
				</div>
			</div>
		</form>
	</Modal>
{/if}
