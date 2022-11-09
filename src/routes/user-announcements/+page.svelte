<script>
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Range from 'src/components/Range.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import user from '$lib/images/user.png';
	import Plus from '$lib/icons/Plus.svelte';
	import pepe from '$lib/images/pepe.png';

	let addAnnoucementModal = false;
	let tutorAnnoucementModal = false;
	let collegeAnnoucementModal = false;

	const openAnnoucementForm = () => {
		addAnnoucementModal = !addAnnoucementModal;
	};

	const openTutorAnnoucementForm = () => {
		tutorAnnoucementModal = !tutorAnnoucementModal;
	};

	const openColllegeAnnoucementForm = () => {
		collegeAnnoucementModal = !collegeAnnoucementModal;
	};
</script>

<div class="break-words w-full">
	<div class="text-7xl text-center py-10 w-full bg-white shadow">Twoje ogłoszenia</div>

	<div class="flex flex-col w-3/4 lg:w-1/2 gap-10 justify-center mx-auto py-14">

		<!-- brak ogłoszeń -->
		<div class="text-5xl flex flex-col gap-y-16 text-center items-center">
			<div>
				Wygląda na to, że nie masz żadnego aktywnego ogłoszenia :(
			</div>

			<div>
				Możesz dodać nowe ogłoszenie klikając przycisk na dole.
			</div>

			<img src={pepe} class="w-80 h-80" alt="pepe" />
		</div>

		<!-- są ogłoszenia -->
		<!--
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
		-->
	</div>

	<button on:click={openColllegeAnnoucementForm} class="fixed right-0 bottom-0 w-20 h-20 rounded-full bg-bgButton m-5 text-white font-bold">
		<Plus class="fill-white w-1/3 mx-auto" />
	</button>
</div>

<!-- Work annoucement -->
{#if addAnnoucementModal}
	<Modal heading="Ogłoszenie o pracę" open={addAnnoucementModal}>
		<Input label="Tytuł oferty" />
		<Input label="Lokalizacja" />
		<Range label="Wynagrodzenie - przedział" />
		<TextArea label="Opis oferty" />
		<div class="button-panel">
			<Button bind:open={addAnnoucementModal} value="Anuluj" error />
			<Button value="Dodaj Ogłoszenie" />
		</div>
	</Modal>
{/if}

<!-- Lessons annoucement -->
{#if tutorAnnoucementModal}
	<Modal heading="Ogłoszenie o korepetycje" open={tutorAnnoucementModal}>
		<Input label="Tytuł oferty" />
		<Input label="Lokalizacja" />
		<Input label="Kategoria" />
		<Input label="Stawka godzinowa" />
		<TextArea label="Opis oferty" />
		<div class="button-panel">
			<Button bind:open={tutorAnnoucementModal} value="Anuluj" error />
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