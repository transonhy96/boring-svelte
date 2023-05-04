import type { InitOptions } from '@web3-onboard/core';
import injectedWalletsModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import { chains } from './chains';
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
export const onboardConfig: InitOptions = {
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
}