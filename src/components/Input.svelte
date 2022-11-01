<script lang="ts">
	export let label: string;
</script>

<div class="input-wrapper">
	<span>{label}</span>
	<input />
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

	input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
		border-bottom-style: solid;
		border-color: black;
		font-size: 28px;
		color: rgba(0, 0, 0, 0.7);
		padding: 7px 7px 7px 0;
		background-color: transparent;
	}

	input:focus {
		outline: none;
	}
</style>
