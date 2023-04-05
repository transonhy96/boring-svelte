<script>
	import Navbar from '$lib/Components/Navbar.svelte';
	import WalletDetailModal from '$lib/Components/WalletDetailModal.svelte';
	import '../app.css';
</script>

<Navbar />
<slot />
<WalletDetailModal />
