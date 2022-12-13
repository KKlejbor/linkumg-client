<script lang="ts">
	import { goto } from "$app/navigation";
	import { storagedToken } from "src/api/Auth";
	import { Role } from "src/utils/role";
	import { onMount } from "svelte";

	onMount(() => {
		if($storagedToken!.scope == Role.STUDENT) {
			goto('/profile/student');
		}
		else if($storagedToken!.scope == Role.COLLEGE) {
			goto('/profile/college');
		}
		else if($storagedToken!.scope == Role.COMPANY) {
			goto('/profile/company')
		}
	});
</script>

