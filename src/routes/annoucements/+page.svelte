<script>
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import Button from 'src/components/Button.svelte';
	import Input from 'src/components/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Range from 'src/components/Range.svelte';
	import TextArea from 'src/components/TextArea.svelte';
	import user from '$lib/images/user.png';

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

<div style="">
	<div class="heading">
		<span>Twoje ogłoszenia</span>
	</div>

	<div class="board">
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
	</div>
	<button on:click={openColllegeAnnoucementForm}> + </button>
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

<!-- Work annoucement -->
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

	button:hover {
		cursor: pointer;
	}
</style>
