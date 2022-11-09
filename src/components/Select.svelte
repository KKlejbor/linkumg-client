<script lang="ts">
	import { changeSelectedOption } from 'src/utils/Select';
	import { onMount } from 'svelte';
	import DownArrow from "$lib/icons/DownArrow.svelte";
	import { fade } from 'svelte/transition';

	export let options: string[];

	export let selected: string;
	let optionsContainer: HTMLDivElement;

	onMount(() => {
		//changeSelectedOption(optionsContainer.childNodes, selected);
	});

	const changeSelected = (event: Event) => {
		const target = event.target as HTMLElement;
		const name = target.getAttribute('name');
		if (name != null) {
			selected = name;
		}

		changeSelectedOption(optionsContainer.childNodes, selected);

		selectOpen = false;
	};

	let selectOpen = false;

	const changeSelectOpen = () => {
		selectOpen = !selectOpen;
	};
</script>

<div class="w-full relative">
	<div class="w-full border-2 p-2 border-bgPrimary cursor-default" on:click={changeSelectOpen}>
		<div class="flex w-full justify-between">
			{selected}
			<DownArrow class="w-6" />
		</div>
	</div>

	{#if selectOpen}
		<div transition:fade bind:this={optionsContainer} class="absolute bg-gray-100 w-full">
			{#each options as option}
				<div on:click={changeSelected} name={option} class="p-2 hover:bg-gray-200 cursor-pointer">{option}</div>
			{/each}
		</div>
	{/if}
</div>