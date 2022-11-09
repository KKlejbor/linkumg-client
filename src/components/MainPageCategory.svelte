<script lang="ts">
	export let text: string;
	export let image: string;
	export let href: string;
</script>

<div class="w-full relative h-1/3">
	<a {href}>
		<img src={image} alt="alternative" class="brightness-50 w-full h-full" />
		<h1 class="absolute inset-y-1/2 right-0 text-white mr-10 text-5xl">{text}</h1>
	</a>
</div>