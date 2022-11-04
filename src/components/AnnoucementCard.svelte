<script lang="ts">
	import user from '$lib/images/user.png';
	import localization from '$lib/images/localization.svg';
	import trash from '$lib/images/trash.svg';
	import edit from '$lib/images/edit.svg';
	import Modal from './Modal.svelte';
	import Button from './Button.svelte';

	let editModal = false;
	let deleteModal = false;
	let showMoreModal = false;

	const deleteForm = () => {
		deleteModal = !deleteModal;
	};

	const showMore = () => {
		showMoreModal = !showMoreModal;
	};
</script>

<div class="container" on:click={showMore}>
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

{#if showMoreModal}
	<Modal heading="Konserwator powierzchni płaskich" open={showMoreModal}>
		<div class="more-info-container">
			<div>
				<img class="photo" src={user} alt="user" />
				<div class="info-wrapper">
					<span>Figma Sp. z.o.o</span>
					<span>Email: nanana@gmail.com</span>
					<span>Nr tel.: 123456789</span>
				</div>
			</div>
			<div class="long-details">
				<span>Typ umowy: Umowa o prace</span>
				<span>Etat: Pełen etat</span>
				<span
					>Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
					pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
					jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien
					być z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny
					nastrój w moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy
					znaleźć sobie ciekawe zajęcie.</span
				>
				<Button value="Zamknij" error bind:open={showMoreModal} />
			</div>
			<div class="price">
				<span class="salary">4000 - 6000 zł</span>
				<span class="date">29.10.2020 | 21:34</span>
			</div>
		</div>
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
