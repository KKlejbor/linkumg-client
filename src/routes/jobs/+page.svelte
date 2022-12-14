<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { SortBy } from 'src/enums/SortBy';
	import { SortDirection } from 'src/enums/SortDirection';
	import { invalidateJobOffer, useGetJobOffers } from 'src/queries/useJobOffer';
	import AddAdvert from 'src/components/AddAdvert.svelte';
	import { AdvertType } from 'src/enums/AdvertType';
	import { get, writable, type Writable } from 'svelte/store';
	import { LightPaginationNav } from 'svelte-paginate';
	import { pageSize } from 'src/utils/globalState';
	import type { SearchJobOffer } from 'src/models/JobOffer';
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Range from 'src/components/Form/Range.svelte';
	import JobOfferCard from 'src/components/Job/JobOfferCard.svelte';
	import { storagedToken } from 'src/api/Auth';
	import { Role } from 'src/utils/role';

	const queryClient = useQueryClient();
	let searchRequest: SearchJobOffer = {};
	let page = 1;

	export let searchBodyState: Writable<SearchJobOffer> = writable(searchRequest);
	export let paginatePropsState: Writable<number> = writable(page);

	const jobs = useGetJobOffers(
		SortDirection.ASCENDING,
		paginatePropsState,
		SortBy.createdAt,
		searchBodyState
	);

	let searchBody: SearchJobOffer = {};

	const submit = () => {
		searchBodyState.set(searchBody);
		invalidateJobOffer(queryClient);
	};

	const changePage = (e: CustomEvent<any>) => {
		paginatePropsState.set(e.detail.page);
		invalidateJobOffer(queryClient);
	};
</script>

<div class="w-full bg-bgSecondary flex flex-col">
	<form on:submit|preventDefault={submit}>
		<div class="flex w-full flex-col items-end gap-[70px] bg-white p-[40px] lg:flex-row">
			<Input label="Tytuł oferty" bind:value={searchBody.contain} />
			<Input label="Lokalizacja" bind:value={searchBody.location} />
			<Range
				label="Wynagrodzenie - przedział"
				bind:fromRange={searchBody.salaryDown}
				bind:toRange={searchBody.salaryUp}
			/>
			<Button value="Wyszukaj" icon={true} type="submit" />
		</div>
	</form>
	<div class="flex flex-wrap gap-[40px] p-[40px] lg:p-[40px] flex-1 overflow-y-auto">
		{#if $jobs.isLoading}
			<span class="flex-1 text-center text-xl">Loading Data</span>
		{:else if $jobs.isError}
			<span class="flex-1 text-center text-xl">Error Loading Data</span>
		{:else if $jobs.data?.content.length === 0}
			<span class="flex-1 text-center text-xl">Brak ogłoszeń sprawdź to miejsce później</span>
		{:else if $jobs.isSuccess && $jobs.data.content}
			{#each $jobs.data.content as jobOffer}
				<JobOfferCard {jobOffer} />
			{/each}
		{:else}
			<span class="flex-1 text-center text-xl">Ogłoszenia o pracę</span>
		{/if}
	</div>
	{#if $jobs.data && $jobs.isSuccess}
		<LightPaginationNav
			totalItems={$jobs.data.totalPages}
			pageSize={50}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}
	{#if $storagedToken !== null && $storagedToken.scope === Role.COMPANY}
		<AddAdvert advertType={AdvertType.JOB} />
	{/if}
</div>
