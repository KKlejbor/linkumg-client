<script lang="ts">
	import user from '$lib/images/user.png';
</script>

<div class="container">
	<img src={user} alt="user" />
	<div class="details">
		<span
			>22. Zgromadzenie Ogólne Międzynarodowego Stowarzyszenia Uniwersytetów Morskich IAMU
			(International Association of Maritime Universities) w Gruzji</span
		>
		<span class="date">29.10.2020</span>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f1f1f1;
	}

	.container {
		width: 800px;
		height: 300px;
		padding: 15px;
		background-color: white;
		border-radius: 15px;
		display: flex;
		gap: 20px;
		align-items: center;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		gap: 20px;
	}

	img {
		width: 340px;
		height: 210px;
	}

	span {
		font-size: 25px;
	}

	.date {
		font-size: 10px;
	}
</style>
