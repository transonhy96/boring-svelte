<script lang="ts">
	import { useOnboard } from '$lib/providers/Onboard';
	const { store } = useOnboard();
</script>

<main class="main">
	This is page
	{$store?.account?.address}
</main>
