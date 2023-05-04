<script lang="ts">
	import Disclosure from '$lib/components/primitives/Disclosure.svelte';
	import Uploader from '$lib/components/Uploader.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
</script>

<div class="flex md:w-3/4 gap-8 p-5 m-auto md:flex-row sm:w-full sm:flex-col">
	<div class="flex flex-col md:w-1/2 gap-1 sm:w-full">
		<p class="text-xl font-semibold text-white">Mint new ID</p>
		<div class="mt-6 transition-all duration-700 ease-in-out">
			<span class="text-white">Upload Media *</span>
			<Disclosure title="View Supported files">
				<div class="flex items-center h-8 gap-3 mt-2">
					<div class="badge">JPEG</div>
					<div class="badge">GIF</div>
					<div class="badge">PNG</div>
					<div class="badge">SVG</div>
				</div>
				<span class="text-sm text-gray-300 font-extralight">Max size: 30 MB</span>
			</Disclosure>
		</div>
		<div class="mt-3 h-52">
			<Uploader />
		</div>
		<div class="flex flex-col mt-3">
			<div class="flex gap-2">
				<span class="text-white"> Attributes </span>
				<div
					class="items-center justify-center w-6 h-6 text-gray-700 cursor-pointer rounded-xl hover:bg-base-300"
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
							d="M11.75 16.1543C11.336 16.1543 11 15.8183 11 15.4043V8.07727C11 7.66327 11.336 7.32727 11.75 7.32727C12.164 7.32727 12.5 7.66327 12.5 8.07727V15.4043C12.5 15.8183 12.164 16.1543 11.75 16.1543"
							fill="currentColor"
						/><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.4165 12.4902H8.0835C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902H15.4165C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902"
							fill="currentColor"
						/><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5H7.064ZM16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5V22.5Z"
							fill="currentColor"
						/></svg
					>
				</div>
			</div>

			<span class="mt-2 text-sm text-gray-300 font-extralight"
				>Attributes help increase engagement and attract more viewers</span
			>
			<div class="flex items-center gap-2 mt-5">
				<input
					type="text"
					placeholder="Key"
					class="w-full input input-bordered input-ghost placeholder:text-gray-300"
				/>
				<input
					type="text"
					placeholder="Value"
					class="w-full input input-bordered input-ghost placeholder:text-gray-300"
				/>
				<svg
					class="w-12 h-12 cursor-pointer"
					width="25"
					height="25"
					viewBox="0 0 24 25"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M18 6.5L6 18.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/><path
						d="M18 18.5L6 6.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/></svg
				>
			</div>
		</div>
		<div class="mt-3">
			<Button cClass="text-white bg-primary">Mint</Button>
		</div>
	</div>
	<div class="md:w-1/2 sm:w-full">
		<div class="w-full mt-3">
			<span> General </span>
			<div class="flex flex-col w-full gap-2 mt-3">
				<input
					type="text"
					placeholder="Name"
					class="w-full input input-bordered input-ghost placeholder:text-gray-300"
				/>
				<textarea
					placeholder="Bio"
					class="w-full h-80 textarea textarea-bordered textarea-ghost textarea-xs placeholder:text-gray-300"
				/>
				<input
					type="text"
					placeholder="External link"
					class="w-full input input-bordered input-ghost placeholder:text-gray-300"
				/>
			</div>
		</div>
	</div>
</div>
