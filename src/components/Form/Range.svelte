<script lang="ts">
	import InputNumber from './InputNumber.svelte';

	export let label: string;
	export let required: boolean = false;
	export let fromRange = 0;
	export let toRange = 0;
</script>

<div class="flex w-full flex-col gap-3">
	<span>{label} {required ? '*' : ''}</span>
	<div class="flex gap-4">
		<InputNumber label="" bind:value={fromRange} />
		<span class="self-center font-bold">&ndash;</span>
		<InputNumber label="" bind:value={toRange} />
	</div>
</div>
