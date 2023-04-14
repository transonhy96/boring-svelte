<script lang="ts">
	import Icon from '@iconify/svelte';
	import Network from '$lib/components/networks/Network.svelte';
	import Popover from '../atoms/Popover.svelte';
	const items = [
		{
			name: 'Ethereum'
		},
		{
			name: 'Binance Chain'
		},
		{
			name: 'Polygon'
		}
	];
</script>

<Popover>
	<button
		slot="trigger"
		class="border flex items-center justify-center gap-2 p-1 overflow-hidden rounded-full shadow-md cursor-pointer"
	>
		<svg
			class="rounded-full"
			aria-hidden="true"
			width="24"
			height="24"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style="background: #25292E"
			><path
				d="M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z"
				fill="#ffffff"
			/><path
				d="M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z"
				fill="#ffffff"
			/><path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z"
				fill="#ffffff"
			/><path d="M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z" fill="#ffffff" /><path
				d="M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z"
				fill="#ffffff"
			/></svg
		>
		<Icon icon="mdi:chevron-down" class=" text-default" />
	</button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		slot="content"
		class="p-2"
		let:close
		on:click={() => {
			close(null);
		}}
	>
		<div class="flex my-3 ml-2 text-sm text-default">Switch networks</div>
		<div class="flex flex-col gap-1">
			{#each items as item}
				<Network connected={item.name == 'Ethereum'} network={item.name} />
			{/each}
		</div>
	</div>
</Popover>
