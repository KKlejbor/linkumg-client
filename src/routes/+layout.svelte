<script>
	import { goto } from '$app/navigation';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { storagedAuth } from 'src/api/Auth';
	import TopNavbar from 'src/components/TopNavbar.svelte';
	import LeftNavbar from 'src/components/LeftNavbar.svelte';
	import { onMount } from 'svelte';
	import Notifications from 'svelte-notifications';
	import '../app.css';
	import { page } from '$app/stores';

	const queryClient = new QueryClient();

	onMount(async () => {
		if (
			$storagedAuth == null &&
			!$page.url.searchParams.get('token') &&
			$page.url.pathname !== '/register/'
		) {
			goto('/login');
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Notifications zIndex=40>
		{#if $storagedAuth != null}
			<div class="layout">
				<div class="topBar">
					<TopNavbar />
				</div>
				<LeftNavbar />
				<div class="overflow-y-auto">
					<slot />
				</div>
			</div>
		{:else}
			<div class="min-h-screen">
				<slot />
			</div>
		{/if}
	</Notifications>
</QueryClientProvider>

<style>
	.layout {
		height: 100vh;
		display: grid;
		grid-template-columns: 100px 1fr;
		grid-template-rows: 100px 1fr;
	}

	.topBar {
		grid-column: 1/-1;
	}
</style>
