<script lang="ts">
	import type { WalletState } from '@web3-onboard/core';
	import { resetWallet, updateWallet, walletStore } from '../../store/wallet.store';
	import onboard from '$lib/web3-onboard';
	import type { WalletStore } from '../../store/wallet.store';
	import { ModalKey, toggleModal } from '../../store/modals.store';
	// Subscribe to wallet updates
	let wallets: WalletState[] = [];
	onboard.state.select('wallets').subscribe((val) => (wallets = val));
	let storedAccount: WalletStore;
	// The first wallet in the array of connected wallets

	$: if (wallets[0]) {
		updateWallet(wallets[0]);
	}
	walletStore.subscribe((val) => (storedAccount = val));

	const connect = async () => {
		await onboard.connectWallet();
	};

	const disconnect = () => {
		onboard.disconnectWallet({ label: storedAccount.name || '' });
		resetWallet();
	};

	const openModal = () => {
		toggleModal(ModalKey.WalletDetail);
	};

	const trunc = (address: string) =>
		address ? address.slice(0, 6) + '...' + address.slice(-6) : null;

	$: console.log({ storedAccount });
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start" />
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
	<div class="navbar-end">
		{#if storedAccount.address}
			<div class="wallet">
				<button class="btn gap-2" on:click={openModal}>
					<svg width="25px" height="25px">
						{@html storedAccount.logo}
					</svg>
					{trunc(storedAccount.address)}</button
				>
			</div>
		{:else}
			<div>
				<button class="btn" on:click={connect}>Connect</button>
			</div>
		{/if}
	</div>
</div>
