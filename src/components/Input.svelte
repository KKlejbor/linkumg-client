<script lang="ts">
	export let label: string;
	export let type: string = 'text';
</script>

<div class="input-wrapper">
	<span>{label}</span>
	<input {type} />
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
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
		width: 100%;
	}

	input:focus {
		outline: none;
	}
</style>
