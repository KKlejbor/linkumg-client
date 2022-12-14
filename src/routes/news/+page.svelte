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
	import { storagedToken } from 'src/api/Auth';
	import { Role } from 'src/utils/role';

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
<div class="w-full flex flex-col bg-bgSecondary">
	<div class="flex flex-wrap gap-[40px] p-[40px] lg:p-[40px] flex-1 overflow-y-auto">
		{#if $annoucement.isLoading}
			<span class="flex-1 text-center text-xl">Ładowanie danych...</span>
		{:else if $annoucement.isError}
			<span class="flex-1 text-center text-xl">Wystąpił problem, spróbuj ponownie później</span>
		{:else if $annoucement.isSuccess && $annoucement.data}
			{#each $annoucement.data.content as annoucement}
				<CollegeAnnocement {annoucement} />
			{/each}
		{:else}
			<span class="flex-1 text-center text-xl">Ogłoszenia od uczelni</span>
		{/if}
	</div>
	{#if $annoucement.data && $annoucement.isSuccess}
		<LightPaginationNav
			totalItems={$annoucement.data.totalPages}
			pageSize={50}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}
	{#if $storagedToken !== null && $storagedToken.scope === Role.COLLEGE}
		<AddAdvert advertType={AdvertType.COLLEGE} />
	{/if}
</div>
