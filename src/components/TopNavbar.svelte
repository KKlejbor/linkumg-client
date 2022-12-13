<script lang="ts">
	import Logo from '../lib/icons/Logo.svelte';
	import Placeholder from '../lib/icons/Placeholder.svelte';
	import Logout from '$lib/icons/Logout.svelte';
	import { clickOutside } from '../utils/clickOutside.js';
	import Admin from '$lib/icons/Admin.svelte';
	import { useGetUserInfo } from 'src/queries/useUser';
	import { storagedAuth } from 'src/api/Auth';
	import { goto } from '$app/navigation';

	let dropdownOpen = false;

	const showDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const closeDropdown = () => {
		dropdownOpen = false;
	};

	const logout = () => {
		dropdownOpen = false;
		$storagedAuth = null;
		goto('/login');
	};

	const userInfo= useGetUserInfo();
</script>

<div class="flex h-full justify-between bg-bgPrimary pr-10 pl-[100px]">
	<a href="/">
		<Logo class="w-24" />
	</a>
	<div class="my-auto flex h-2/5 gap-16 overflow-x-auto">
		{#if ($userInfo.data && $userInfo.isSuccess)}
		<a class="my-auto text-2xl text-white hover:text-gray-300" href="/profile">{$userInfo.data.name}</a>
		{:else}
		<a class="my-auto text-2xl text-white hover:text-gray-300" href="/profile">Loading...</a>
		{/if}
		<div on:click={showDropdown}>
			<Placeholder class="w-10 cursor-pointer fill-white" />
		</div>
	</div>

	<!-- DROPDOWN -->
	<div
		use:clickOutside
		on:click_outside={closeDropdown}
		class={dropdownOpen
			? 'absolute right-0 mt-[100px] z-10 mr-10 bg-white text-white text-black shadow-md'
			: 'right-0 mt-[100px] mr-10 hidden bg-white text-white text-black shadow-md'}
	>
		<div class="absolute right-0 z-10 mr-3 -mt-2 w-5 rotate-45 bg-white">&nbsp;</div>

		<div class="cursor-pointer px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2" href="/profile" on:click={closeDropdown}>
				<Placeholder class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Profil </span>
			</a>
		</div>
		<!--
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2" href="/user-announcements" on:click={closeDropdown}>
				<ViewList class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Lista ogłoszeń </span>
			</a>
		</div>
		-->
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2 items-center" href="/admin" on:click={closeDropdown}>
				<Admin class="inline w-4 h-4 items-center justify-center fill-black" />
				<span class="text-lg"> Panel administratora </span>
			</a>
		</div>
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<button class="flex w-full gap-2" on:click={logout}>
				<Logout class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Wyloguj się </span>
			</button>
		</div>
	</div>
</div>
