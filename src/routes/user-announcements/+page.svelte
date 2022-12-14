<script>
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Range from 'src/components/Form/Range.svelte';
	import TextArea from 'src/components/Form/TextArea.svelte';
	import user from '$lib/images/userDefault.png';
	import Plus from '$lib/icons/Plus.svelte';
	import pepe from '$lib/images/pepe.png';
	import Select from 'src/components/Form/Select.svelte';

	let selectAnnouncementTypeModal = false;
	let collegeAnnouncementModal = false;
	let lessonsAnnouncementModal = false;
	let jobsAnnouncementModal = false;

	const modalAnnouncementTypes = [
		'Wybierz rodzaj ogłoszenia',
		'Ogłoszenie uczelni',
		'Ogłoszenie o pracę',
		'Ogłoszenie o korepetycje'
	];
	let announcementSelected = modalAnnouncementTypes[0];

	const openSelectAnnouncementTypeModal = () => {
		announcementSelected = modalAnnouncementTypes[0];
		selectAnnouncementTypeModal = true;
	};

	const changeAnnouncementType = () => {
		if (announcementSelected !== 'Wybierz rodzaj ogłoszenia') {
			selectAnnouncementTypeModal = false;

			switch (announcementSelected) {
				case 'Ogłoszenie uczelni':
					collegeAnnouncementModal = true;
					break;
				case 'Ogłoszenie o pracę':
					jobsAnnouncementModal = true;
					break;
				case 'Ogłoszenie o korepetycje':
					lessonsAnnouncementModal = true;
					break;
			}
		}
	};
</script>

<div class="w-full break-words">
	<div class="w-full bg-white py-10 text-center text-7xl shadow">Twoje ogłoszenia</div>

	<div class="mx-auto flex w-3/4 flex-col justify-center gap-10 py-14 lg:w-1/2">
		<!-- brak ogłoszeń -->
		<div class="flex flex-col items-center gap-y-16 text-center text-5xl">
			<div>Wygląda na to, że nie masz żadnego aktywnego ogłoszenia :(</div>

			<div>Możesz dodać nowe ogłoszenie klikając przycisk na dole.</div>

			<img src={pepe} class="h-80 w-80" alt="pepe" />
		</div>
	</div>

	<button
		on:click={openSelectAnnouncementTypeModal}
		class="fixed right-0 bottom-0 m-5 h-20 w-20 rounded-full bg-bgButton font-bold text-white"
	>
		<Plus class="mx-auto w-1/3 fill-white" />
	</button>
</div>

{#if selectAnnouncementTypeModal}
	<Modal heading="Wybierz rodzaj ogłoszenia" bind:open={selectAnnouncementTypeModal}>
		<div class="py-4">
			<Select
				id="announcementType"
				label="Jakie ogłoszenie chcesz dodać?"
				options={modalAnnouncementTypes}
				on:changeOption={changeAnnouncementType}
				bind:selected={announcementSelected}
			/>
		</div>
	</Modal>
{/if}

<!-- Work annoucement -->
{#if jobsAnnouncementModal}
	<Modal heading="Ogłoszenie o pracę" bind:open={jobsAnnouncementModal}>
		<div class="mt-5 grid grid-cols-2 gap-10">
			<div class="flex flex-col gap-10">
				<Input label="Tytuł oferty" required={true} />
				<Input label="Lokalizacja" required={true} />
				<Range label="Wynagrodzenie - przedział" required={true} />
			</div>
			<div class="col-span-2 h-40">
				<TextArea label="Opis oferty" required={true} />
			</div>

			<div class="col-start-2">
				<Button value="Dodaj Ogłoszenie" />
			</div>
		</div>
	</Modal>
{/if}

<!-- Lessons annoucement -->
{#if lessonsAnnouncementModal}
	<Modal heading="Ogłoszenie o korepetycje" bind:open={lessonsAnnouncementModal}>
		<div class="mt-5 grid grid-cols-2 gap-10">
			<div class="flex flex-col gap-10">
				<Input label="Tytuł oferty" required={true} />
				<Input label="Lokalizacja" required={true} />
				<Input label="Kategoria" required={true} />
			</div>
			<div>
				<Input label="Stawka godzinowa" required={true} />
			</div>
			<div class="col-span-2 h-40">
				<TextArea label="Opis oferty" required={true} />
			</div>
			<div class="col-start-2">
				<Button value="Dodaj ogłoszenie" />
			</div>
		</div>
	</Modal>
{/if}

<!-- College annoucement -->
{#if collegeAnnouncementModal}
	<Modal heading="Ogłoszenie uczelni" bind:open={collegeAnnouncementModal}>
		<div class="my-5 flex flex-col gap-5">
			<Input label="Tytuł ogłoszenia" />
			<div class="h-40">
				<TextArea label="Opis ogłoszenia" required={true} />
			</div>
			<div class="w-1/2">
				<label>Zdjęcie ogłoszenia:</label>
				<img src={user} alt="user" />
			</div>
		</div>
		<div>
			<Button value="Dodaj Ogłoszenie" />
		</div>
	</Modal>
{/if}
