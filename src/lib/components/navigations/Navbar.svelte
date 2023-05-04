<script lang="ts">
	import ConnectWallet from '../ConnectWallet.svelte';
	import NetworkBrowser from '../networks/NetworkBrowser.svelte';
</script>

<div class="flex justify-between w-full p-2 boring-transition">
	<div />
	<div />
	<div class="flex items-center justify-center gap-4">
		<NetworkBrowser />
		<ConnectWallet />
	</div>
</div>
