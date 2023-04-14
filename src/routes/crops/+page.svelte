<script lang="ts">
	import { walletStore } from '$lib/store/wallet.store';
</script>

<div class="flex justify-center hero">This is crop {$walletStore.address}</div>
