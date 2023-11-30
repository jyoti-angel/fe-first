<script>
	import { dummyStore } from '$root/src/lib/stores/dummy';
	import { onMount } from 'svelte';
	onMount(() => {
		dummyStore.update((prev) => ({ ...prev, test: prev.test.concat('c') }));
	});
</script>

<p>this is nested route</p>
{JSON.stringify($dummyStore)}
