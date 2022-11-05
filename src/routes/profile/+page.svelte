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
		if(isEditProfileActive)
			editSocial = !editSocial;
	};
</script>

<div>
	<span class="heading">Profil</span>
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
		<div class="user-details" style="align-items: center;">
			<div class="user-avatar">
				<img src={user} alt="user" class="user-avatar-img" />
			</div>
			<button on:click={activeEditProfileMode} class="button">{ isEditProfileActive ? 'Zakończ edytowanie profilu' : 'Edytuj profil' }</button>
		</div>
		<div class="user-details">
			{#if !isEditProfileActive}
				<UserDetailsProperty heading="Imię" value="Jan" />
				<UserDetailsProperty heading="Nazwisko" value="Kowalski" />
				<UserDetailsProperty heading="Wiek" value="23 lat" />
				<UserDetailsProperty heading="Lokalizacja" value="Gdynia" />
				<UserDetailsProperty heading="Kontakt" value="569034436" />
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
</div>

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
		position: relative;
		display: grid;
		padding: 0 100px;
		grid-template-areas: 'a b c';
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: minmax(100px, auto);
		height: 60vh;
	}

	.container > * {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.about-me-heading {
		font-size: 30px;
		font-weight: bold;
		margin-left: 30px;
		margin-bottom: 20px;
	}

	.description {
		margin: 0 30px;
		font-size: 28px;
		text-align: justify;
		text-justify: inter-word;
		overflow-y: auto;
		word-break: break-word;
	}

	.user-details {
		gap: 30px;
		margin: 0 30px;
	}

	.button {
		position: absolute;
		bottom: 0;
		height: 50px;
		background: #0a2c4e;
		color: white;
		border-radius: 25px;
		width: 190px;
		border: none;
	}

	.socials {
		display: flex;
		gap: 30px;
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
		border-radius: 50%;
	}

	.user-avatar {
		border-left: 1px solid #0A2C4E;
		border-right: 1px solid #0A2C4E;
		width: 100%;
		margin: 0 30px;
	}

	.user-avatar-img {
		display: block;
		width: 70%;
		margin: 0 auto;
	}

	@media only screen and (max-width: 1024px) {
		.container {
			display: block;
			padding: 20px;
		}
		
		.button {
			margin-bottom: 15px;
			margin-right: 15px;
			right: 0;
			position: fixed;
		}

		.user-avatar {
			border: none;
		}
	}
</style>
