<script lang="ts">
	import user from '$lib/images/user.png';
	import UserDetailsProperty from 'src/components/UserDetailsProperty.svelte';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
	import facebook from '$lib/images/facebook.svg';
	import Input from 'src/components/Input.svelte';
	import Modal from 'src/components/Modal.svelte';

	let isEditProfileActive = false;
	let editSocial = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = !isEditProfileActive;
	};

	const editSocials = () => {
		editSocial = !editSocial;
	};
</script>

<span class="heading">Profile</span>
<div class="container">
	<div class="about-me">
		<span class="about-me-heading">O mnie</span>
		<p class="description">
			Kiedy zdarzy się, że ktoś ma jakiś problem albo kłopot zawsze staram się mu jak najlepiej
			pomóc. Jestem człowiekiem spokojnym, otwartym i szczerym. Ta szczerość niestety nie zawsze
			jest odbierana w pozytywny sposób przez drugie osoby. Ja jednak uważam, że każdy powinien być
			z drugą osobą szczery i powiedzieć jej co myśli w danej sytuacji. Wnoszę pogodny nastrój w
			moim otoczeniu, razem z przyjaciółmi nie potrafię się nudzić. Zawsze potrafimy znaleźć sobie
			ciekawe zajęcie.
		</p>
	</div>
	<div class="user-details">
		<img src={user} alt="user" />
		<button on:click={activeEditProfileMode} class="button">Edytuj profil</button>
	</div>
	<div class="user-details">
		{#if !isEditProfileActive}
			<UserDetailsProperty heading="Imię" value="Jan" />
			<UserDetailsProperty heading="Nazwisko" value="Kowalski" />
			<UserDetailsProperty heading="Wiek" value="23 lat" />
			<UserDetailsProperty heading="Lokalizacja" value="Gdynia" />
			<UserDetailsProperty heading="Kontkt" value="569034436" />
		{:else}
			<Input label="Imię" />
			<Input label="Nazwisko" />
			<Input label="Wiek" />
			<Input label="Lokalizacja" />
			<Input label="Kontakt" />
		{/if}
		<div class="socials">
			<img on:click={editSocials} src={linkedin} alt="linkedin" />
			<img on:click={editSocials} src={github} alt="github" />
			<img on:click={editSocials} src={facebook} alt="facebook" />
		</div>
	</div>
</div>
{#if editSocial}
	<Modal heading="Edytuj">
		<Input label="Link do Facebooka" />
		<div class="button-panel">
			<button class="control-button red">Usuń</button>
			<button on:click={editSocials} class="control-button">Anuluj</button>
			<button class="control-button">Potwierdź</button>
		</div>
	</Modal>
{/if}

<style>
	.heading {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 45px 0;
		text-align: center;
		font-size: 70px;
	}

	.container {
		display: grid;
		margin-left: 100px;
		grid-template-areas: 'a b c';
		grid-column-gap: 25px;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: minmax(100px, auto);
	}

	.container > * {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.about-me-heading {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.description {
		margin: 0 30px;
		font-size: 28px;
	}

	.user-details {
		gap: 20px;
	}

	.button {
		height: 50px;
		background: #0a2c4e;
		color: white;
		border-radius: 25px;
		width: 190px;
		border: none;
	}

	.socials {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.socials > * {
		width: 40px;
		height: 40px;
		cursor: pointer;
	}

	.button-panel {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
	}

	.control-button {
		border: none;
		background-color: transparent;
		color: #0a2c4e;
		font-size: 15px;
		cursor: pointer;
	}

	.red {
		color: red;
	}

	img {
		width: 400px;
		height: 400px;
		border-radius: 50%;
	}
</style>
