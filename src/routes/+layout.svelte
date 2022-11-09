<script>
    import "../app.css";
    import TopNavbar from "src/components/TopNavbar.svelte";
    import LeftNavbar from "src/components/LeftNavbar.svelte";
    import {page} from "$app/stores";

    const authorizationPages = ['/login/', '/register/'];
</script>

{#if !authorizationPages.includes($page.url.pathname) }
    <div class="min-h-screen flex flex-col">
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