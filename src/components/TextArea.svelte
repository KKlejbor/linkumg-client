<script lang="ts">
	export let label: string = '';
	export let text: string;
	export let required: boolean = false;
</script>

<div class="flex flex-col h-full">
	<span>{label} { (required) ? '*' : ''}</span>
	<textarea {required} class="outline-none border-2 rounded-2xl border-bgPrimary bg-inherit p-2 grow resize-none h-full" bind:value={text}></textarea>
</div>