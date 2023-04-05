import { writable } from "svelte/store";

export enum ModalKey {
    WalletDetail = 'WalletDetail'
}
export type ModalStore = Record<ModalKey, boolean>;
const defaultModalState: ModalStore = {
    WalletDetail: false
};

export const modalStore = writable(defaultModalState);

export const toggleModal = (key: ModalKey) => {

    modalStore.update(s => {
        return {
            ...s,
            [key]: !s[key]
        }
    });
}