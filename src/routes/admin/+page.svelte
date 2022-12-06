<script lang="ts">
	import UserFilter from 'src/components/UserFilter.svelte';
	import Table from 'src/components/Table.svelte';

	const users = [
		{
			id: 'cffc3eac-6c2e-11ed-a1eb-0242ac120002',
			name: 'Jan',
			lastName: 'Kowalski',
			birthYear: '1980-01-01',
			phone: '523-421-523',
			email: 'jankowalski@gmail.com',
			location: 'Polska, Gdynia',
			banned: false
		}
	];
</script>

<div class="w-full bg-white">
	<UserFilter />

	<div class="mx-auto w-3/4">
		<Table />
	</div>
</div>


