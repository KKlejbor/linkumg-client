<script lang="ts">
	export let text: string;
	export let image: string;
	export let href: string;
</script>

<div class="container">
	<a {href}>
		<img src={image} alt="alternative" />
		<h1>{text}</h1>
	</a>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	img {
		max-width: inherit;
		max-height: inherit;
		height: inherit;
		width: inherit;
		object-fit: cover;
		filter: brightness(0.44);
	}

	h1 {
		position: absolute;
		top: 50%;
		right: 70px;
		color: white;
		z-index: 5;
		transform: translateY(-50%);
		text-align: right;
		max-width: 600px;
	}
</style>
