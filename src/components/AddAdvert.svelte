<script lang="ts">
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import user from '$lib/images/user.png';
	import { AdvertType } from 'src/enums/AdvertType';
	import type { JobOfferPost } from 'src/models/JobOffer';
	import { usePostJobOffers } from 'src/queries/useJobOffer';
	import { useQueryClient } from '@sveltestack/svelte-query';

	export let advertType: AdvertType;

	const queryClient = useQueryClient();

	let jobAnnoucementModal = false;
	let lessonAnnoucementModal = false;
	let collegeAnnoucementModal = false;

	const openJobAnnoucementForm = () => {
		jobAnnoucementModal = !jobAnnoucementModal;
	};

	const openLessonAnnoucementForm = () => {
		lessonAnnoucementModal = !lessonAnnoucementModal;
	};

	const openCollegeAnnoucementForm = () => {
		collegeAnnoucementModal = !collegeAnnoucementModal;
	};

	const postJobOffer = usePostJobOffers(queryClient, {
		onSuccess: () => {
			jobAnnoucementModal = false;
		},
		onError: () => {}
	});

	let title = '';
	let location = '';
	let salaryDown = '';
	let salaryUp = '';
	let description = '';

	const addWorkAds = () => {
		const newWorkAdsData: JobOfferPost = {
			description: description,
			location: location,
			salaryDown: parseInt(salaryDown),
			salaryUp: parseInt(salaryUp),
			title: title
		};

		$postJobOffer.mutate(newWorkAdsData);
	};
</script>

<div class="">
	<button
		on:click={advertType === AdvertType.COLLEGE
			? openCollegeAnnoucementForm
			: advertType === AdvertType.JOB
			? openJobAnnoucementForm
			: advertType === AdvertType.LESSON
			? openLessonAnnoucementForm
			: null}
	>
		+
	</button>
</div>

<!-- Work annoucement -->
{#if jobAnnoucementModal}
	<Modal heading="Ogłoszenie o pracę" open={jobAnnoucementModal}>
		<form on:submit|preventDefault={addWorkAds}>
			<Input label="Tytuł oferty" required={true} bind:value={title} />
			<Input label="Lokalizacja" required={true} bind:value={location} />
			<h6>Wynagrodzenie- przedział*</h6>
			<Input label="Od" required={true} bind:value={salaryDown} />
			<Input label="Do" required={true} bind:value={salaryUp} />
			<TextArea label="Opis oferty" bind:value={description} />
			<div class="button-panel">
				<Button bind:open={jobAnnoucementModal} value="Anuluj" error />
				<Button value="Dodaj Ogłoszenie" type="submit" />
			</div>
		</form>
	</Modal>
{/if}

<!-- Work annoucement -->
{#if lessonAnnoucementModal}
	<Modal heading="Ogłoszenie o korepetycje" open={lessonAnnoucementModal}>
		<Input label="Tytuł oferty" />
		<Input label="Lokalizacja" />
		<Input label="Kategoria" />
		<Input label="Stawka godzinowa" />
		<TextArea label="Opis oferty" />
		<div class="button-panel">
			<Button bind:open={lessonAnnoucementModal} value="Anuluj" error />
			<Button value="Dodaj Ogłoszenie" />
		</div>
	</Modal>
{/if}

<!-- Voldemort annoucement -->
{#if collegeAnnoucementModal}
	<Modal heading="Ogłoszenie uczelni" open={collegeAnnoucementModal}>
		<Input label="Tytuł ogłoszenia" />
		<TextArea label="Opis ogłoszenia" />
		<div class="college-annoucement-photo">
			<img src={user} alt="college-annoucement-photo" />
		</div>
		<div class="button-panel">
			<Button bind:open={collegeAnnoucementModal} value="Anuluj" error />
			<Button value="Dodaj Ogłoszenie" />
		</div>
	</Modal>
{/if}

<style>
	:global(body) {
		background: #f1f1f1;
	}

	:global(.modal > div:last-child) {
		align-self: center;
		display: flex;
		gap: 20px;
	}

	.college-annoucement-photo {
		width: 300px;
		height: 170px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.heading {
		margin-left: 100px;
		height: 155px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.board {
		margin-left: 100px;
		padding-top: 80px;
		display: flex;
		gap: 20px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.button-panel {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	span {
		font-size: 70px;
	}

	button {
		background-color: #0a2c4e;
		color: white;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		font-size: 33px;
		font-weight: bold;
		position: absolute;
		bottom: 30px;
		right: 30px;
	}
</style>
