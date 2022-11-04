<script lang="ts">
	export let heading: string;
</script>

<div class="background">
	<div class="modal">
		<span>{heading}</span>
		<slot />
	</div>
</div>

<style>
	.background {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background-color: white;
		padding: 20px;
		border-radius: 20px;
		display: flex;
		gap: 40px;
		flex-direction: column;
	}

	span {
		font-size: 30px;
	}
</style>
