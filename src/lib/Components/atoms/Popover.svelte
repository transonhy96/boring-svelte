<script lang="ts">
	/// Popover will not autoclose when clicking to items inside it, menu is the opposited
	import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
</script>

<Popover class="relative">
	<PopoverButton as="div">
		<slot name="trigger" />
	</PopoverButton>
	<Transition
		enter="transition duration-300 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-100 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<PopoverPanel
			as="div"
			let:close
			class="absolute right-0 p-2 mt-1 origin-top-right rounded-lg bg-subdued focus:outline-none border"
		>
			<slot {close} name="content" />
		</PopoverPanel>
	</Transition>
</Popover>
