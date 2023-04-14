import { get, writable } from "svelte/store";
import type { WalletState } from "@web3-onboard/core";
export type WalletStore = {
    address?: string;
    chainId?: string;
    name: string;
    logo?: string;
    ens?: string;
}
const defaultWalletState: WalletStore = {
    name: "Metamask"
}
export const walletStore = writable(defaultWalletState);
export const getWalletStore = get(walletStore);
export const updateWallet = (update: WalletState) => {
    console.log({ update });
    walletStore.update((s) => {
        return {
            ...s,
            address: update.accounts[0].address,
            chainId: update.chains[0].id,
            name: update.label,
            logo: update.icon,
            ens: update.accounts[0].ens?.name
        };
    });
}
export const resetWallet = () => {
    walletStore.set(defaultWalletState);
}

