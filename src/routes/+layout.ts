import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { onMount } from 'svelte';

onMount(() => {
	if (browser) {
		posthog.init('phc_VVNt8OcoqeDHu5vyh0JjblIG5QhouCR9IkFVtQtxnNc', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
		});
	}
	return;
});
