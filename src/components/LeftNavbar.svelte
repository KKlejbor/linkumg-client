<script lang="ts">
	import Announcements from '../lib/icons/Announcements.svelte';
	import Work from '../lib/icons/Work.svelte';
	import Tutor from '../lib/icons/Tutor.svelte';
	import { page } from '$app/stores';

	const defaultStyle = 'w-[50px] mx-auto';
	const pageActive = `${defaultStyle} fill-white transition ease-in-out`;
	const pageNotActive = `${defaultStyle} hover:fill-white transition ease-in-out`;
</script>

<div class="bg-bgPrimary w-[100px] flex flex-col justify-evenly align-center">
	<a href="/lessons">
		<Tutor class={$page.url.pathname === '/lessons/' ? pageActive : pageNotActive} />
	</a>
	<a href="/jobs">
		<Work class={$page.url.pathname === '/jobs/' ? pageActive : pageNotActive} />
	</a>
	<a href="/news">
		<Announcements class={$page.url.pathname === '/news/' ? pageActive : pageNotActive} />
	</a>
</div>
