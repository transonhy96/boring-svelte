<script>
	import { Navbar, Sidebar } from '$lib/components/navigations';
	import WalletDetailModal from '$lib/components/WalletDetailModal.svelte';
	import OnboardProvider from '$lib/providers/OnboardProvider.svelte';
	import '../app.css';
</script>

<OnboardProvider>
	<div class="flex w-full bg-default">
		<div id="desktop-nav-sidebar ">
			<Sidebar/>
		</div>
		<div id="desktop-main-content" class="w-full">
			<Navbar />
			<slot />
		</div>

	</div>
	<WalletDetailModal />
</OnboardProvider>
