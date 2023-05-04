<script lang="ts">
	import { useOnboard } from '$lib/providers/Onboard';
	const { store } = useOnboard();
</script>

<div class="flex justify-center hero">This is crop {$store?.account?.address}</div>
