<script lang="ts">
	export let label: string;
	export let type: string = 'text';
	export let required: boolean = false;
</script>

<div class="w-full">
	<label class="block text-sm">{label} { (required) ? '*' : ''}</label>
	<input {type} {required} class="border-b-2 border-bgPrimary w-full outline-0 py-2 text-bgPrimary bg-inherit" />
</div>