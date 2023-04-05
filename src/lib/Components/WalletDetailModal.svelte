<script lang="ts">
	import { ModalKey, modalStore, toggleModal } from '../../store/modals.store';
	import BaseModal from './BaseModal.svelte';
</script>

<BaseModal
	isOpen={$modalStore.WalletDetail}
	onClose={() => {
		toggleModal(ModalKey.WalletDetail);
	}}
>
	<div>This is modal</div>
</BaseModal>
