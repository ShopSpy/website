<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			posthog.init('phc_VVNt8OcoqeDHu5vyh0JjblIG5QhouCR9IkFVtQtxnNc', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only'
			});
		}
	});
	let { children } = $props();
</script>

<svelte:head>
	<title>ShopSpy</title>
</svelte:head>
<div class="font-display selection:bg-shopspy-200 bg-neutral-100">
	{@render children()}
</div>
