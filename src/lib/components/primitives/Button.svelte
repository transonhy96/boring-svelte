<script lang="ts">
	import clsx from 'clsx';

	export let handler: () => void = () => {};
	export let isLoading: boolean = false;
	export let cClass: string = '';
</script>

<button
	class={clsx(
		'gap-2 m-1 rounded-full btn border-neutral-800 no-animation',
		isLoading && 'loading',
		cClass
	)}
	on:click={handler}
>
	<slot />
</button>
