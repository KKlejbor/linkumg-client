<script lang="ts">
	import search from '$lib/images/search.svg';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Range from './Range.svelte';
</script>

<div class="filter-panel">
	<Input label="Tytuł oferty" />
	<Input label="Tytuł oferty" />
	<Input label="Tytuł oferty" />
	<Range label="Wynagrodzenie - przedział" />
	<Button value="Wyszukaj" icon={search} />
</div>

<style>
	.filter-panel {
		display: inline-flex;
		margin-left: 100px;
		gap: 20px;
		height: 150px;
		background-color: white;
		align-items: center;
		width: calc(100% - 100px);
		padding: 20px;
		justify-content: space-between;
	}
</style>
