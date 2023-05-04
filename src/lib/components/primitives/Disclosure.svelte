<script lang="ts">
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	export let title: string = '';
</script>

<Disclosure defaultOpen>
	<DisclosureButton
		class="flex items-center justify-between gap-4 text-sm text-gray-300 font-extralight"
		>{title}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			class="w-5 h-5 text-purple-500 transform rotate-180"
			><path
				fill-rule="evenodd"
				d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
				clip-rule="evenodd"
			/></svg
		></DisclosureButton
	>
	<Transition
		enter="transition ease duration-500 transform"
		enterFrom="opacity-0 -translate-y-12"
		enterTo="opacity-100 translate-y-0"
		leave="transition ease duration-300 transform"
		leaveFrom="opacity-100 translate-y-0"
		leaveTo="opacity-0 -translate-y-12"
	>
		<DisclosurePanel>
			<slot />
		</DisclosurePanel>
	</Transition>
</Disclosure>
