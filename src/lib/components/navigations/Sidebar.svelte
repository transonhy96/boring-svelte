<script lang="ts">
	import clsx from 'clsx';
	import Menu from './NavMenu.svelte';
	import Icon from '@iconify/svelte';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
	export let isExpanded: boolean;
	const setIsExpanded = () => {
		isExpanded = !isExpanded;
		localStorage.setItem('drawer', isExpanded ? 'open' : 'closed');
	};
</script>

<div
	id="sidebar"
	class={clsx(
		isExpanded ? 'md:w-40 lg:w-52' : 'w-14 md:flex md:flex-col',
		'py-5 pt-8 group boring-transition relative h-screen bg-white dark:bg-neutral-800 sidebar'
	)}
>
	<button
		class="absolute items-center justify-center border rounded-full shadow-lg cursor-pointer group-hover:flex bg-slate-600 border-default -right-2 top-5 stroke-white"
		on:click={() => {
			setIsExpanded();
		}}
	>
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			class="rotate-180"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9 5L6 8L9 11"
				stroke-width="0.916667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/></svg
		>
	</button>
	<div class="flex flex-col mt-16">
		<Menu {isExpanded} />
	</div>
	<div class="flex items-center justify-center w-full p-4 mt-4">
		<ThemeSwitcher />
	</div>
	<div class="absolute bottom-0 left-0 w-full">
		<div class="-mb-2 divider" />
		<a
			class="flex items-center justify-center w-full gap-2 p-4 text-black truncate dark:text-white"
			href="/terms"
		>
			{#if isExpanded}
				Terms of service
			{/if}
			<Icon icon="ic:baseline-open-in-new" width={24} height={24} />
		</a>
	</div>
</div>
