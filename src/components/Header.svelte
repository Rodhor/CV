<script lang="ts">
	import { t, setLang, currentLang } from '../lib/i18n';

	export let y: number;
	let mobileMenuOpen = false;

	let tabs = [
		{ key: 'header.nav.projects', link: '#projects' },
		{ key: 'header.nav.cv', link: '#cv' },
		{ key: 'header.nav.aboutMe', link: '#about' }
	];
</script>

<header
	class="sticky top-0 z-[100] flex items-center justify-between rounded-b-2xl px-4 py-4 transition-all duration-500 sm:px-6 sm:py-6"
	class:bg-slate-950={y > 0}
	class:py-4={y > 0}
	class:shadow-lg={y > 0}
>
	<!-- fading border only on scroll -->
	<div
		class="absolute bottom-0 left-0 z-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 transition-opacity duration-500"
		class:opacity-100={y > 0}
	></div>

	<h1 class="relative z-10 font-medium">
		<b class="poppins font-bold">Chris</b> Nielsen
	</h1>

	<div class="relative z-10 hidden items-center gap-4 sm:flex">
		<nav aria-label={$t('header.nav.label')} class="flex items-center gap-4">
			{#each tabs as tab}
				<a href={tab.link} class="duration-200 hover:text-orange-400">
					<p>{$t(tab.key)}</p>
				</a>
			{/each}
		</nav>

		<div
			class="relative inline-grid h-8 w-24 grid-cols-2 overflow-hidden rounded-md bg-slate-950 ring-1 ring-violet-900/40"
			role="group"
			aria-label={$t('header.nav.language')}
		>
			<div
				class="absolute inset-y-0 left-0 w-1/2 rounded-md bg-violet-400/10 transition-transform duration-300"
				style:transform={$currentLang === 'en' ? 'translateX(0%)' : 'translateX(100%)'}
			></div>

			<button
				type="button"
				on:click={() => setLang('en')}
				class="relative z-10 flex items-center justify-center text-[11px] leading-none text-violet-300 uppercase hover:text-violet-200 sm:text-xs"
				class:font-semibold={$currentLang === 'en'}
				aria-pressed={$currentLang === 'en'}
			>
				EN
			</button>

			<button
				type="button"
				on:click={() => setLang('de')}
				class="relative z-10 flex items-center justify-center text-[11px] leading-none text-violet-300 uppercase hover:text-violet-200 sm:text-xs"
				class:font-semibold={$currentLang === 'de'}
				aria-pressed={$currentLang === 'de'}
			>
				DE
			</button>
		</div>

		<a
			href="mailto:chris.rahbek.nielsen@gmail.com"
			class="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-slate-950"
		>
			<div
				class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-350 group-hover:translate-x-full"
			></div>
			<span class="relative z-9">{$t('header.nav.getInTouch')}</span>
		</a>
	</div>

	<button
		type="button"
		class="relative z-10 grid size-11 place-items-center rounded-md text-violet-200 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-violet-400 sm:hidden"
		aria-label={$t(mobileMenuOpen ? 'header.nav.closeMenu' : 'header.nav.openMenu')}
		aria-expanded={mobileMenuOpen}
		aria-controls="mobile-navigation"
		on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
	>
		<i class={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true"></i>
	</button>

	{#if mobileMenuOpen}
		<nav
			id="mobile-navigation"
			aria-label={$t('header.nav.label')}
			class="absolute inset-x-0 top-full flex flex-col gap-3 rounded-b-2xl border-t border-slate-800 bg-slate-950 p-4 shadow-lg sm:hidden"
		>
			{#each tabs as tab}
				<a
					href={tab.link}
					on:click={() => (mobileMenuOpen = false)}
					class="rounded px-3 py-3 hover:bg-slate-900"
				>
					{$t(tab.key)}
				</a>
			{/each}

			<div class="flex items-center justify-between gap-4 border-t border-slate-800 pt-3">
				<span class="text-sm text-slate-400">{$t('header.nav.language')}</span>
				<div
					class="inline-grid h-11 w-28 grid-cols-2 overflow-hidden rounded-md bg-slate-900 ring-1 ring-violet-900/40"
				>
					<button
						type="button"
						on:click={() => setLang('en')}
						class:font-semibold={$currentLang === 'en'}
						aria-pressed={$currentLang === 'en'}>EN</button
					>
					<button
						type="button"
						on:click={() => setLang('de')}
						class:font-semibold={$currentLang === 'de'}
						aria-pressed={$currentLang === 'de'}>DE</button
					>
				</div>
			</div>

			<a
				href="mailto:chris.rahbek.nielsen@gmail.com"
				on:click={() => (mobileMenuOpen = false)}
				class="rounded-full bg-white px-5 py-3 text-center font-medium text-slate-950 hover:bg-orange-400"
			>
				{$t('header.nav.getInTouch')}
			</a>
		</nav>
	{/if}
</header>
