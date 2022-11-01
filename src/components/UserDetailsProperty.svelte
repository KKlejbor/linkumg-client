<script lang="ts">
	export let heading: string;
	export let value: string;
</script>

<span class="heading">{heading}</span>
<span class="value">{value}</span>

<style>
	.heading {
		font-weight: bold;
		font-size: 30px;
	}

	.value {
		font-size: 28px;
	}
</style>
