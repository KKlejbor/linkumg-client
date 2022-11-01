<script lang="ts">
	import user from '$lib/images/user.png';
	import UserDetailsProperty from 'src/components/UserDetailsProperty.svelte';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
	import facebook from '$lib/images/facebook.svg';
	import Input from 'src/components/Input.svelte';

	let isEditProfileActive = false;

	const activeEditProfileMode = () => {
		isEditProfileActive = !isEditProfileActive;
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
			<img src={linkedin} alt="linkedin" />
			<img src={github} alt="github" />
			<img src={facebook} alt="facebook" />
		</div>
	</div>
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

	img {
		width: 400px;
		height: 400px;
		border-radius: 50%;
	}
</style>
