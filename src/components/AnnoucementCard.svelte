<script lang="ts">
	import user from '$lib/images/user.png';
	import localization from '$lib/images/localization.svg';
	import trash from '$lib/images/trash.svg';
	import edit from '$lib/images/edit.svg';
	import Modal from './Modal.svelte';
	import Button from './Button.svelte';
	import { useDeleteJobOffers, usePatchJobOffers } from 'src/queries/useJobOffer';
	import Input from 'src/components/Input.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import type { JobOffer, JobOfferPost } from 'src/models/JobOffer';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { getNotificationsContext } from 'svelte-notifications';

	const { addNotification } = getNotificationsContext();

	export let jobOffer: JobOffer;

	const queryClient = useQueryClient();

	const deleteJobOffer = useDeleteJobOffers(queryClient, {
		onSuccess: () => {
			deleteForm();
			addNotification({
				text: 'Pomyślnie usunięto ofertę',
				type: 'success',
				position: 'bottom-right'
			});
		},
		onError: () => {}
	});

	const patchJobOffer = usePatchJobOffers(queryClient, jobOffer.offerId, {
		onSuccess: () => {
			editForm();
			addNotification({
				text: 'Pomyślnie zaktualizowano ofertę',
				type: 'success',
				position: 'bottom-right'
			});
		},
		onError: () => {}
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container">
	<div class="wrapper">
		<img src={user} alt="user" />
		<span>{jobOffer.companyDto.name}</span>
	</div>
	<div class="wrapper" on:click={showMore}>
		<span class="job-heading">{jobOffer.title}</span>
		<span>Umowa o prace</span>
		<span>Pełen etat</span>
		<span>
			<img class="localization" src={localization} alt="localization" />
			{jobOffer.location}
		</span>
	</div>
	<div class="wrapper">
		<div class="button-wrapper">
			<button on:click={editForm}>
				<img src={edit} alt="edit" />
			</button>
			<button on:click={deleteForm}>
				<img src={trash} alt="trash" />
			</button>
		</div>
		<div class="salary">{jobOffer.salaryDown} - {jobOffer.salaryUp}</div>
		<span>{jobOffer.createdAt}</span>
	</div>
</div>

{#if deleteModal}
	<Modal heading="Usuń">
		<p>
			Czy jesteś pewny/a, że chcesz usunać swoje ogłoszenie “Konserwator powierzchi płaskich”?
			Pamietaj nie bedzie już można tego cofnąć.
		</p>
		<div class="button-panel">
			<button class="cancel" on:click={deleteForm}>Anuluj</button>
			<button class="delete" on:click={deleteJobOfferById}>Usuń</button>
		</div>
	</Modal>
{/if}

{#if showMoreModal}
	<Modal heading={jobOffer.title} open={showMoreModal}>
		<div class="more-info-container">
			<div>
				<img class="photo" src={user} alt="user" />
				<div class="info-wrapper">
					<span>{jobOffer.companyDto.name}</span>
					<span>Email: {jobOffer.companyDto.email}</span>
					<span>Nr tel.: {jobOffer.companyDto.phone}</span>
				</div>
			</div>
			<div class="long-details">
				<span>Typ umowy: Umowa o prace</span>
				<span>Etat: Pełen etat</span>
				<span>{jobOffer.description}</span>
				<Button value="Zamknij" error bind:open={showMoreModal} />
			</div>
			<div class="price">
				<span class="salary">{jobOffer.salaryDown} - {jobOffer.salaryUp}</span>
				<span class="date">{jobOffer.createdAt}</span>
			</div>
		</div>
	</Modal>
{/if}

{#if editModal}
	<Modal heading={jobOffer.title}>
		<form on:submit|preventDefault={editWorkAds}>
			<Input label="Tytuł oferty" required={true} bind:value={title} />
			<Input label="Lokalizacja" required={true} bind:value={location} />
			<h6>Wynagrodzenie- przedział*</h6>
			<Input label="Od" required={true} bind:value={salaryDown} />
			<Input label="Do" required={true} bind:value={salaryUp} />
			<TextArea label="Opis oferty" bind:value={description} />
			<div class="button-panel">
				<Button value="Anuluj" on:click={editForm} error />
				<Button value="Dodaj Ogłoszenie" type="submit" />
			</div>
		</form>
	</Modal>
{/if}

<style>
	.salary {
		font-size: 40px;
	}

	.date {
		font-size: 14px;
	}
	.more-info-container {
		display: grid;
		max-width: 1000px;
		grid-template-areas: 'a b c';
		grid-column-gap: 25px;
		grid-template-columns: 300px 1fr 300px;
		grid-auto-rows: minmax(100px, auto);
	}

	.more-info-container > div:first-child {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
	}

	.more-info-container > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: space-around;
	}

	.more-info-container > div:nth-child(3) {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: space-around;
		align-items: flex-end;
	}

	.info-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.photo {
		width: 250px;
		height: 250px;
	}
	.container {
		width: 800px;
		height: 150px;
		padding: 15px;
		background-color: white;
		border-radius: 15px;
		display: grid;
		grid-template-areas: 'a b c';
		grid-template-columns: 150px 1fr 150px;
		grid-column-gap: 25px;
		grid-auto-rows: minmax(100px, auto);
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.localization {
		width: 8px;
		height: 12px;
	}

	.job-heading {
		font-size: 25px;
	}

	.wrapper:last-child > * {
		display: flex;
		justify-content: flex-end;
	}

	.salary {
		font-size: 25px;
	}

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	button {
		border: none;
		background-color: transparent;
		font-size: 15px;
	}

	.cancel {
		color: #0a2c4e;
	}

	.delete {
		color: red;
	}

	.button-panel {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
	}

	button > img {
		width: 20px;
		height: 20px;
	}
</style>
