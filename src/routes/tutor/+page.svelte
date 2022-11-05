<script lang="ts">
	import CollegeAnnocement from 'src/components/CollegeAnnocement.svelte';
	import Modal from 'src/components/Modal.svelte';

	let tutorAnnoucementModal = false;

	const openTutorAnnoucementForm = () => {
		tutorAnnoucementModal = !tutorAnnoucementModal;
	};
</script>

<svelte:head>
	<title>Ogłoszenia uczelni</title>
</svelte:head>

<div class="container">
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
</div>

<button> + </button>

<style>
	:global(body) {
		background-color: #f1f1f1;
	}

	.container {
		padding: 100px 80px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		flex-direction: column;
		gap: 40px;
		align-items: center;
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

	@media only screen and (max-width: 1024px) {
		.container {
			grid-template-columns: unset;
			padding: 30px 20px;
		}

		button {
			position: fixed;
		}
	}
</style>
