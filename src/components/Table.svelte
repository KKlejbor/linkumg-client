<script lang="ts">
	import Actions from '$lib/icons/Actions.svelte';
</script>

<table class="ml-5 w-full table-fixed border-collapse overflow-x-auto">
	<thead>
		<tr class="text-left uppercase cursor-pointer">
			<th class="border-r border-gray-500 pl-4">e-mail</th>
			<th class="border-r border-gray-500 pl-4">imię</th>
			<th class="border-r border-gray-500 pl-4">nazwisko</th>
			<th class="border-r border-gray-500 pl-4">telefon</th>
			<th class="border-r border-gray-500 pl-4">lokalizacja</th>
			<th class="pl-4">akcja</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="pl-4 py-4">jankowalski@email.com</td>
			<td class="pl-4 py-4">Jan</td>
			<td class="pl-4 py-4">Kowalski</td>
			<td class="pl-4 py-4">123-456-123</td>
			<td class="pl-4 py-4">Polska, Gdynia</td>
			<td class="pl-4 py-4">
				<Actions class="h-5 w-5" />
			</td>
		</tr>
		<tr>
			<td class="pl-4 py-4">jankowalski@email.com</td>
			<td class="pl-4 py-4">Jan</td>
			<td class="pl-4 py-4">Kowalski</td>
			<td class="pl-4 py-4">123-456-123</td>
			<td class="pl-4 py-4">Polska, Gdynia</td>
			<td class="pl-4 py-4">
				<Actions class="h-5 w-5" />
			</td>
		</tr>
		<tr>
			<td class="pl-4 py-4">jankowalski@email.com</td>
			<td class="pl-4 py-4">Jan</td>
			<td class="pl-4 py-4">Kowalski</td>
			<td class="pl-4 py-4">123-456-123</td>
			<td class="pl-4 py-4">Polska, Gdynia</td>
			<td class="pl-4 py-4">
				<Actions class="h-5 w-5" />
			</td>
		</tr>
	</tbody>
</table>
