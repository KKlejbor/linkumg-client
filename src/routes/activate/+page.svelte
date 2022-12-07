<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { useUserActivate } from 'src/queries/useUser';
	import LogoBlack from '$lib/icons/LogoBlack.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const queryClient = useQueryClient();

	let activating = true;
	let activated = false;
	let notValid = false;

	const activateAccount = useUserActivate(queryClient, {
		onError: () => {
			notValid = true;
			activating = false;
		},
		onSuccess: () => {
			activated = true;
			activating = false;
		}
	})

	onMount(async () => {
		$activateAccount.mutate($page.url.searchParams.get('token').replace(/\/+$/, ''));
	});
</script>

<div class="page flex h-screen w-full w-full items-center justify-center">
	<div
		class="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-white p-14 lg:w-1/4"
	>
		<h1 class="mb-3 text-center text-3xl font-bold">Aktywacja konta</h1>
		<LogoBlack class="w-40" />

		{#if activating}
			<h3 class="text-xl font-bold italic text-center">Aktywowanie konta, proszę czekać...</h3>
		{/if}

		{#if activated}
			<h3 class="text-xl font-bold text-green-500 text-center">Konto zostało aktywowane. Możesz się teraz zalogować.</h3>
			<a class="button" href="/login">Zaloguj się na LinkUMG</a>
		{/if}

		{#if notValid}
			<h3 class="text-xl font-bold text-red-500 text-center">Token nie istnieje lub wygasł.</h3>
		{/if}
	</div>
</div>

<style>
    .page {
        background-image: url(../../lib/images/login.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #111e2b;
    }

    .button {
        height: 50px;
        background: #0a2c4e;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 20px;
        color: white;
        border-radius: 10px;
        width: 100%;
        border: none;
    }

    .button:hover {
        cursor: pointer;
    }
</style>