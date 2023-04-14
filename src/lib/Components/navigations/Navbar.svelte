<script lang="ts">
	import ConnectWallet from '../ConnectWallet.svelte';
	import NetworkBrowser from '../networks/NetworkBrowser.svelte';
</script>

<div class="flex justify-between boring-transition w-full p-2">
	<div></div>
	<div></div>
	<div class="flex justify-center items-center gap-4">
		<NetworkBrowser />
		<ConnectWallet />
	</div>
</div>
