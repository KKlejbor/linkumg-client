<script lang="ts">
	import CollegeAnnocement from 'src/components/CollegeAnnocement.svelte';
	import Plus from '$lib/icons/Plus.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Input from 'src/components/Input.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import Button from 'src/components/Button.svelte';
	import user from '$lib/images/user.png';

	let collegeAnnouncementModal = false;

	const openCollegeAnnouncementForm = () => {
		collegeAnnouncementModal = true;
	};

	const closeCollegeAnnouncementForm = () => {
		collegeAnnouncementModal = false;
	};
</script>

<svelte:head>
	<title>Ogłoszenia uczelni</title>
</svelte:head>

<div class="grid w-full gap-12 p-14 lg:grid-cols-2">
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
</div>

<button
	on:click={openCollegeAnnouncementForm}
	class="fixed right-0 bottom-0 m-5 h-20 w-20 rounded-full bg-bgButton font-bold text-white"
>
	<Plus class="mx-auto w-1/3 fill-white" />
</button>

{#if collegeAnnouncementModal}
	<Modal heading="Ogłoszenie uczelni" bind:open={collegeAnnouncementModal}>
		<div class="my-5 flex flex-col gap-5">
			<Input label="Tytuł ogłoszenia" />
			<div class="h-40">
				<TextArea label="Opis ogłoszenia" required="true" />
			</div>
			<div class="w-1/2">
				<label>Zdjęcie ogłoszenia:</label>
				<img src={user} alt="user" />
			</div>
		</div>
		<div>
			<Button value="Dodaj Ogłoszenie" />
		</div>
	</Modal>
{/if}
