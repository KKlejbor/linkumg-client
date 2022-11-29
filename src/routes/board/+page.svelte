<script>
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import AddAdvert from 'src/components/AddAdvert.svelte';
	import AnnoucementCard from 'src/components/AnnoucementCard.svelte';
	import FilterPanel from 'src/components/FilterPanel.svelte';
	import { AdvertType } from 'src/enums/AdvertType';
	import { SortBy } from 'src/enums/SortBy';
	import { SortDirection } from 'src/enums/SortDirection';
	import { useGetJobOffers } from 'src/queries/useJobOffer';

	const jobs = useGetJobOffers(SortDirection.ASCENDING, 1, 10, SortBy.createdAt);
</script>

<QueryClientProvider>
	<div style="">
		<FilterPanel />

		<div class="board">
			{#if $jobs.isLoading || $jobs.isFetching}
				<span>Loading Data</span>
			{:else if $jobs.isError}
				<span>Error Loading Data</span>
			{:else if $jobs.isSuccess}
				{#each $jobs.data.content as jobOffer}
					<AnnoucementCard {jobOffer} />
				{/each}
			{:else}
				<span>Ogłoszenia</span>
			{/if}
			<AddAdvert advertType={AdvertType.JOB} />
		</div>
	</div>
</QueryClientProvider>

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
