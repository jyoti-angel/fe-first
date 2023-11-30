<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<style>
		body {
			--bg: #222;
			--fg: #ddd;
			--divider: #666;
			background: var(--bg) !important;
			color: var(--fg);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100vh;
		}
	</style>
</svelte:head>

<div class="flex items-center justify-center height-full" />
<div class="error">
	<span class="status">{$page.status}</span>
	<div class="message">
		<h1>{$page.error?.message}</h1>
	</div>
</div>

<style>
	.error {
		display: flex;
		align-items: center;
		max-width: 32rem;
		margin: 0 1rem;
	}

	.status {
		font-weight: 200;
		font-size: 3rem;
		line-height: 1;
		position: relative;
		top: -0.05rem;
	}

	.message {
		border-left: 1px solid var(--divider);
		padding: 0 0 0 1rem;
		margin: 0 0 0 1rem;
		min-height: 2.5rem;
		display: flex;
		align-items: center;
	}

	.message h1 {
		font-weight: 400;
		font-size: 1em;
		margin: 0;
	}
</style>
