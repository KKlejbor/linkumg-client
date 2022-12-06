<script lang="ts">
	import Search from '$lib/icons/Search.svelte';
	import Button from 'src/components/Form/Button.svelte';

	let userType = 'student';

	const setUserType = (type) => {
		switch (type) {
			case 'student':
				userType = 'student';
				break;
			case 'employer':
				userType = 'employer';
				break;
			case 'college':
				userType = 'college';
				break;
			default:
				userType = '';
		}
	};
</script>

<div class="flex flex-col lg:flex-row lg:h-10 w-full items-center lg:gap-24 gap-6 px-28 py-16">
	<div class="flex items-center gap-3">
		<span>Rola:</span>
		<div class="flex cursor-pointer rounded-lg border border-gray-400">
			<div
				class={userType === 'student'
					? 'rounded-l-lg border-r border-gray-500 bg-bgButton px-2 py-1 text-white'
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
		/>
		<Search class="absolute left-0 top-0 ml-4 mt-2 h-6 w-6 fill-black" />
	</div>
	<div class="w-96">
		<Button value="Dodaj konto uczelni" />
	</div>
</div>
