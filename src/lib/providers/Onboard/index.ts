import type { WalletState } from "@web3-onboard/core";
import type { Account } from "lib/types/wallet.type";
import { getContext } from "svelte"
import type { Writable } from "svelte/store";

export interface Web3OnboardCtxData {
    isConnecting: boolean;
    wallet: WalletState | undefined;
    account: Account | undefined;
    chainId: string | undefined;
}
export interface Web3OnboardCtxType {
    connect: () => void;
    disconnect: () => void;
    store: Writable<Web3OnboardCtxData>
}
export const useOnboard = (): Web3OnboardCtxType => {
    return getContext<Web3OnboardCtxType>('w3onboard');
}

export { default as OnboardProvider } from './OnboardProvider.svelte'