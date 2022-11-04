<script lang="ts">
	import Input from './Input.svelte';

	export let label: string;
</script>

<div class="input-wrapper">
	<span>{label}</span>
	<div class="salary-range">
		<Input label="Od" />
		<Input label="Do" />
	</div>
</div>

<style>
	.input-wrapper {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.salary-range {
		display: flex;
		gap: 15px;
	}

	span {
		color: rgba(0, 0, 0, 0.7);
		font-size: 18px;
	}
</style>
