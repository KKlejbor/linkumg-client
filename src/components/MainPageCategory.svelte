<script lang="ts">
	export let text: string;
	export let image: string;
	export let href: string;
</script>

<a {href} class="card flex-1 relative h-1/3 w-full">
	<img src={image} alt="alternative" class="brightness-50 h-full w-full object-cover" />
	<span class="text-white absolute text-2xl top-[50%] right-[20px]">{text}</span>
</a>

<style>
	a:hover img {
		filter: brightness(0.35);
	}
</style>
