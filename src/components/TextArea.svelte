<script lang="ts">
	export let label: string;
	export let name: string = "name";
	export let required: boolean = false;
	export let value = "";
</script>

<div class="flex h-full flex-col">
	<span>{label} {required ? '*' : ''}</span>
	<textarea 
		class="h-full grow resize-none rounded-2xl border-2 border-bgPrimary bg-inherit p-2 outline-none"
		name={name}
		required={required}
		bind:value
	/>
</div>
