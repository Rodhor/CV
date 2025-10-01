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

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
			<h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-orange-400">Chris</span> Nielsen <br />
				A Self-taught <span class="poppins text-orange-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="poppins text-orange-400"> favorite tech</span> includes Python, Golang, SQLite,
				Tailwindcss and Visual Basics for Applications
			</p>
			<a
				href="blank"
				target="_blank"
				class="poppins group relative mx-auto cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:ml-0 lg:mr-auto"
			>
				<div
					class="absolute right-full top-0 z-0 h-full w-full bg-orange-500 opacity-85 duration-200 group-hover:translate-x-full"
				></div>
				<h4 class="z-9 relative">Get in touch &rarr;</h4></a
			>
		</div>
		<div class="relative grid place-items-center shadow-2xl">
			<img
				src="images/profile.png"
				alt="Chris Nielsen"
				class="z-[2] max-h-[70vh] object-cover"
				loading="lazy"
			/>
		</div>
	</section>

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

	<section
		id="about"
		class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
	>
		<div
			class="relative flex flex-col gap-2 py-4 text-center before:absolute before:left-0 before:top-0 before:h-1.5 before:w-2/3 before:bg-orange-700 after:absolute after:bottom-0 after:right-0 after:h-1.5 after:w-2/3 after:bg-orange-700"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-orange-400">about me</span>
			</h3>
		</div>
		<p class="poppins mx-auto max-w-[800px] text-lg font-semibold sm:text-xl md:text-2xl">
			I taught myself to <span class="poppins text-orange-400">code</span> out of curiosity for how
			things <span class="poppins text-orange-400">work</span> and how to make them
			<span class="poppins text-orange-400">better</span>. Small
			<span class="poppins text-orange-400">experiments</span> soon grew into tools that made things
			<span class="poppins text-orange-400">easier</span> and more
			<span class="poppins text-orange-400">enjoyable</span>. Here are a few things that shape how I
			<span class="poppins text-orange-400">work</span>:
		</p>

		<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl font-semibold text-slate-500 sm:text-5xl md:text-6xl">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.name}</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<h5 class="poppins text-center text-2xl font-semibold sm:text-3xl">
			The <span class="poppins text-orange-400">Complete</span> Package
		</h5>
		<p class="mx-auto">So why not invest?</p>
	</section>
</main>
