<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { storagedAuth } from 'src/api/Auth';
	import NavBar from 'src/components/NavBar.svelte';
	import { onMount } from 'svelte';
	import Notifications from 'svelte-notifications';

	const queryClient = new QueryClient();

	onMount(async () => {
		if ($storagedAuth == null) {
			goto('/login');
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<Notifications>
		{#if $storagedAuth != null}
			<NavBar />
		{/if}
		<slot />
	</Notifications>
</QueryClientProvider>
