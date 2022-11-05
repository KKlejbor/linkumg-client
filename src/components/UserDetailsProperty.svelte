<script lang="ts">
	export let heading: string;
	export let value: string;
</script>

<div>
    <div class="heading">{heading}:</div>
    <div class="value">{value}</div>
</div>

<style>
	.heading {
		font-weight: bold;
		font-size: 30px;
        margin-bottom: 5px;
	}

	.value {
		font-size: 28px;
	}
</style>
