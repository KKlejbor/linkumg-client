<script lang="ts">
	import DropdownUser from 'src/components/DropdownUser.svelte';

	export let users;


</script>

<table class="relative ml-5 w-full table-fixed border-collapse overflow-x-auto">
	<thead>
		<tr class="break-words text-left uppercase">
			<th class="cursor-pointer border-r border-gray-500 pl-4">e-mail</th>
			<th class="cursor-pointer border-r border-gray-500 pl-4">imię</th>
			<th class="cursor-pointer border-r border-gray-500 pl-4">nazwisko</th>
			<th class="cursor-pointer border-r border-gray-500 pl-4">telefon</th>
			<th class="cursor-pointer border-r border-gray-500 pl-4">lokalizacja</th>
			<th class="w-20 pl-4">akcja</th>
		</tr>
	</thead>
	<tbody class="break-words">
		<tr>
			<td class="py-4 pl-4">jankowalski@email.com</td>
			<td class="py-4 pl-4">Jan</td>
			<td class="py-4 pl-4">Kowalski</td>
			<td class="py-4 pl-4">123-456-123</td>
			<td class="py-4 pl-4">Polska, Gdynia</td>
			<td class="py-4 pl-4">
				<DropdownUser />
			</td>
		</tr>
		<tr>
			<td class="py-4 pl-4">jankowalski@email.com</td>
			<td class="py-4 pl-4">Jan</td>
			<td class="py-4 pl-4">Kowalski</td>
			<td class="py-4 pl-4">123-456-123</td>
			<td class="py-4 pl-4">Polska, Gdynia</td>
			<td class="py-4 pl-4">
				<DropdownUser />
			</td>
		</tr>
		<tr>
			<td class="py-4 pl-4">jankowalski@email.com</td>
			<td class="py-4 pl-4">Jan</td>
			<td class="py-4 pl-4">Kowalski</td>
			<td class="py-4 pl-4">123-456-123</td>
			<td class="py-4 pl-4">Polska, Gdynia</td>
			<td class="py-4 pl-4">
				<DropdownUser />
			</td>
		</tr>
	</tbody>
</table>
