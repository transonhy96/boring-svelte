<script lang="ts">
	let inputRef: HTMLInputElement;
	let imageRef: HTMLImageElement;
	let file: File | undefined = undefined;
	let fileName: string | undefined = undefined;
	let s: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={() => {
		if (inputRef) {
			inputRef.click();
		}
	}}
	on:dragenter={(e) => {
		console.log(e);
	}}
	on:drop={(e) => {
		console.log(e);
	}}
	on:dragover={(ev) => {
		ev.preventDefault();
	}}
	class="flex flex-col items-center justify-center h-full gap-4 text-gray-700 transition-all duration-300 ease-in-out border border-gray-800 border-dashed cursor-pointer border-spacing-2 rounded-xl hover:bg-base-300"
>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.7161 16.9738H8.49609C8.08209 16.9738 7.74609 16.6378 7.74609 16.2238C7.74609 15.8098 8.08209 15.4738 8.49609 15.4738H15.7161C16.1301 15.4738 16.4661 15.8098 16.4661 16.2238C16.4661 16.6378 16.1301 16.9738 15.7161 16.9738"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.7161 12.7872H8.49609C8.08209 12.7872 7.74609 12.4512 7.74609 12.0372C7.74609 11.6232 8.08209 11.2872 8.49609 11.2872H15.7161C16.1301 11.2872 16.4661 11.6232 16.4661 12.0372C16.4661 12.4512 16.1301 12.7872 15.7161 12.7872"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M11.2501 8.61047H8.49512C8.08112 8.61047 7.74512 8.27447 7.74512 7.86047C7.74512 7.44647 8.08112 7.11047 8.49512 7.11047H11.2501C11.6641 7.11047 12.0001 7.44647 12.0001 7.86047C12.0001 8.27447 11.6641 8.61047 11.2501 8.61047"
			fill="currentColor"
		/><mask
			id="mask0_501_24498"
			maskUnits="userSpaceOnUse"
			x="3"
			y="2"
			width="19"
			height="100%"
			style="mask-type: alpha;"
			><path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3 2.00024H21.1647V21.91H3V2.00024Z"
				fill="currentColor"
			/></mask
		><g mask="mask0_501_24498"
			><path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15.909 3.5L8.22 3.504C5.892 3.518 4.5 4.958 4.5 7.357V16.553C4.5 18.968 5.905 20.41 8.256 20.41L15.945 20.407C18.273 20.393 19.665 18.951 19.665 16.553V7.357C19.665 4.942 18.261 3.5 15.909 3.5ZM8.257 21.91C5.113 21.91 3 19.757 3 16.553V7.357C3 4.124 5.047 2.023 8.215 2.004L15.908 2H15.909C19.053 2 21.165 4.153 21.165 7.357V16.553C21.165 19.785 19.118 21.887 15.95 21.907L8.257 21.91Z"
				fill="currentColor"
			/></g
		></svg
	>
	<div class="flex items-center gap-1 text-sm">
		{#if !file}
			<span class="text-gray-700"> Drop media or </span>
			<span class="text-primary">Upload</span>
		{:else}
			<div>
				<span class="text-primary">{fileName}</span>
				<img bind:this={imageRef} src={s} alt="" />
			</div>
		{/if}
		<input
			bind:this={inputRef}
			on:change={(e) => {
				if (inputRef && inputRef?.files) {
					file = inputRef?.files[0];
					fileName = inputRef.files[0].name;
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.addEventListener('load', function (e) {
						s = e.target?.result;
					});
					return;
				}
			}}
			class="hidden"
			type="file"
			tabindex="-1"
		/>
	</div>
</div>
