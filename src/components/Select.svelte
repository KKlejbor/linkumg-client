<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let options: string[];
	export let selected: string;
	export let id: string;
	export let label: string;

	let dispatch = createEventDispatcher();
	function changeOption() {
		dispatch('changeOption');
	}
</script>

<label for={id}>{label}</label>
<select
	{id}
	bind:value={selected}
	on:change={changeOption}
	class="w-full rounded border-2 border-bgPrimary p-2"
>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>
