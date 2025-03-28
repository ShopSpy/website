<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>ShopSpy</title>
</svelte:head>
{@render children()}
