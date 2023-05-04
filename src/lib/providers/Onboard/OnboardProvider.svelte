<script lang="ts">
	import { setContext } from 'svelte';
	import Onboard from '@web3-onboard/core';
	import type { OnboardAPI } from '@web3-onboard/core';
	import { onboardConfig } from '$lib/configs/onboard.configs';
	import { writable } from 'svelte/store';
	import type { Web3OnboardCtxData } from '.';

	const defaultWalletState: Web3OnboardCtxData = {
		isConnecting: false,
		wallet: undefined,
		account: undefined,
		chainId: undefined
	};
	const walletStore = writable<Web3OnboardCtxData>(defaultWalletState);

	let onboard: OnboardAPI = Onboard(onboardConfig);

	$: walletStreams = onboard.state.select('wallets');
	$: {
		let wallets = $walletStreams;
		if (wallets && wallets[0]) {
			walletStore.update((s) => ({
				...s,
				wallet: wallets[0],
				account: { ...wallets[0].accounts[0], truncated: '' },
				chainId: wallets[0].chains[0].id
			}));
		}
	}

	const connect = async () => {
		$walletStore = { ...$walletStore, isConnecting: true };
		await onboard.connectWallet();
		$walletStore = { ...$walletStore, isConnecting: false };
	};
	const disconnect = async () => {
		await onboard.disconnectWallet({
			label: $walletStore.wallet?.label || 'Metamask'
		});
		$walletStore = defaultWalletState;
	};
	setContext('w3onboard', {
		connect,
		disconnect,
		store: walletStore
	});
</script>

<slot />
