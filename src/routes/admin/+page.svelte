<script lang="ts">
	import { useQueryClient } from '@sveltestack/svelte-query';
	import { get, writable, type Writable } from 'svelte/store';
	import { invalidateAnnouncement } from '../../queries/useAnnouncement';
	import { SortDirection } from '../../enums/SortDirection';
	import { SortBy } from '../../enums/SortBy';
	import { invalidateUser, useGetUsers, usePostCreateCollege } from '../../queries/useAdmin';
	import Search from '$lib/icons/Search.svelte';
	import Button from 'src/components/Form/Button.svelte';
	import { LightPaginationNav } from 'svelte-paginate';
	import { pageSize } from 'src/utils/globalState';
	import type { SearchUser } from '../../models/User';
	import DropdownUser from 'src/components/DropdownUser.svelte';
	import Modal from 'src/components/Modal.svelte';
	import Input from 'src/components/Form/Input.svelte';
	import Select from 'src/components/Form/Select.svelte';
	import { getNotificationsContext } from 'svelte-notifications';

	const queryClient = useQueryClient();
	let searchRequest: SearchUser = {};
	let page = 1;

	let email = '';
	let userType = '';

	let collegeEmail = '';
	let collegePassword = '';
	let collegeName = '';
	const facultyOptions = ['Wybierz wydział', 'WE', 'WM', 'WN', 'WZNiJ'];
	let collegeFaculty = facultyOptions[0];

	export let searchBodyState: Writable<SearchUser> = writable(searchRequest);
	export let paginatePropsState: Writable<number> = writable(page);
	const { addNotification } = getNotificationsContext();

	const users = useGetUsers(
		SortDirection.ASCENDING,
		paginatePropsState,
		SortBy.createdAt,
		searchBodyState
	);
	const changePage = (e: CustomEvent<any>) => {
		paginatePropsState.set(e.detail.page);
		invalidateAnnouncement(queryClient);
	};

	const setUserType = (type) => {
		switch (type) {
			case 'student':
				userType = 'student';
				searchBody.type = 'Student';
				break;
			case 'employer':
				userType = 'employer';
				searchBody.type = 'Company';
				break;
			case 'college':
				userType = 'college';
				searchBody.type = 'College';
				break;
			default:
				userType = '';
				searchBody.type = '';
		}

		submit();
	};

	let searchBody: SearchUser = {};

	const submit = () => {
		searchBodyState.set(searchBody);
		invalidateUser(queryClient);
	};

	let collegeForm = false;

	const showCollegeForm = () => {
		collegeForm = true;
	};

	const postCreateCollege = usePostCreateCollege(queryClient, {
		onError: (response) => {
			addNotification({
				text: response.response.data,
				type: 'error',
				position: 'bottom-center',
				removeAfter: 4000
			});
		},
		onSuccess: () => {
			addNotification({
				text: 'Użytkownik został stworzony',
				type: 'success',
				position: 'bottom-center',
				removeAfter: 4000
			});
		}
	});

	const createCollege = () => {
		const registerData: any = {
			email: collegeEmail,
			password: collegePassword,
			name: collegeName,
			faculty: collegeFaculty
		};

		$postCreateCollege.mutate(registerData);
	};
</script>

<div class="w-full bg-white">
	<!-- user filter -->

	<div class="flex flex-col lg:flex-row lg:h-10 w-full items-center lg:gap-24 gap-6 px-28 py-16">
		<div class="flex items-center gap-3">
			<span>Rola:</span>
			<div class="flex cursor-pointer rounded-lg border border-gray-400">
				<div
					class={userType === ''
						? 'rounded-l-lg border-r border-gray-500 bg-bgButton px-2 py-1 text-white'
						: 'border-r border-gray-500 px-2 py-1'}
					on:click={() => setUserType('all')}
				>
					Wszyscy
				</div>
				<div
					class={userType === 'student'
						? 'border-r border-gray-500 bg-bgButton px-2 py-1 text-white'
						: 'border-r border-gray-500 px-2 py-1'}
					on:click={() => setUserType('student')}
				>
					Student
				</div>
				<div
					class={userType === 'employer'
						? 'border-r border-gray-500 bg-bgButton px-2 py-1 text-white'
						: 'border-r border-gray-500 px-2 py-1'}
					on:click={() => setUserType('employer')}
				>
					Firma
				</div>
				<div
					class={userType === 'college'
						? 'rounded-r-lg border-r border-gray-500 bg-bgButton px-2 py-1 text-white'
						: 'px-2 py-1'}
					on:click={() => setUserType('college')}
				>
					Uczelnia
				</div>
			</div>
		</div>
		<div class="relative w-full">
			<input
				type="text"
				class="w-full rounded-3xl border border-gray-500 py-2 pl-12 pr-5"
				placeholder="Wyszukaj"
				on:keydown={submit}
				bind:value={searchBody.email}
			/>
			<Search class="absolute left-0 top-0 ml-4 mt-2 h-6 w-6 fill-black" />
		</div>
		<div class="w-96" on:click={showCollegeForm}>
			<Button value="Dodaj konto uczelni" />
		</div>
	</div>

	<!-- table -->
	<div class="mx-auto w-3/4">
		<table class="relative ml-5 w-full table-fixed border-collapse overflow-x-auto text-xs">
			<thead>
				<tr class="break-words text-left uppercase">
					<th class="cursor-pointer border-r border-gray-500 pl-4">e-mail</th>
					<th class="cursor-pointer border-r border-gray-500 pl-4">imię</th>
					<th class="cursor-pointer border-r border-gray-500 pl-4">nazwisko</th>
					<th class="cursor-pointer border-r border-gray-500 pl-4">telefon</th>
					<th class="w-20 pl-4">akcja</th>
				</tr>
			</thead>
			<tbody class="break-words">
				{#if $users.isSuccess && $users.data}
					{#each $users.data.content as user}
						<tr class={user.banned ? 'text-red-500' : ''}>
							<td class="py-4 pl-4">{user.email}</td>
							<td class="py-4 pl-4">{user.name}</td>
							<td class="py-4 pl-4">{user.lastName ? user.lastName : 'brak'}</td>
							<td class="py-4 pl-4">{user.phone ? user.phone : 'brak'}</td>
							<td class="py-4 pl-4">
								<DropdownUser useruuid={user.id} />
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>

	{#if $users.data && $users.isSuccess}
		<LightPaginationNav
			totalItems={$users.data.totalPages}
			pageSize={50}
			currentPage={get(pageSize)}
			limit={1}
			on:setPage={(e) => changePage(e)}
		/>
	{/if}

	{#if collegeForm}
		<Modal heading="Tworzenie konta uczelni" bind:open={collegeForm}>
			<div class="py-4 flex flex-col gap-6">
				<Input label="email" required={true} bind:value={collegeEmail} />
				<Input label="name" required={true} bind:value={collegeName} />
				<Input label="haslo" type="password" required={true} bind:value={collegePassword} />
				<Select label="" options={facultyOptions} bind:selected={collegeFaculty} />
			</div>

			<div class="flex-end flex flex-row-reverse gap-6">
				<button class="font-medium uppercase text-blue-600" on:click={createCollege}>Zapisz</button>
				<button class="font-medium uppercase text-red-600">Anuluj</button>
			</div>
		</Modal>
	{/if}
</div>
