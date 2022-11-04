<script lang="ts">
	import user from '$lib/images/user.png';
	import localization from '$lib/images/localization.svg';
	import trash from '$lib/images/trash.svg';
	import edit from '$lib/images/edit.svg';
	import Modal from './Modal.svelte';

	let editModal = false;
	let deleteModal = false;

	const deleteForm = () => {
		deleteModal = !deleteModal;
	};
</script>

<div class="container">
	<div class="wrapper">
		<img src={user} alt="user" />
		<span>Figma Sp. z o. o</span>
	</div>
	<div class="wrapper">
		<span class="job-heading">Konserwator powierzchni płaskich</span>
		<span>Umowa o prace</span>
		<span>Pełen etat</span>
		<span>
			<img class="localization" src={localization} alt="localization" />
			Gdańsk
		</span>
	</div>
	<div class="wrapper">
		<div class="button-wrapper">
			<button src={edit} alt="edit">
				<img src={edit} alt="edit" />
			</button>
			<button on:click={deleteForm}>
				<img src={trash} alt="trash" />
			</button>
		</div>
		<div class="salary">4000 - 6000</div>
		<span>29.10.2020</span>
	</div>
</div>

{#if deleteModal}
	<Modal heading="Usuń">
		<p>
			Czy jesteś pewny/a, że chcesz usunać swoje ogłoszenie “Konserwator powierzchi płaskich”?
			Pamietaj nie bedzie już można tego cofnąć.
		</p>
		<div class="button-panel">
			<button on:click={deleteForm} class="cancel">Anuluj</button>
			<button class="delete">Usuń</button>
		</div>
	</Modal>
{/if}

<style>
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
