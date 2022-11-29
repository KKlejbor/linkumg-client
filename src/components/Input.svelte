<script lang="ts">
	export let label: string;
	export let name: string = "name";
	export let required: boolean = false;
	export let placeholder: string = "";
	export let value = "";
</script>

<div class="input-wrapper">
	<span>{label}</span>
	<input
		name={name} 
		type="text"
		required={required}
		placeholder={placeholder}
		bind:value
		/><br/>
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
	}

	span {
		color: rgba(0, 0, 0, 0.7);
		font-size: 15px;
	}

	input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
		border-bottom-style: solid;
		border-color: black;
		font-size: 18px;
		color: rgba(0, 0, 0, 0.7);
		padding: 7px 7px 7px 0;
		background-color: transparent;
		width: 200px;
	}

	input:focus {
		outline: none;
	}
</style>
