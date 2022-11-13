<script lang="ts">
	export let label: string;
	export let type: string = 'text';
	export let required: boolean = false;
</script>

<div class="w-full">
	<label class="block text-sm">{label} {required ? '*' : ''}</label>
	<input
		{type}
		{required}
		class="w-full border-b-2 border-bgPrimary bg-inherit py-2 text-bgPrimary outline-0"
	/>
</div>
