<script lang="ts">
	export let label: string;
	export let name: string = "name";
	export let type: string = "text";
	export let required: boolean = false;
	export let placeholder: string = "";
	export let value = "";
	export let disabled = false;

	const setType = (node) => {
		node.type = type;
	};

</script>

<div class="w-full">
	<label class="block text-lg">{label}{required ? '*' : ''}</label>
	<input
		name={name} 
		type="text"
		required={required}
		placeholder={placeholder}
		disabled ={disabled}
		class={`w-full border-b-2 border-bgPrimary bg-inherit py-2 ${ disabled === true ? 'text-red-400' : 'text-bgPrimary'} outline-0`}
		bind:value
		use:setType
		/>
</div>
