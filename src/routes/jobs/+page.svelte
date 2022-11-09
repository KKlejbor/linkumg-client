<script>
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import FilterPanel from 'src/components/FilterPanel.svelte';
	import Plus from '$lib/icons/Plus.svelte';
	import Modal from "src/components/Modal.svelte";
	import Input from "src/components/Input.svelte";
	import Range from "src/components/Range.svelte";
	import TextArea from "src/components/TextArea.svelte";
	import Button from "src/components/Button.svelte";

	let jobsAnnoucementModal = false;

	const openJobsModal = () => {
		jobsAnnoucementModal = true;
	};

	const closeJobsModal = () => {
		jobsAnnoucementModal = false;
	};
</script>

<div class="w-full bg-bgSecondary">
	<FilterPanel />

	<div class="grid p-[40px] lg:grid-cols-2 lg:p-[80px] gap-[40px]">
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
	</div>

	<button on:click={openJobsModal} class="fixed right-0 bottom-0 w-20 h-20 rounded-full bg-bgButton m-5 text-white font-bold">
		<Plus class="fill-white w-1/3 mx-auto" />
	</button>
</div>

<!-- Work annoucement -->
{#if jobsAnnoucementModal}
	<Modal heading="Ogłoszenie o pracę" bind:open={jobsAnnoucementModal}>
		<div class="grid grid-cols-2 gap-10 mt-5">
			<div class="flex flex-col gap-10">
				<Input label="Tytuł oferty" required="true" />
				<Input label="Lokalizacja" required="true" />
				<Range label="Wynagrodzenie - przedział" required="true" />
			</div>
			<div class="col-span-2 h-40">
				<TextArea label="Opis oferty" required="true" />
			</div>

			<div class="col-start-2">
				<Button value="Dodaj Ogłoszenie" />
			</div>
		</div>
	</Modal>
{/if}