<script lang="ts">
	import { scale, fade } from 'svelte/transition';

	let stepModal: HTMLDialogElement;
	let isVisible = false;

	// constants for durations
	const SCALE_IN = 300;
	const SCALE_OUT = 150;
	const FADE_IN = 600;
	const FADE_OUT = 200;

	function openModal() {
		stepModal.showModal();
		isVisible = true;
	}

	function closeModal() {
		isVisible = false;
		// wait for the *longest out-transition* before closing
		setTimeout(() => stepModal.close(), Math.max(SCALE_OUT, FADE_OUT));
	}

	function handleBackdropClick(event: MouseEvent) {
		const rect = stepModal.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) closeModal();
	}
</script>

<button on:click={openModal}>OPEN MODAL</button>

<dialog bind:this={stepModal} on:click={handleBackdropClick} class="m-auto bg-transparent">
	{#if isVisible}
		<!-- Div as backdrop to allow css styling and transitions -->
		<div class="fixed inset-0 bg-black/50" />

		<div
			in:scale={{ duration: SCALE_IN }}
			out:scale={{ duration: SCALE_OUT }}
			class="relative z-10"
		>
			<div
				in:fade={{ duration: FADE_IN }}
				out:fade={{ duration: FADE_OUT }}
				class="rounded-md bg-white p-4 shadow-lg"
			>
				<p class="mb-4 text-black">Hello! I am a Modal!</p>
				<button
					on:click={closeModal}
					class="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
				>
					Close
				</button>
			</div>
		</div>
	{/if}
</dialog>
