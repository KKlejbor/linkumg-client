<script lang="ts">
	import Logo from '../lib/icons/Logo.svelte';
	import Placeholder from '../lib/icons/Placeholder.svelte';
	import ViewList from '$lib/icons/ViewList.svelte';
	import Logout from '$lib/icons/Logout.svelte';
	import { clickOutside } from '../utils/clickOutside.js';
	import Admin from '$lib/icons/Admin.svelte';

	let dropdownOpen = false;

	const showDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const closeDropdown = () => {
		dropdownOpen = false;
	};
</script>

<div class="flex h-full justify-between bg-bgPrimary pr-10 pl-[100px]">
	<a href="/">
		<Logo class="w-24" />
	</a>
	<div class="my-auto flex h-2/5 gap-16 overflow-x-auto">
		<a class="my-auto text-2xl text-white hover:text-gray-300" href="/profile">Jan Kowalski</a>
		<div on:click={showDropdown}>
			<Placeholder class="w-10 cursor-pointer fill-white" />
		</div>
	</div>

	<!-- DROPDOWN -->
	<div
		use:clickOutside
		on:click_outside={closeDropdown}
		class={dropdownOpen
			? 'absolute right-0 mt-[100px] mr-10 bg-white text-white text-black shadow-md'
			: 'right-0 mt-[100px] mr-10 hidden bg-white text-white text-black shadow-md'}
	>
		<div class="absolute right-0 -z-10 mr-3 -mt-2 w-5 rotate-45 bg-white">&nbsp;</div>

		<div class="cursor-pointer px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2" href="/profile" on:click={closeDropdown}>
				<Placeholder class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Profil </span>
			</a>
		</div>
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2" href="/user-announcements" on:click={closeDropdown}>
				<ViewList class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Lista ogłoszeń </span>
			</a>
		</div>
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2 items-center" href="/admin" on:click={closeDropdown}>
				<Admin class="inline w-4 h-4 items-center justify-center fill-black" />
				<span class="text-lg"> Panel administratora </span>
			</a>
		</div>
		<div class="flex cursor-pointer gap-2 px-4 py-2 hover:bg-bgSecondary">
			<a class="flex w-full gap-2" href="/" on:click={closeDropdown}>
				<Logout class="inline w-4 items-center justify-center fill-black" />
				<span class="text-lg"> Wyloguj się </span>
			</a>
		</div>
	</div>
</div>
