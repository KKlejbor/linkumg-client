<script lang="ts">
	export let text: string;
	export let image: string;
	export let href: string;
</script>

<div class="relative h-1/3 w-full overflow-hidden">
	<a {href}>
		<img src={image} alt="alternative" class="h-full w-full brightness-50" />
		<h1 class="absolute top-1/2 right-0 mr-10 -translate-y-1/2 text-5xl text-white">{text}</h1>
	</a>
</div>
