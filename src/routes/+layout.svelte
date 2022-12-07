<script>
	import { goto } from '$app/navigation';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { storagedAuth } from 'src/api/Auth';
	import TopNavbar from 'src/components/TopNavbar.svelte';
	import LeftNavbar from 'src/components/LeftNavbar.svelte';
	import { onMount } from 'svelte';
	import Notifications from 'svelte-notifications';
	import "../app.css";
	import { page } from '$app/stores';
	
	const queryClient = new QueryClient();

	onMount(async () => {
		if ($storagedAuth == null && !$page.params.token && $page.url.pathname !== '/register/') {
			goto('/login');
		}
	});
	
</script>

<QueryClientProvider client={queryClient}>
	<Notifications>
		{#if $storagedAuth != null}
		<div class="flex min-h-screen flex-col">
			<TopNavbar />
	
			<div class="flex flex-1">
				<LeftNavbar />
	
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
