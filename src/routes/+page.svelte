<script lang="ts">
	import './styles.css';
	import announcements from '$lib/images/ogloszenia.png';
	import work from '$lib/images/praca.png';
	import tutor from '$lib/images/korepetycje.png';
	import MainPageCategory from '../components/MainPageCategory.svelte';
</script>

<div class="options">
	<MainPageCategory text="Ogłoszenia Uniwersytetu Morskiego w Gdyni" image={announcements} />
	<MainPageCategory text="Znajdź pracę twoich marzeń!!!" image={work} />
	<MainPageCategory text="Znajdź korepetytora względem twoich preferencji" image={tutor} />
</div>

<style>
	.options {
		overflow: hidden;
		display: grid;
		width: 100vw;
		height: calc(100vh - 100px);
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-auto-rows: minmax(100px, auto);
	}
</style>
