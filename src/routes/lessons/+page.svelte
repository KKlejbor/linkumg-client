<script>
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import FilterPanel from 'src/components/FilterPanel.svelte';
	import Plus from '$lib/icons/Plus.svelte';
	import Modal from 'src/components/Modal.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import Input from 'src/components/Input.svelte';
	import Button from 'src/components/Button.svelte';

	let lessonsAnnoucementModal = false;

	const openLessonsModal = () => {
		lessonsAnnoucementModal = true;
	};

	const closeLessonsModal = () => {
		lessonsAnnoucementModal = false;
	};
</script>

<div class="w-full bg-bgSecondary">
	<FilterPanel />

	<div class="grid gap-[40px] p-[40px] lg:grid-cols-2 lg:p-[80px]">
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
	</div>

	<button
		on:click={openLessonsModal}
		class="fixed right-0 bottom-0 m-5 h-20 w-20 rounded-full bg-bgButton font-bold text-white"
	>
		<Plus class="mx-auto w-1/3 fill-white" />
	</button>
</div>

<!-- Lessons annoucement -->
{#if lessonsAnnoucementModal}
	<Modal heading="Ogłoszenie o korepetycje" bind:open={lessonsAnnoucementModal}>
		<div class="mt-5 grid grid-cols-2 gap-10">
			<div class="flex flex-col gap-10">
				<Input label="Tytuł oferty" required="true" />
				<Input label="Lokalizacja" required="true" />
				<Input label="Kategoria" required="true" />
			</div>
			<div>
				<Input label="Stawka godzinowa" required="true" />
			</div>
			<div class="col-span-2 h-40">
				<TextArea label="Opis oferty" required="true" />
			</div>
			<div class="col-start-2" on:click={closeLessonsModal}>
				<Button value="Dodaj ogłoszenie" />
			</div>
		</div>
	</Modal>
{/if}
