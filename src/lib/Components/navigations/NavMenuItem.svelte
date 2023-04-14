<script lang="ts">
	import clsx from 'clsx';
	import Icon from '@iconify/svelte';
	export let title: string;
	export let active: boolean;
	export let expanded: boolean;
	export let icon: string;
	export let toggle: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<a
	href={title.toLocaleLowerCase()}
	on:click={() => {
		toggle();
	}}
	class="relative flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-base-100"
>
	{#if active}
		<div class="hidden md:inline-block h-6 w-0.5 bg-primary absolute right-0" />
	{/if}
	<div class={clsx(active && 'text-primary')}>
		<Icon width="24" height="24" {icon} />
	</div>
	<div
		class={clsx(
			expanded ? 'flex' : 'hidden',
			active && 'text-default',
			'boring-transition font-semibold truncate'
		)}
	>
		{title}
	</div>
</a>
