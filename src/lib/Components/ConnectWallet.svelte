<script lang="ts">
	import { useOnboard } from '$lib/providers';
	import { resetWallet, walletStore } from '$lib/store/wallet.store';
	import { truncateWalletAddress } from '$lib/utils/walletUtils';
	import Popover from './atoms/Popover.svelte';
	import clsx from 'clsx';

	const { connectWallet, disconnectWallet } = useOnboard();

	let isConnecting = false;
	const handleConnect = async () => {
		if (!$walletStore.address) {
			isConnecting = true;
			await connectWallet();
			isConnecting = false;
		} else {
			return;
		}
	};
	const handleDisconnect = async () => {
		console.log('disconnect');
		await disconnectWallet({ label: $walletStore.name });
		resetWallet();
	};
</script>

<Popover>
	<button
		class={clsx('flex text-default gap-2 rounded-full p-2 border ', isConnecting && 'loading btn-square')}
		on:click={() => handleConnect()}
		slot="trigger"
	>
		{#if $walletStore.address && !isConnecting}
			<svg

				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2044 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
					fill="currentColor"
				/>
			</svg>
			{$walletStore.ens ? $walletStore.ens : truncateWalletAddress($walletStore.address)}
		{:else if !isConnecting}
			<div>Connect wallet</div>
		{:else }
			<div>Connecting</div>
		{/if}
	</button>
	<div slot="content" let:close>
		{#if $walletStore.address}
			<div class="text-primary-content">
				<div class="card-body">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<svg
								class="text-default"
								width="25px"
								height="25px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2044 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
									fill="currentColor"
								/>
							</svg>
							<h3 class="text-default">Wallet</h3>
						</div>
						<button
							class="flex items-center gap-1 text-xs cursor-pointer text-primary text-default"
							on:click={() => {
								handleDisconnect();
								close(null);
							}}
						>
							Disconnect
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.59L10.29 8.71C10.1968 8.61676 10.1228 8.50607 10.0723 8.38425C10.0219 8.26243 9.99591 8.13186 9.99591 8C9.99591 7.86814 10.0219 7.73757 10.0723 7.61575C10.1228 7.49393 10.1968 7.38324 10.29 7.29C10.3832 7.19676 10.4939 7.1228 10.6158 7.07234C10.7376 7.02188 10.8681 6.99591 11 6.99591C11.1319 6.99591 11.2624 7.02188 11.3842 7.07234C11.5061 7.1228 11.6168 7.19676 11.71 7.29L15.71 11.29C15.801 11.3851 15.8724 11.4972 15.92 11.62C16.02 11.8635 16.02 12.1365 15.92 12.38C15.8724 12.5028 15.801 12.6149 15.71 12.71L11.71 16.71C11.617 16.8037 11.5064 16.8781 11.3846 16.9289C11.2627 16.9797 11.132 17.0058 11 17.0058C10.868 17.0058 10.7373 16.9797 10.6154 16.9289C10.4936 16.8781 10.383 16.8037 10.29 16.71C10.1963 16.617 10.1219 16.5064 10.0711 16.3846C10.0203 16.2627 9.9942 16.132 9.9942 16C9.9942 15.868 10.0203 15.7373 10.0711 15.6154C10.1219 15.4936 10.1963 15.383 10.29 15.29L12.59 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12ZM7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15C5.26522 15 5.51957 15.1054 5.70711 15.2929C5.89464 15.4804 6 15.7348 6 16V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V8C6 8.26522 5.89464 8.51957 5.70711 8.70711C5.51957 8.89464 5.26522 9 5 9C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8V5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2Z"
									fill="currentColor"
								/></svg
							>
						</button>
					</div>
					<div class="gap-1 p-4 mt-2 w-60 rounded-xl bg-opacity-50 text-default">
						<h3>
							{$walletStore.name}
						</h3>
						<div class="flex items-center justify-between gap-1 mt-2">
							<div class="flex items-center gap-2">
								<svg width="24" height="24">
									{@html $walletStore.logo}
								</svg>
								{$walletStore.ens ? $walletStore.ens : truncateWalletAddress($walletStore.address)}
							</div>
							<div class="cursor-pointer text-primary">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M19 8H12C10.8954 8 10 8.89543 10 10V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><path
										d="M7 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div class="flex items-center gap-2 mt-4 cursor-pointer text-primary">
							View on Explorer
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M9 19L16 12L9 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</Popover>
