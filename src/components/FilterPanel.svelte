<script lang="ts">
	import Search from '../lib/icons/Search.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Range from './Range.svelte';
</script>

<div class="flex flex-col lg:flex-row bg-white gap-[70px] w-full p-[40px] items-end">
	<Input label="Tytuł oferty" required="true" />
	<Input label="Tytuł oferty" required="true" />
	<Input label="Tytuł oferty" required="true" />
	<Range label="Wynagrodzenie - przedział" required="true" />
	<Button value="Wyszukaj" icon={true}>
		<Search class="w-5 h-5" />
	</Button>
</div>