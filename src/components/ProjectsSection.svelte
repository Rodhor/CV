<script lang="ts">
	import StepModal from './stepModal.svelte';
	import Step from './Step.svelte';

	import { getProjectsByLanguage } from '$lib/data/projects';

	let projects = getProjectsByLanguage('en');
	let modalRef: any;

	function handleOpenModal(index: number) {
		modalRef.openModal(index);
	}
</script>

<section id="projects" class="flex flex-col gap-24 py-20 lg:py-32">
	<div class="flex flex-col gap-2 text-center">
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			Curious to <span class="poppins text-orange-400">see</span> my work?
		</h3>
	</div>
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
		{#each projects as project, index}
			<Step {project} {index} openModal={handleOpenModal}></Step>
		{/each}
	</div>
</section>
<StepModal bind:this={modalRef} {projects} />
