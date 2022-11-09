<script lang="ts">
	import Input from './Input.svelte';

	export let label: string;
	export let required: boolean = false;
</script>

<div class="w-full flex gap-3 flex-col">
	<span>{label} { (required) ? '*' : ''}</span>
	<div class="flex gap-4">
		<Input label="Od" />
		<span class="font-bold self-center">&ndash;</span>
		<Input label="Do" />
	</div>
</div>