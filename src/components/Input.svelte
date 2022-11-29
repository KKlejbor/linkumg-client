<script lang="ts">
	export let label: string;
	export let name: string = "name";
	export let required: boolean = false;
	export let placeholder: string = "";
	export let value = "";
</script>

<div class="w-full">
	<label class="block text-lg">{label} {required ? '*' : ''}</label>
	<input
		name={name} 
		type="text"
		required={required}
		placeholder={placeholder}
		class="w-full border-b-2 border-bgPrimary bg-inherit py-2 text-bgPrimary outline-0"
		bind:value
		/>
</div>
