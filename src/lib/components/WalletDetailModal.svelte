<script lang="ts">
	import BaseModal from './BaseModal.svelte';
	import { ModalKey, modalStore, toggleModal } from '$lib/store/modals.store';
	import { truncateWalletAddress } from '$lib/utils/wallet.utils';
	import { useOnboard } from '$lib/providers/Onboard';
	const { disconnect, store } = useOnboard();
	const handleDisconnect = () => {
		disconnect();
		toggleModal(ModalKey.WalletDetail);
	};
</script>

<BaseModal
	title={'Your wallet'}
	isOpen={$modalStore.WalletDetail}
	onClose={() => {
		toggleModal(ModalKey.WalletDetail);
	}}
>
	<div>
		<div class="avatar online">
			<div class="w-20 rounded-full">
				<img alt="" src="https://api.lorem.space/image/face?w=150&h=150" />
			</div>
		</div>
		<div>
			{truncateWalletAddress(($store.account && $store.account.address) || '')}
		</div>
		<div class="divider" />
		<div class="flex items-center gap-2">
			<div class="overflow-hidden border rounded-full border-slate-500">
				<img
					class="mx-auto"
					width="28px"
					height="28px"
					alt=""
					src="https://explorer-api.walletconnect.com/v3/logo/lg/692ed6ba-e569-459a-556a-776476829e00?projectId=a8d876c6f91c3748db621583fad358f1"
				/>
			</div>
			<p>0 ETH</p>
		</div>
		<div class="divider" />
		<div class="grid w-3/4 grid-cols-3 gap-4 mx-auto">
			<button
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
				>Change network
			</button>
			<button
				class="flex flex-col items-center justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g fill="none" stroke="currentColor" stroke-width="1.5"
						><path
							d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5Z"
						/><path
							d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"
							opacity=".5"
						/></g
					></svg
				>
				Copy address
			</button>
			<button
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
				on:click={() => {
					handleDisconnect();
				}}>Disconnect</button
			>
		</div>
	</div>
</BaseModal>
