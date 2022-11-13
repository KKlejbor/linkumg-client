<script lang="ts">
	import Search from '../lib/icons/Search.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Range from './Range.svelte';
</script>

<div class="flex w-full flex-col items-end gap-[70px] bg-white p-[40px] lg:flex-row">
	<Input label="Tytuł oferty" required="true" />
	<Input label="Tytuł oferty" required="true" />
	<Input label="Tytuł oferty" required="true" />
	<Range label="Wynagrodzenie - przedział" required="true" />
	<Button value="Wyszukaj" icon={true}>
		<Search class="h-5 w-5" />
	</Button>
</div>
