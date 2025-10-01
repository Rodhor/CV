<script lang="ts">
	export let project;
	export let index: number
	export let openModal: (index: number) => void;

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

	const githubLinks = project.links.filter((l: any) => l.url.toLowerCase().includes('github.com'));
</script>

<div on:click={() => openModal(index)}
	class="group flex cursor-pointer flex-col gap-4 rounded-lg border border-violet-700 p-4 text-center duration-200 hover:border-violet-400 sm:p-6 md:p-8"
>
	<div
		class="mx-auto -mt-10 grid place-items-center bg-slate-950 px-4 text-5xl duration-200 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16"
	>
		<i class={project.icon} />
	</div>
	<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">{project.title}</h3>
	<p>
		{project.descriptionShort}
	</p>
	<div class="mt-4 flex justify-center gap-3">
		{#each project.technologies as tech}
			{#if getIconPath(tech) !== ''}
				<img src={getIconPath(tech)} alt={tech} class="h-12 w-12" title={tech} />
			{/if}
		{/each}
	</div>
	<div class="flex flex-1 items-center justify-between gap-4">
		<div class="ml-auto flex flex-row gap-3">
			{#if githubLinks.length === 1}
				<!-- single github link -->
				<a
				on:click|stopPropagation 
					href={githubLinks[0].url}
					target="_blank"
					rel="noopener noreferrer"
					class="relative cursor-pointer overflow-hidden rounded border border-violet-700 px-3 py-1 text-sm text-violet-300 transition duration-200
					       after:absolute after:right-full after:top-0 after:z-[-1] after:h-full after:w-full after:bg-white after:duration-200
					       hover:border-violet-400 hover:bg-violet-400 hover:text-slate-950 hover:after:translate-x-full"
				>
					View Project on GitHub &rarr;
				</a>
			{:else if githubLinks.length > 1}
				<!-- multiple github links -->
				{#each githubLinks as link}
					<a
					on:click|stopPropagation 
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="relative cursor-pointer overflow-hidden rounded border border-violet-700 px-3 py-1 text-sm text-violet-300 transition duration-200
					       after:absolute after:right-full after:top-0 after:z-[-1] after:h-full after:w-full after:bg-white after:duration-200
					       hover:border-violet-400 hover:bg-violet-400 hover:text-slate-950 hover:after:translate-x-full"
					>
						{link.label} &rarr;
					</a>
				{/each}
			{/if}
		</div>
	</div>
</div>
