<script lang="ts">
	import announcements from '$lib/images/ogloszenia.png';
	import work from '$lib/images/praca.png';
	import tutor from '$lib/images/korepetycje.png';
	import MainPageCategory from '../components/MainPageCategory.svelte';
	import { onMount } from 'svelte';
	import { useGetUserInfo } from 'src/queries/useUser';
	import { storagedUser } from 'src/api/Auth';

	const userInfo = useGetUserInfo();
	if ($userInfo.isSuccess && $userInfo.data) {
		$storagedUser = $userInfo.data;
	}
</script>

<svelte:head>
	<title>Strona główna</title>
</svelte:head>

<div class="h-full flex flex-col">
	<MainPageCategory
		text="Ogłoszenia Uniwersytetu Morskiego w Gdyni"
		image={announcements}
		href="/news"
	/>
	<MainPageCategory text="Znajdź pracę twoich marzeń!!!" image={work} href="/jobs" />
	<MainPageCategory
		text="Znajdź korepetytora względem twoich preferencji"
		image={tutor}
		href="/lessons"
	/>
</div>
