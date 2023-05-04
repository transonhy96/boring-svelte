<script lang="ts">
	import { browser } from '$app/environment';
	import WalletDetailModal from '$lib/components/WalletDetailModal.svelte';
	import { Sidebar, Navbar } from '$lib/components/navigations';
	import { OnboardProvider } from '$lib/providers/Onboard';
	import '../app.css';
	export let isExpanded = false;
	$: {
		console.log({ browser });
		console.log({ isExpanded });
		if (browser) {
			isExpanded = localStorage?.getItem('drawer') === 'open';
		}
		console.log({ isExpanded });
	}
</script>

<OnboardProvider>
	<div class="flex w-full bg-default">
		<div id="desktop-nav-sidebar ">
			<Sidebar {isExpanded} />
		</div>
		<div id="desktop-main-content" class="w-full">
			<Navbar />
			<slot />
		</div>
	</div>
	<WalletDetailModal />
</OnboardProvider>
