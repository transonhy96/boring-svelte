<script lang="ts">
	import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@rgossiaux/svelte-headlessui';
	interface MenuItemProps {
		name: string;
	}
	export let title: string;
	export let items: MenuItemProps[];
</script>

<Menu class="relative">
	<MenuButton>
		<slot name="button" />
	</MenuButton>
	<Transition
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<MenuItems
			class="absolute right-0 w-56 p-2 mt-2 origin-top-right rounded-md bg-base-200 focus:outline-none"
		>
			<div class="flex my-3 ml-2 text-sm">{title}</div>
			<div class="flex flex-col">
				{#each items as item}
					<MenuItem let:active>
						<slot name="item" title={item.name} {active} />
					</MenuItem>
				{/each}
			</div>
		</MenuItems>
	</Transition>
</Menu>
