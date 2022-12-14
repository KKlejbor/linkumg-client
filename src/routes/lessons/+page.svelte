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
	import { invalidatePrivateLesson, useGetPrivateLesson } from 'src/queries/usePrivateLesson';
	import LessonCard from 'src/components/Lesson/LessonCard.svelte';
	import Modal from 'src/components/Modal.svelte';
	import { storagedToken } from 'src/api/Auth';
	import { Role } from 'src/utils/role';

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
		invalidatePrivateLesson(queryClient);
	};

	const changePage = (e: CustomEvent<any>) => {
		console.log(e.detail.page);
		paginatePropsState.set(e.detail.page);
		invalidatePrivateLesson(queryClient);
	};
</script>

<div class="w-full bg-bgSecondary flex flex-col">
	<form on:submit|preventDefault={submit}>
		<div class="flex w-full flex-col items-end gap-[70px] bg-white p-[40px] lg:flex-row">
			<Input label="Tytuł oferty" bind:value={searchBody.contain} />
			<Input label="Kategoria" bind:value={searchBody.category} />
			<Input label="Lokalizacja" bind:value={searchBody.location} />
			<Button value="Wyszukaj" icon={true} type="submit" />
		</div>
	</form>
	<div class="flex flex-wrap gap-[40px] p-[40px] lg:p-[40px] flex-1 overflow-y-auto">
		{#if $lessons.isLoading}
			<span class="flex-1 text-center text-xl">Ładowanie danych</span>
		{:else if $lessons.isError}
			<span class="flex-1 text-center text-xl">
				Wystąpił problem z ładowaniem danych, spróbuj ponownie później
			</span>
		{:else if $lessons.data?.content.length === 0}
			<span class="flex-1 text-center text-xl">Brak ogłoszeń sprawdź to miejsce później</span>
		{:else if $lessons.isSuccess && $lessons.data}
			{#each $lessons.data.content as lesson}
				<LessonCard privateLesson={lesson} />
			{/each}
		{:else}
			<span class="col-span-2 text-center text-xl">Ogłoszenia o pracę</span>
		{/if}
	</div>
	{#if $lessons.data && $lessons.isSuccess}
		<LightPaginationNav
			totalItems={$lessons.data.totalPages}
			pageSize={50}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}
	{#if $storagedToken !== null && $storagedToken.scope === Role.STUDENT}
		<AddAdvert advertType={AdvertType.LESSON} />
	{/if}
</div>
