<script lang="ts">
	export let step;

	const techIcons: Record<string, string> = {
		python: 'python.svg',
		javascript: 'javascript.svg',
		go: 'go.svg',
		bash: 'bash.svg',
		word: 'word.svg',
		excel: 'excel.svg',
		react: 'react.svg',
		sqlite: 'sqlite.svg',
		svelte: 'svelte.svg'
	};

	function getIconPath(tech: string): string {
		const key = tech.toLowerCase();
		return techIcons[key] ? `/assets/icons/${techIcons[key]}` : '';
	}
</script>

<a
	href={step.href}
	target="_blank"
	class="group flex cursor-pointer flex-col gap-4 rounded-lg border border-violet-700 p-4 text-center duration-200 hover:border-violet-400 sm:p-6 md:p-8"
	rel="noopener noreferrer"
>
	<div
		class="mx-auto -mt-10 grid place-items-center bg-slate-950 px-4 text-5xl duration-200 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16"
	>
		<i class={step.icon} />
	</div>
	<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">{step.title}</h3>
	<p>
		{step.descriptionShort}
	</p>
	<div class="mt-4 flex justify-center gap-3">
		{#each step.technologies as tech}
			{#if getIconPath(tech) !== ''}
				<img src={getIconPath(tech)} alt={tech} class="h-12 w-12" title={tech} />
			{/if}
		{/each}
	</div>
	<div class="flex flex-1 items-center justify-between gap-4">
		<div
			class="relative ml-auto cursor-pointer overflow-hidden duration-200 after:absolute after:top-0 after:right-full after:z-[-1] after:h-0 after:h-full after:w-full after:bg-white after:duration-200
  hover:text-slate-950 hover:after:translate-x-full"
		>
			<p class="relative z-4">View Project on Github &rarr;</p>
		</div>
	</div>
</a>
