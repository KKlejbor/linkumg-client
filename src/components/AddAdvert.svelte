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
	import Plus from '$lib/icons/Plus.svelte';

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
	class="fixed right-0 bottom-0 m-5 h-20 w-20 rounded-full bg-bgButton font-bold text-white"
		on:click={advertType === AdvertType.COLLEGE
			? openCollegeAnnoucementForm
			: advertType === AdvertType.JOB
			? openJobAnnoucementForm
			: advertType === AdvertType.LESSON
			? openLessonAnnoucementForm
			: null}
	>
	<Plus class="mx-auto w-1/3 fill-white" />
	</button>
</div>

<!-- Work annoucement -->
{#if jobAnnoucementModal}
	<Modal heading="Ogłoszenie o pracę" bind:open={jobAnnoucementModal}>
		
			<form on:submit|preventDefault={addWorkAds}>
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
						<Button value="Dodaj ofertę " type="submit" />
					</div>
				</div>
			</form>

	</Modal>
{/if}

