<script lang="ts">
    import Announcements from '../lib/icons/Announcements.svelte';
    import Work from '../lib/icons/Work.svelte';
    import Tutor from '../lib/icons/Tutor.svelte';
    import {page} from "$app/stores";

    const pageActive = 'w-[60px] fill-white transition ease-in-out';
    const pageNotActive = 'w-[60px] hover:fill-white transition ease-in-out';
</script>

<div class="sticky left-0 h-full w-[100px] overflow-auto bg-white shadow-xl ease-in-out">
    <div class="fixed flex flex-col justify-between items-center bg-bgPrimary h-full w-[100px]">
        <div></div>
        <a href="/lessons">
            <Tutor class="{$page.url.pathname === '/lessons/' ? pageActive : pageNotActive }" />
        </a>
        <a href="/jobs">
            <Work class="{$page.url.pathname === '/jobs/' ? pageActive : pageNotActive }" />
        </a>
        <a href="/news">
            <Announcements class="{$page.url.pathname === '/news/' ? pageActive : pageNotActive }" />
        </a>
        <div></div>
    </div>
</div>
