<script lang="ts">
	import praca from '$lib/images/praca.png';
	import Clock from '$lib/icons/Clock.svelte';
	import { page } from '$app/stores';
	import { useGetAnnouncement } from 'src/queries/useAnnouncement';

	let newsId= $page.params.id;
	const annoucement = useGetAnnouncement(newsId);
</script>

<div class="w-full p-10 lg:py-20 lg:px-32">
	{#if $annoucement.isLoading || $annoucement.isFetching}
	<span>Loading</span>
	{:else if $annoucement.isError}
	<span>Error</span>
	{:else if ($annoucement.isSuccess && $annoucement.data) || ($annoucement.isFetched && $annoucement.isSuccess)}
				<div class="mx-auto">
					<h3 class="mb-6 break-words text-4xl">
						{$annoucement.data.title}
					</h3>
			
					<div class="flex items-center justify-end gap-2 font-medium">
						<Clock class="h-5 w-5" />
						{$annoucement.data.createdAt}
					</div>
			
					<div class="my-8">
						<img src={praca} alt="praca" class="object-cover lg:float-left lg:m-10 lg:h-96 lg:w-1/2" />
						<p class="whitespace-pre-line break-words text-justify">
							{$annoucement.data.description}
						</p>
					</div>
				</div>
	{:else}
	<span>Ogłoszenia uczelni</span>
	{/if}
</div>
