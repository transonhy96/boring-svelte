<script lang="ts">
	import { setContext } from 'svelte';
	import Onboard from '@web3-onboard/core';
	import type { OnboardAPI } from '@web3-onboard/core';
	import injectedWalletsModule from '@web3-onboard/injected-wallets';
	import walletConnectModule from '@web3-onboard/walletconnect';
	import { chains } from '$lib/configs/chains';
	import { updateWallet } from '$lib/store/wallet.store';
	console.log('revaluadated')
	const injected = injectedWalletsModule();
	const walletConnect = walletConnectModule({
		connectFirstChainId: true,
		qrcodeModalOptions: {
			mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
		}
	});
	const availableWallets = [injected, walletConnect];
	const appMetadata = {
		name: 'Web3-Onboard Svelte Demo',
		icon: '<svg />',
		logo: '<svg />',
		description: 'Demo using Onboard',
		recommendedInjectedWallets: [
			{ name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
			{ name: 'MetaMask', url: 'https://metamask.io' }
		]
	};
	let onboard: OnboardAPI = Onboard({
		wallets: availableWallets,
		chains,
		appMetadata,
		accountCenter: {
			desktop: {
				enabled: false
			},
			mobile: {
				enabled: false
			}
		}
	});

	$: walletStreams = onboard.state.select('wallets');
	$: wallets = $walletStreams;
	$: if (wallets && wallets[0]) {
		console.log('updated');
		updateWallet(wallets[0]);
	}

	setContext<OnboardAPI>('w3onboard', {
		...onboard
	});
</script>

<slot />
