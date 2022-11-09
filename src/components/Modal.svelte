<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Close from '../lib/icons/Close.svelte';
	import {clickOutside} from '../utils/clickOutside.js';

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
		if(event.key === "Escape") closeModal()
	};

	onMount(() => {
		window.addEventListener("keydown", keyPress);

		const body = document.querySelector<HTMLElement>('body');
		if (body != null) {
			if (open) {
				body.style.overflow = 'hidden';
			}
		}
	});

	onDestroy(() => {
		window.removeEventListener("keydown", keyPress);

		const body = document.querySelector<HTMLElement>('body');
		if (body != null) {
			if (open) {
				body.style.overflow = 'auto';
			}
		}
	});
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center overflow-y-auto z-10 bg-black bg-opacity-70">
	<div class="bg-white py-4 px-7 flex flex-col w-3/4 lg:w-2/5 rounded-3xl" use:clickOutside on:click_outside={closeModal}>
		<div class="flex justify-between gap-10">
			<span class="text-2xl block my-auto">{heading}</span>
			<div on:click={closeModal}>
				<Close class="w-10 h-10 hover:cursor-pointer" />
			</div>
		</div>

		<slot />
	</div>
</div>