<script lang="ts">
	import { clickOutside } from '../utils/clickOutside.js';
	import Placeholder from '$lib/icons/Placeholder.svelte';
	import ViewList from '$lib/icons/ViewList.svelte';
	import Admin from '$lib/icons/Admin.svelte';
	import Logout from '$lib/icons/Logout.svelte';
	import Actions from '$lib/icons/Actions.svelte';

	let dropdownOpen = false;

	const showDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const closeDropdown = () => {
		dropdownOpen = false;
	};

	const toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};
</script>

<div on:click={toggleDropdown}>
	<Actions class="mx-auto h-5 w-5 cursor-pointer" />
</div>

<div
	use:clickOutside
	on:click_outside={closeDropdown}
	class={dropdownOpen
		? 'absolute right-0 bg-white text-white text-black shadow-md'
		: 'right-0 hidden bg-white text-white text-black shadow-md'}
>
	<div class="absolute right-0 -z-10 mr-3 -mt-2 w-5 rotate-45 bg-white shadow-md">&nbsp;</div>

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
</div>
