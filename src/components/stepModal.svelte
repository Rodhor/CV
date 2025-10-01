<script lang="ts">
	import { scale, fade } from 'svelte/transition';

	// Hardcoded English projects
	const stepsLong = [
		{
			title: 'DocsAutomation',
			descriptionLong:
				'I created this tool to simplify the handling of more than 20 recurring Word documents that contained overlapping information. It reduced errors, ensured consistency, and saved significant time by dynamically filling out templates while preserving the mandatory folder structure. I built the GUI with CustomTKinter so colleagues without technical knowledge could use it easily, and I distributed it as a standalone desktop app using PyInstaller. The tool was in daily use for several years and is probably still in use today.',
			links: [{ label: 'GitHub', url: 'https://github.com/Rodhor/DocsAutomation' }],
			technologies: ['Python', 'CustomTKinter', 'PyInstaller']
		},
		{
			title: 'WordTemplateScript',
			descriptionLong:
				'This script was a lightweight spinoff of DocsAutomation, which I used in another team. Instead of a GUI, it read data directly from an Excel file and filled Word templates accordingly. It was much simpler, but it kept the core idea of automating repetitive document work.',
			links: [{ label: 'GitHub', url: 'https://github.com/Rodhor/WordTemplateScript' }],
			technologies: ['Python']
		},
		{
			title: 'Project Automation',
			descriptionLong:
				'I originally wrote this in Bash, later rewrote it in Python after losing the script, and eventually created a new Bash version as well. The scripts automated the otherwise manual process of setting up small VBA and Python projects. They worked through interactive prompts in the terminal and managed copying or generating necessary files, including basefiles for VBA where Python could not directly create them. I used these scripts to speed up and simplify both personal and work-related workflows.',
			links: [
				{ label: 'GitHub (Python)', url: 'https://github.com/Rodhor/Project_Automation-Python-' },
				{ label: 'GitHub (Bash)', url: 'https://github.com/Rodhor/Project_Automation-Bash-' }
			],
			technologies: ['Bash', 'Python', 'VBA']
		}
		// ...add the rest here (GolangProjectAutomation, RandomInfoGenerator, FriendsApp, CDP)
	];

	let stepModal: HTMLDialogElement;
	let isVisible = false;
	let activeIndex: number | null = null;

	// Animation durations
	const SCALE_IN = 300;
	const SCALE_OUT = 150;
	const FADE_IN = 400;
	const FADE_OUT = 200;

	function openModal(index: number) {
		activeIndex = index;
		stepModal.showModal();
		isVisible = true;
	}

	function closeModal() {
		isVisible = false;
		setTimeout(
			() => {
				stepModal.close();
				activeIndex = null;
			},
			Math.max(SCALE_OUT, FADE_OUT)
		);
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

<!-- Modal -->
<dialog
	bind:this={stepModal}
	on:click={handleBackdropClick}
	class="m-auto bg-transparent outline-none focus:outline-none"
>
	{#if isVisible && activeIndex !== null}
		<!-- Backdrop -->
		<div
			class="fixed inset-0 bg-black/50"
			in:fade={{ duration: FADE_IN }}
			out:fade={{ duration: FADE_OUT }}
		></div>

		<!-- Modal Content -->
		<div
			in:scale={{ duration: SCALE_IN }}
			out:scale={{ duration: SCALE_OUT }}
			class="relative z-10 max-w-2xl rounded-xl bg-slate-950 p-6 shadow-xl"
		>
			<!-- Title -->
			<h2 class="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
				{stepsLong[activeIndex].title}
			</h2>

			<!-- Long Description -->
			<p class="mb-6 text-sm text-white sm:text-base lg:text-lg">
				{stepsLong[activeIndex].descriptionLong}
			</p>

			<!-- Tech stack -->
			<div class="mb-6 flex flex-wrap gap-2">
				{#each stepsLong[activeIndex].technologies as tech}
					<span
						class="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-800 sm:text-sm lg:text-base"
					>
						{tech}
					</span>
				{/each}
			</div>

			<!-- Links -->
			<div class="flex flex-wrap gap-3">
				{#each stepsLong[activeIndex].links as link}
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
				class="absolute top-3 right-3 rounded-full bg-gray-200 px-2 py-0.5 text-xs hover:bg-gray-300 sm:top-4 sm:right-4 sm:text-sm lg:text-base"
			>
				✕
			</button>
		</div>
	{/if}
</dialog>
