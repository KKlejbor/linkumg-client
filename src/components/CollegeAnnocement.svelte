<script lang="ts">
	import user from '$lib/images/user.png';
</script>

<div class="container">
	<div class="details">
		<img src={user} alt="user" />
		<a href=""
			>
			22. Zgromadzenie Ogólne Międzynarodowego Stowarzyszenia Uniwersytetów Morskich IAMU (International Association of Maritime Universities) w Gruzji</a
		>
	</div>
	<div class="date">29.10.2020</div>
</div>

<style>
	:global(body) {
		background-color: #f1f1f1;
	}

	a {
		color: black;
		text-decoration: none;
		font-size: 25px;
		font-weight: 400;
	}

	.container {
		padding: 10px 25px;
		background-color: white;
		border-radius: 15px;
		word-break: break-word;
		min-width: 0;
		-webkit-box-shadow: 0px 0px 7px -4px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 7px -4px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 7px -4px rgba(66, 68, 90, 1);
	}

	.details {
		padding: 30px 0 15px 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		text-align: left;
		gap: 50px;
	}

	img {
		width: 340px;
		height: 210px;
	}

	.date {
		text-align: right;
		font-size: 15px;
	}
</style>
