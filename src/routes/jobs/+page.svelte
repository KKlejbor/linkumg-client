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

<div class="w-full bg-bgSecondary">
		<FilterPanel />

		<div class="grid gap-[40px] p-[40px] lg:grid-cols-2 lg:p-[80px]">
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
