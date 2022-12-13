<script lang="ts">
	import { clickOutside } from '../utils/clickOutside.js';
	import Placeholder from '$lib/icons/Placeholder.svelte';
	import Actions from '$lib/icons/Actions.svelte';
	import { banUser } from '../queries/useAdmin';
	import { getNotificationsContext } from 'svelte-notifications';

	let dropdownOpen = false;

	const { addNotification } = getNotificationsContext();

	export let useruuid = '';

	const showDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const closeDropdown = () => {
		dropdownOpen = false;
	};

	const toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};

	const banUserId = () => {
		banUser(useruuid).then(
			(response) => {
				addNotification({
					text: response.data,
					type: 'error',
					position: 'bottom-center',
					removeAfter: 4000,
				});
			}
		);
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
		<a class="flex w-full gap-2" on:click={banUser}>
			<Placeholder class="inline w-4 items-center justify-center fill-black" />
			<span class="text-lg" on:click={banUserId}> Zablokuj </span>
		</a>
	</div>
</div>
