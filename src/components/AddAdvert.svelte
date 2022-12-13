<script lang="ts">
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import { AdvertType } from 'src/enums/AdvertType';
	import type { JobOfferPost } from 'src/models/JobOffer';
	import { usePostJobOffers } from 'src/queries/useJobOffer';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import Plus from '$lib/icons/Plus.svelte';
	import user from '$lib/images/user.png';
	import InputNumber from './Form/InputNumber.svelte';
	import { usePostPrivateLesson } from 'src/queries/usePrivateLesson';
	import type { PrivateLesson, PrivateLessonPost } from 'src/models/PrivateLesson';
	import { usePostAnnouncement } from 'src/queries/useAnnouncement';
	import type { AnnouncementPost } from 'src/models/Announcement';
	import { getNotificationsContext } from 'svelte-notifications';

	export let advertType: AdvertType;

	const queryClient = useQueryClient();
	const { addNotification } = getNotificationsContext();

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

	/* Work Query */
	const postJobOffer = usePostJobOffers(queryClient, {
		onSuccess: () => {
			jobAnnoucementModal = false;
		},
		onError: (response) => {
			addNotification({
				text: response.response.data,
				type: 'error',
				position: 'bottom-center',
				removeAfter: 4000,
			});
		}
	});

	let newJobsForm: JobOfferPost = {
		description: '',
		location: '',
		salaryDown: 0,
		salaryUp: 0,
		title: ''
	};
	const addWorkAds = () => {
		const newJobData: JobOfferPost = {
			description: newJobsForm.description,
			location: newJobsForm.location,
			salaryDown: newJobsForm.salaryDown,
			salaryUp: newJobsForm.salaryUp,
			title: newJobsForm.title
		};

		$postJobOffer.mutate(newJobData);
	};

	/* ******************* */
	/* Lessons Query */

	const postPrivateLesson = usePostPrivateLesson(queryClient, {
		onSuccess: () => {
			lessonAnnoucementModal = false;
		},
		onError: (response) => {
			addNotification({
				text: response.response.data,
				type: 'error',
				position: 'bottom-center',
				removeAfter: 4000,
			});
		}
	});

	let newPrivateLessonForm: PrivateLessonPost = {
		description: '',
		location: '',
		pricePerHour: 0,
		category: '',
		title: ''
	};
	const addLessonsAds = () => {
		const newPrivateLessonData: PrivateLessonPost = {
			description: newPrivateLessonForm.description,
			location: newPrivateLessonForm.location,
			pricePerHour: newPrivateLessonForm.pricePerHour,
			category: newPrivateLessonForm.category,
			title: newPrivateLessonForm.title
		};

		$postPrivateLesson.mutate(newPrivateLessonData);
	};

	/* ******************* */
	/* Announcement Query */

	const postAnnouncement = usePostAnnouncement(queryClient, {
		onSuccess: () => {
			collegeAnnoucementModal = false;
		},
		onError: (response) => {
			addNotification({
				text: response.response.data,
				type: 'error',
				position: 'bottom-center',
				removeAfter: 4000,
			});
		}
	});

	let newAnnouncementForm: AnnouncementPost = {
		description: '',
		pathToAnnouncementImage: '',
		title: ''
	};
	const addAnnouncementAds = () => {
		const newAnnouncementData: AnnouncementPost = {
			description: newAnnouncementForm.description,
			pathToAnnouncementImage: newAnnouncementForm.pathToAnnouncementImage,
			title: newAnnouncementForm.title
		};

		$postAnnouncement.mutate(newAnnouncementData);
	};

	/* ******************* */
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
					<Input label="Tytuł oferty" required={true} bind:value={newJobsForm.title} />
					<Input label="Lokalizacja" required={true} bind:value={newJobsForm.location} />
					<h4 class="-mb-5">Wynagrodzenie- przedział*</h4>
					<div class="flex gap-10">
						<InputNumber label="Od" required={true} bind:value={newJobsForm.salaryDown} />
						<span>-</span>
						<InputNumber label="Do" required={true} bind:value={newJobsForm.salaryUp} />
					</div>
				</div>
				<div class="grid col-span-2 h-40">
					<TextArea label="Opis oferty" bind:value={newJobsForm.description} />
				</div>
				<div class="col-start-2">
					<Button value="Dodaj ofertę " type="submit" />
				</div>
			</div>
		</form>
	</Modal>
{/if}

<!-- Lessons annoucement -->
{#if lessonAnnoucementModal}
	<Modal heading="Ogłoszenie o korepetycje" bind:open={lessonAnnoucementModal}>
		<form on:submit|preventDefault={addLessonsAds}>
			<div class="mt-5 grid grid-cols-2 gap-10">
				<div class="flex flex-col gap-10">
					<Input label="Tytuł oferty" required={true} bind:value={newPrivateLessonForm.title} />
					<Input label="Lokalizacja" required={true} bind:value={newPrivateLessonForm.location} />
					<Input label="Kategoria" required={true} bind:value={newPrivateLessonForm.category} />
				</div>
				<div>
					<InputNumber
						label="Stawka godzinowa"
						required={true}
						bind:value={newPrivateLessonForm.pricePerHour}
					/>
				</div>
				<div class="col-span-2 h-40">
					<TextArea
						label="Opis oferty"
						required={true}
						bind:value={newPrivateLessonForm.description}
					/>
				</div>
				<div class="col-start-2">
					<Button value="Dodaj ogłoszenie" />
				</div>
			</div>
		</form>
	</Modal>
{/if}

<!-- College annoucement -->
{#if collegeAnnoucementModal}
	<Modal heading="Ogłoszenie uczelni" bind:open={collegeAnnoucementModal}>
		<form on:submit|preventDefault={addAnnouncementAds}>
			<div class="my-5 flex flex-col gap-5">
				<Input label="Tytuł ogłoszenia" required={true} bind:value={newAnnouncementForm.title} />
				<div class="h-40">
					<TextArea label="Opis ogłoszenia" required={true} bind:value={newAnnouncementForm.description} />
				</div>
				<div class="w-1/2">
					<label>Zdjęcie ogłoszenia:</label>
					<img src={user} alt="user" />
					<Input label="temp: adres zdjęcia" required={true} bind:value={newAnnouncementForm.pathToAnnouncementImage} />
				</div>
			</div>
			<div>
				<Button value="Dodaj Ogłoszenie" />
			</div>
		</form>
	</Modal>
{/if}
