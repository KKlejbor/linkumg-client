<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { SortBy } from 'src/enums/SortBy';
	import { SortDirection } from 'src/enums/SortDirection';
	import { invalidateJobOffer } from 'src/queries/useJobOffer';
	import AddAdvert from 'src/components/AddAdvert.svelte';
	import { AdvertType } from 'src/enums/AdvertType';
	import { get, writable, type Writable } from 'svelte/store';
	import { LightPaginationNav } from 'svelte-paginate';
	import { pageSize } from 'src/utils/globalState';
	import type { SearchJobOffer } from 'src/models/JobOffer';
	import Button from 'src/components/Form/Button.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import type { SearchPrivateLesson } from 'src/models/PrivateLesson';
	import { useGetPrivateLesson } from 'src/queries/usePrivateLesson';
	import LessonCard from 'src/components/Lesson/LessonCard.svelte';

	const queryClient = useQueryClient();
	let searchRequest: SearchJobOffer = {};
	let page = 1;

	export let searchBodyState: Writable<SearchJobOffer> = writable(searchRequest);
	export let paginatePropsState: Writable<number> = writable(page);
		
	const lessons = useGetPrivateLesson(
		SortDirection.ASCENDING,
		paginatePropsState,
		SortBy.createdAt,
		searchBodyState
	);

	let searchBody: SearchPrivateLesson = {};

	const submit = () => {
		searchBodyState.set(searchBody);
		invalidateJobOffer(queryClient);
	};

	const changePage = (e: CustomEvent<any>) => {
		console.log(e.detail.page);
		paginatePropsState.set(e.detail.page);
		invalidateJobOffer(queryClient);
	};
</script>

<div class="w-full bg-bgSecondary">
	<form on:submit|preventDefault={submit}>
		<div class="flex w-full flex-col items-end gap-[70px] bg-white p-[40px] lg:flex-row">
			<Input label="Tytuł oferty" bind:value={searchBody.contain} />
			<Input label="Kategoria" bind:value={searchBody.category} />
			<Input label="Lokalizacja" bind:value={searchBody.location} />
			<Button value="Wyszukaj" icon={true} type="submit" />
		</div>
	</form>
	<div class="grid gap-[40px] p-[40px] lg:grid-cols-2 lg:p-[40px]">
		{#if $lessons.isLoading || $lessons.isFetching}
			<span>Loading Data</span>
		{:else if $lessons.isError}
			<span>Error Loading Data</span>
		{:else if ($lessons.isSuccess && $lessons.data) || ($lessons.isFetched && $lessons.isSuccess)}
			{#each $lessons.data.content as lesson}
				<LessonCard privateLesson={lesson} />
			{/each}
		{:else}
			<span>Ogłoszenia o pracę</span>
		{/if}
	</div>
	{#if $lessons.data && $lessons.isSuccess}
		<LightPaginationNav
			totalItems={$lessons.data.totalPages}
			pageSize={get(paginatePropsState)}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}
	<AddAdvert advertType={AdvertType.LESSON} />
</div>
