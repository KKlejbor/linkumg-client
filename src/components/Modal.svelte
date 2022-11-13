<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Close from '../lib/icons/Close.svelte';
	import { clickOutside } from '../utils/clickOutside.ts';

	export let heading: string;
	export let open = false;

	const closeModal = () => {
		open = false;

		const body = document.querySelector<HTMLElement>('body');
		if (body != null) {
			body.style.overflow = 'auto';
		}
	};

	const keyPress = (event) => {
		if (event.key === 'Escape') closeModal();
	};

	onMount(() => {
		window.addEventListener('keydown', keyPress);

		const body = document.querySelector<HTMLElement>('body');
		if (body != null) {
			if (open) {
				body.style.overflow = 'hidden';
			}
		}
	});

	onDestroy(() => {
		window.removeEventListener('keydown', keyPress);

		const body = document.querySelector<HTMLElement>('body');
		if (body != null) {
			if (open) {
				body.style.overflow = 'auto';
			}
		}
	});
</script>

<div
	class="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-70"
>
	<div
		class="flex w-3/4 flex-col rounded-3xl bg-white py-4 px-7 lg:w-1/2"
		use:clickOutside
		on:click_outside={closeModal}
	>
		<div class="flex justify-between gap-10">
			<span class="my-auto block text-2xl">{heading}</span>
			<div on:click={closeModal}>
				<Close class="h-10 w-10 hover:cursor-pointer" />
			</div>
		</div>

		<slot />
	</div>
</div>
