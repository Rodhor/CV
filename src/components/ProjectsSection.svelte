<script lang="ts">
	import StepModal from './stepModal.svelte';
	import Step from './Step.svelte';

	import { getProjectsByLanguage } from '$lib/data/projects';

	let projects = getProjectsByLanguage('en');
	let modalRef: any;

	function handleOpenModal(index: number) {
		modalRef.openModal(index);
	}

	let benefits = [
		{
			name: 'driven and thoughtful',
			description:
				'When I take on a project, I stay with it. I like breaking problems into steps and working through them until they make sense. I’d rather build something solid than rush into quick fixes that don’t last.'
		},
		{
			name: 'clear and collaborative',
			description:
				'With a background in social work, I know how much communication matters. Whether working with colleagues or building for others, I keep ideas clear and feedback valued. The best tools come from real conversations with the people who use them.'
		},
		{
			name: 'a programmer who solves problems',
			description:
				'For me, coding is about making life easier. I’ve built scripts that save hours, apps that anyone can use, and small utilities that smooth daily work. Every project teaches me something new and expands my skillset.'
		}
	];
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
