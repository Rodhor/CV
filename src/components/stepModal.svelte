<script lang="ts">
	import { scale } from 'svelte/transition';
	export let projects;

	let stepModal: HTMLDialogElement;
	let isVisible = false;
	let activeIndex: number | null = null;

	// Animation durations
	const SCALE_IN = 300;

	export function openModal(index: number) {
		activeIndex = index;
		stepModal.showModal();
		isVisible = true;
	}

	function closeModal() {
		isVisible = false;

		activeIndex = null;
		stepModal.close();
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

<dialog
	bind:this={stepModal}
	on:click={handleBackdropClick}
	class="m-auto bg-transparent outline-none backdrop:backdrop-blur-sm focus:outline-none"
>
	{#if isVisible && activeIndex !== null}
		<!-- Modal Content -->
		<div
			in:scale={{ duration: SCALE_IN }}
			class="relative z-10 max-w-2xl rounded-xl bg-slate-950 p-6 shadow-xl"
		>
			<!-- Title -->
			<h2 class="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
				{projects[activeIndex].title}
			</h2>

			<!-- Long Description -->
			<p class="mb-6 text-sm text-white sm:text-base lg:text-lg">
				{projects[activeIndex].descriptionLong}
			</p>

			<!-- Tech stack -->
			<div class="mb-6 flex flex-wrap gap-2">
				{#each projects[activeIndex].technologies as tech}
					<span
						class="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-800 sm:text-sm lg:text-base"
					>
						{tech}
					</span>
				{/each}
			</div>

			<!-- Links -->
			<div class="flex flex-wrap gap-3">
				{#each projects[activeIndex].links as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-slate-600 px-3 py-1 text-xs text-white hover:bg-slate-700 sm:px-4 sm:py-2 sm:text-sm lg:text-base"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Close button -->
			<button
				on:click={closeModal}
				class="absolute right-3 top-3 rounded-full bg-gray-200 px-2 py-0.5 text-xs hover:bg-gray-300 sm:right-4 sm:top-4 sm:text-sm lg:text-base"
			>
				✕
			</button>
		</div>
	{/if}
</dialog>
