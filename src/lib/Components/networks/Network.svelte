<script lang="ts">
	import clsx from 'clsx';

	export let network: string;
	export let connected: boolean;
</script>

<div
	class={clsx(
		connected && 'bg-violet-950 pointer-events-none',
		'flex items-center w-56 gap-2 p-2 overflow-hidden rounded-md cursor-pointer hover:bg-green-800'
	)}
>
	<div class="flex items-start justify-center gap-2">
		<svg
			class="rounded-full"
			aria-hidden="true"
			width="24"
			height="24"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style="background: #25292E"
			><path
				d="M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z"
				fill="#ffffff"
			/><path
				d="M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z"
				fill="#ffffff"
			/><path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z"
				fill="#ffffff"
			/><path d="M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z" fill="#ffffff" /><path
				d="M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z"
				fill="#ffffff"
			/></svg
		>
		<div class="flex">
			<span class="text-default">{network}</span>
		</div>
		{#if connected}
			<span class="text-primary">Connected</span>
		{/if}
	</div>
</div>
