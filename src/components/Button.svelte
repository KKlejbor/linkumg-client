<script lang="ts">
	export let value: string;
	export let error = false;
	export let open = false;
	export let icon = '';

	const toggleOpen = () => {
		open = !open;
	};
</script>

{#if icon !== ''}
	<button on:click={toggleOpen} class:error>
		<img src={icon} alt="search" />
		{value}
	</button>
{:else}
	<button on:click={toggleOpen} class:error>{value}</button>
{/if}

<style>
	button {
		height: 50px;
		background: #0a2c4e;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: 20px;
		color: white;
		border-radius: 25px;
		width: 190px;
		border: none;
	}

	.error {
		background: red;
	}
</style>
