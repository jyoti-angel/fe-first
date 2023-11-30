<script lang="ts">
	import { Button, type IButton, BtnSize, BtnVariant } from 'svelte-components';
	import { ArrowUpSolid } from 'svelte-components/icons';
	const startAdornment: IButton['startAdornment'] = {
		iconComp: ArrowUpSolid,
		width: 20,
		height: 20,
		stroke: 'white'
	};
</script>

<div class="border-solid border-green border-2 p-3 m-3 text-center">
	<h1>This is Test component</h1>
	<p>Update /src/lib/components/TestComponent.svelte</p>
	<Button
		text={{ label: 'test button' }}
		{startAdornment}
		variant={BtnVariant.Contained}
		size={BtnSize.LG}
	/>
</div>
