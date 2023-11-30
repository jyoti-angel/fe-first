<script>
	import { dummyStore } from '$root/src/lib/stores/dummy';
	import { onMount } from 'svelte';
	onMount(() => {
		dummyStore.update((prev) => ({ ...prev, test: prev.test.concat('d') }));
	});
</script>

<p>this is nested/[slug]/route route</p>
{JSON.stringify($dummyStore)}
