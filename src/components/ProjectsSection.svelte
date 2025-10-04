<script lang="ts">
	import StepModal from './stepModal.svelte';
	import Step from './Step.svelte';
	import { getProjectsByLanguage } from '$lib/data/projects';
	import { type Lang } from '$lib/utils/languageSetup';
	import { t, locale } from 'svelte-i18n';

	let projects = getProjectsByLanguage('en');
	let modalRef: any;

	let showAll = false;
	$: visibleProjects = showAll ? projects : projects.slice(0, 6);

	$: projects = getProjectsByLanguage($locale as Lang);

	function handleOpenModal(index: number) {
		modalRef.openModal(index);
	}

	function toggleShowAll() {
		showAll = !showAll;
	}
</script>

<section id="projects" class="flex flex-col gap-20 py-5 lg:py-10">
	<div class="flex flex-col gap-2 text-center">
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{$t('projects.heading.start')}
			<span class="poppins text-orange-400">{$t('projects.heading.highlight')}</span>
			{$t('projects.heading.end')}
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
		{#each visibleProjects as project, index}
			<Step {project} {index} openModal={handleOpenModal} />
		{/each}
	</div>

	{#if projects.length > 6}
		<div class="flex justify-center">
			<button
				on:click={toggleShowAll}
				class="rounded-lg border border-violet-700 px-6 py-2 text-violet-300 transition duration-200
				       hover:border-violet-400 hover:bg-violet-400 hover:text-slate-950"
			>
				{showAll ? $t('projects.buttons.showLess') : $t('projects.buttons.showMore')}
			</button>
		</div>
	{/if}
</section>

<StepModal bind:this={modalRef} {projects} />
