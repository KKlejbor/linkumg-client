<script lang="ts">
	import { changeSelectedOption } from 'src/utils/Select';
	import { onMount } from 'svelte';

	export let options: string[];

	export let selected: string;
	let optionsContainer: HTMLDivElement;

	onMount(() => {
		changeSelectedOption(optionsContainer.childNodes, selected);
	});

	const changeSelected = (event: Event) => {
		const target = event.target as HTMLElement;
		const name = target.getAttribute('name');
		if (name != null) {
			selected = name;
		}
		changeSelectedOption(optionsContainer.childNodes, selected);
	};
</script>

<div class="dropdown-wrapper">
	<div class="dropdown">
		{selected}
	</div>
	<div bind:this={optionsContainer} class="dropdown-content">
		{#each options as option}
			<div on:click={changeSelected} name={option}>{option}</div>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid black;
		border-radius: 5px;
		border-radius: gray;
		height: 40px;
		width: 145px;
		text-align: center;
		font-size: 20px;
		color: rgba(0, 0, 0, 0.7);
		background-color: white;
		background-image: url(../lib/images/down_arrow.svg);
		background-repeat: no-repeat;
		background-position-x: 90%;
		background-position-y: 52%;
	}

	.dropdown-wrapper {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		animation: fadeIn 0.35s;
		display: none;
		position: absolute;
		border: 1px solid black;
		border-radius: gray;
		background-color: white;
		width: 145px;
		z-index: 1;
	}

	.dropdown-content div {
		color: gray;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		cursor: pointer;
	}

	.dropdown-content div:hover {
		background-color: f1f1f1;
	}

	.dropdown-wrapper:hover .dropdown-content {
		display: block;
	}

	.dropdown-content > div:first-child {
		color: var(--selected_color);
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
