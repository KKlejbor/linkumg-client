<script lang="ts">
	export let label: string = '';
	export let text: string;
	export let required: boolean = false;
</script>

<div class="flex h-full flex-col">
	<span>{label} {required ? '*' : ''}</span>
	<textarea
		{required}
		class="h-full grow resize-none rounded-2xl border-2 border-bgPrimary bg-inherit p-2 outline-none"
		bind:value={text}
	/>
</div>
