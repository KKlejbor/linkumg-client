<script lang="ts">
	import Input from './Input.svelte';

	export let label: string;
	export let required: boolean = false;
</script>

<div class="flex w-full flex-col gap-3">
	<span>{label} {required ? '*' : ''}</span>
	<div class="flex gap-4">
		<Input label="Od" />
		<span class="self-center font-bold">&ndash;</span>
		<Input label="Do" />
	</div>
</div>
