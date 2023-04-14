import type { OnboardAPI } from "@web3-onboard/core";
import { getContext } from "svelte"

export const useOnboard = (): OnboardAPI => {
    return getContext<OnboardAPI>('w3onboard');
}