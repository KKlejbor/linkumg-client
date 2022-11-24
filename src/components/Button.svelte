<script lang="ts">
	export let value: string;
	export let error = false;
	export let open = false;
	export let icon = false;

	const toggleOpen = () => {
		open = !open;
	};
</script>

{#if icon}
	<button on:click={toggleOpen} class:error>
		<slot />
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
		border-radius: 10px;
		width: 100%;
		border: none;
	}

	button:hover {
		cursor: pointer;
	}

	.error {
		background: red;
	}
</style>
