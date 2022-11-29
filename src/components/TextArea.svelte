<script lang="ts">
	export let label: string;
	export let name: string = "name";
	export let value = "";
</script>

<div class="input-wrapper">
	<span>{label}</span>
	<textarea 
		name={name}
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
		font-size: 18px;
	}

	textarea {
		width: 1000px;
		height: 200px;
		resize: none;
	}

	textarea:focus {
		outline: none;
	}
</style>
