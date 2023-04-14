<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	import { slide } from 'svelte/transition';
	export let isOpen: boolean;
	export let onClose: Function;
	export let title: string = 'Modal';
	export let descriptions: string = 'Description';
</script>

{#if isOpen}
	<div transition:slide>
		<Dialog class="w-full" open={isOpen} on:close={() => onClose()}>
			<DialogOverlay
				on:close={() => onClose()}
				class="fixed top-0 left-0 w-full h-full bg-black opacity-60"
			/>
			<div
				class="flex flex-col w-1/3 p-6 mx-auto overflow-hidden text-left align-middle transition-all transform translate-y-1/2 shadow-xl bg-primary rounded-2xl"
			>
				<button
					class="fixed top-2 right-2 btn btn-circle btn-outline no-animation"
					on:click={() => {
						onClose();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
				<h2 class="card-title">
					<DialogTitle>{title}</DialogTitle>
				</h2>
				<DialogDescription>
					{descriptions}
				</DialogDescription>
				<div class="p-6">
					<slot />
				</div>
			</div>
		</Dialog>
	</div>
{/if}
