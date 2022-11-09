<script lang="ts">
    import Logo from '../lib/icons/Logo.svelte';
    import Placeholder from '../lib/icons/Placeholder.svelte';
    import ViewList from "$lib/icons/ViewList.svelte";
    import Logout from "$lib/icons/Logout.svelte";
    import {clickOutside} from '../utils/clickOutside.js';

    let dropdownOpen = false;

    const showDropdown = () => {
        dropdownOpen = !dropdownOpen;
    };

    const closeDropdown = () => {
        dropdownOpen = false;
    };
</script>

<div class="sticky top-0 z-10 w-full bg-bgPrimary flex justify-between pr-10 pl-[100px] relative">
    <a href="/">
        <Logo class="w-24" />
    </a>
    <div class="flex gap-16 h-2/5 my-auto overflow-x-auto">
        <a class="text-white my-auto text-2xl hover:text-gray-300" href="/profile">Jan Kowalski</a>
        <div on:click={showDropdown}>
            <Placeholder class="cursor-pointer w-12 fill-white" />
        </div>
    </div>

    <!-- DROPDOWN -->
    <div use:clickOutside on:click_outside={closeDropdown} class="{dropdownOpen ? 'absolute text-white right-0 bg-white shadow-md text-black mt-[100px] mr-10' : 'hidden text-white right-0 bg-white shadow-md text-black mt-[100px] mr-10'}">
        <div class="w-5 rotate-45 bg-white absolute right-0 mr-3 -mt-2 -z-10">&nbsp;</div>

        <div class="px-4 py-2 hover:bg-bgSecondary cursor-pointer">
            <a class="flex gap-2 w-full" href="/profile" on:click={closeDropdown}>
                <Placeholder class="inline fill-black w-4 items-center justify-center" />
                <span class="text-lg">
                    Profil
                </span>
            </a>
        </div>
        <div class="px-4 py-2 flex gap-2 hover:bg-bgSecondary cursor-pointer">
            <a class="flex gap-2 w-full" href="/user-announcements" on:click={closeDropdown}>
                <ViewList class="inline fill-black w-4 items-center justify-center" />
                <span class="text-lg">
                    Lista ogłoszeń
                </span>
            </a>
        </div>
        <div class="px-4 py-2 flex gap-2 hover:bg-bgSecondary cursor-pointer">
            <a class="flex gap-2 w-full" href="/" on:click={closeDropdown}>
                <Logout class="inline fill-black w-4 items-center justify-center" />
                <span class="text-lg">
                    Wyloguj się
                </span>
            </a>
        </div>
    </div>
</div>