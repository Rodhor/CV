<script lang="ts">
	import { type LocalizedProject } from '../lib/data/projects';
	import { t } from '../lib/i18n';
	export let project: LocalizedProject;
	export let index: number;
	export let openModal: (index: number) => void;

	const techIcons: Record<string, string> = {
		rust: 'rust.svg',
		tauri: 'tauri.svg',
		iced: 'iced.svg',
		wails: 'wails.svg',
		'gemini api': 'gemini.svg',
		postgresql: 'postgresql.svg',
		php: 'php.svg',
		laravel: 'laravel.svg',
		'c#': 'csharp.svg',
		python: 'python.svg',
		javascript: 'javascript.svg',
		go: 'go.svg',
		bash: 'bash.svg',
		word: 'word.svg',
		excel: 'excel.svg',
		react: 'react.svg',
		sqlite: 'sqlite.svg',
		svelte: 'svelte.svg',
		sveltekit: 'svelte.svg',
		tailwindcss: 'tailwind.svg',
		typescript: 'typescript.svg',
		json: 'json.svg',
		streamlit: 'streamlit.svg',
		pandas: 'pandas.svg',
		excelize: 'excel.svg'
	};

	function getIconPath(tech: string): string {
		const key = tech.toLowerCase();
		return techIcons[key] ? `/assets/icons/${techIcons[key]}` : '';
	}

	const githubLinks = project.links.filter((link) => link.url.toLowerCase().includes('github.com'));
</script>

<article
	class="group flex flex-col justify-between gap-4 rounded-lg border border-violet-700 p-4 text-center duration-200 hover:border-violet-400 sm:p-6 md:p-8"
>
	<button
		type="button"
		on:click={() => openModal(index)}
		class="flex flex-grow cursor-pointer flex-col items-center gap-4 bg-transparent text-center focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
	>
		<div
			class="mx-auto -mt-10 grid place-items-center bg-slate-950 px-4 text-5xl duration-200 sm:-mt-12 md:-mt-14 md:text-6xl lg:-mt-16"
		>
			<i class={project.icon} aria-hidden="true"></i>
		</div>

		<h3 class="text-xl leading-tight font-medium break-normal sm:text-2xl md:text-3xl">
			{project.title}
		</h3>

		<p>{project.descriptionShort}</p>

		<div
			role="group"
			aria-label={$t('stepComponent.technologies')}
			class="mt-2 flex w-full flex-wrap items-center justify-center gap-2"
		>
			{#each project.technologies as tech}
				{#if getIconPath(tech)}
					<img src={getIconPath(tech)} alt={tech} class="h-10 w-10 object-contain" title={tech} />
				{:else}
					<span class="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-200">{tech}</span>
				{/if}
			{/each}
		</div>
		<span
			class="mt-auto rounded border border-violet-700 px-3 py-1 text-sm text-violet-300 transition group-hover:border-violet-400 group-hover:bg-violet-400 group-hover:text-slate-950"
		>
			{$t('stepComponent.viewDetails')}
		</span>
	</button>

	<div class="mt-auto flex flex-wrap justify-end gap-3 pt-2">
		{#each githubLinks as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="relative cursor-pointer overflow-hidden rounded border border-violet-700 px-3 py-1 text-sm text-violet-300 transition duration-200
				       after:absolute after:top-0 after:right-full after:z-[-1] after:h-full after:w-full after:bg-white after:duration-200
				       hover:border-violet-400 hover:bg-violet-400 hover:text-slate-950 hover:after:translate-x-full"
			>
				{#if githubLinks.length === 1}{$t(
						'stepComponent.viewProjectOnGithub'
					)}{:else}{link.label}{/if} &rarr;
			</a>
		{/each}
	</div>
</article>
