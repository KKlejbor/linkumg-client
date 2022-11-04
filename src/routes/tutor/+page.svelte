<script lang="ts">
	import CollegeAnnocement from 'src/components/CollegeAnnocement.svelte';
</script>

<div class="container">
	<CollegeAnnocement />
	<CollegeAnnocement />
	<CollegeAnnocement />
</div>

<style>
	:global(body) {
		background-color: #f1f1f1;
	}

	.container {
		margin-top: 100px;
		margin-left: 100px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
</style>
