<script>
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import FilterPanel from 'src/components/FilterPanel.svelte';
</script>

<div style="">
	<FilterPanel />

	<div class="board">
		<AnnoucementCard />
		<AnnoucementCard />
		<AnnoucementCard />
	</div>
</div>

<style>
	:global(body) {
		background: #f1f1f1;
	}

	:global(.modal > div:last-child) {
		align-self: center;
		display: flex;
		gap: 20px;
	}

	.board {
		margin-left: 100px;
		padding-top: 80px;
		display: flex;
		gap: 20px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
