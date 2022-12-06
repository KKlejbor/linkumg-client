<script lang="ts">
	import CollegeAnnocement from 'src/components/College/CollegeAnnocement.svelte';
	import AddAdvert from 'src/components/AddAdvert.svelte';
	import { AdvertType } from 'src/enums/AdvertType';
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { get, writable, type Writable } from 'svelte/store';
	import { invalidateAnnouncement, useGetAnnouncements } from 'src/queries/useAnnouncement';
	import { SortDirection } from 'src/enums/SortDirection';
	import { SortBy } from 'src/enums/SortBy';
	import { LightPaginationNav } from 'svelte-paginate';
	import { pageSize } from 'src/utils/globalState';

	const queryClient = useQueryClient();
	let page = 1;

	export let paginatePropsState: Writable<number> = writable(page);

	const annoucement = useGetAnnouncements(
		SortDirection.ASCENDING,
		paginatePropsState,
		SortBy.createdAt
	);
	const changePage = (e: CustomEvent<any>) => {
		paginatePropsState.set(e.detail.page);
		invalidateAnnouncement(queryClient);
	};
</script>

<svelte:head>
	<title>Ogłoszenia uczelni</title>
</svelte:head>
<div class="w-full bg-bgSecondary">
	<div class="grid w-full gap-12 p-14 lg:grid-cols-2">
		{#if $annoucement.isLoading || $annoucement.isFetching}
			<span>Loading Data</span>
		{:else if $annoucement.isError}
			<span>Error Loading Data</span>
		{:else if ($annoucement.isSuccess && $annoucement.data) || ($annoucement.isFetched && $annoucement.isSuccess)}
			{#each $annoucement.data.content as annoucement}
				<CollegeAnnocement {annoucement} />
			{/each}
		{:else}
			<span>Ogłoszenia o pracę</span>
		{/if}
	</div>
	{#if $annoucement.data && $annoucement.isSuccess}
		<LightPaginationNav
			totalItems={$annoucement.data.totalPages}
			pageSize={get(paginatePropsState)}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}
	<AddAdvert advertType={AdvertType.COLLEGE} />
</div>
