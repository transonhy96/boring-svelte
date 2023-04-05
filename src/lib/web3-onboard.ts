import Onboard from '@web3-onboard/core'
import type { OnboardAPI } from '@web3-onboard/core'
import injectedWalletsModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'

const injected = injectedWalletsModule()
const walletConnect = walletConnectModule({
    connectFirstChainId: true,
    qrcodeModalOptions: {
        mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
    }
})

const wallets = [injected, walletConnect]

export const chains = [
    {
        id: 11155111,
        token: 'ETH',
        label: 'Sepolia',
        rpcUrl: 'https://rpc.sepolia.org/'
    },
    {
        id: '0x38',
        token: 'BNB',
        label: 'Binance Smart Chain',
        rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
        id: '0x89',
        token: 'MATIC',
        label: 'Matic Mainnet',
        rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
        id: 10,
        token: 'OETH',
        label: 'Optimism',
        rpcUrl: 'https://mainnet.optimism.io'
    },
    {
        id: 42161,
        token: 'ARB-ETH',
        label: 'Arbitrum',
        rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
        id: 84531,
        token: 'ETH',
        label: 'Base Goerli',
        rpcUrl: 'https://goerli.base.org'
    }
];

const appMetadata = {
    name: 'Web3-Onboard Svelte Demo',
    icon: '<svg />',
    logo: '<svg />',
    description: 'Demo using Onboard',
    recommendedInjectedWallets: [
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
        { name: 'MetaMask', url: 'https://metamask.io' }
    ]
}
let onboard;

if (!onboard) {
    onboard = Onboard({
        wallets,
        chains,
        appMetadata,
        accountCenter:{
            desktop:{
                enabled:false,
            },
            mobile:{
                enabled:false
            }
        }
    })
}
export default onboard as OnboardAPI