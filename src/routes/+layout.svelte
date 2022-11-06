<script>
	import NavBar from 'src/components/NavBar.svelte';
    import "../app.css";
</script>


<NavBar />

<div style="margin-left: 100px; position: relative; overflow-x: hidden;">
    <slot />
</div>

