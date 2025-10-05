<script lang="ts">
	import { t } from 'svelte-i18n';

	let benefits = [
		{ nameKey: 'about.benefits.1.name', descriptionKey: 'about.benefits.1.description' },
		{ nameKey: 'about.benefits.2.name', descriptionKey: 'about.benefits.2.description' },
		{ nameKey: 'about.benefits.3.name', descriptionKey: 'about.benefits.3.description' }
	];
</script>

<section
	id="about"
	class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
>
	<div
		class="relative flex flex-col gap-2 py-4 text-center before:absolute before:top-0 before:left-0 before:h-1.5 before:w-2/3 before:bg-orange-700 after:absolute after:right-0 after:bottom-0 after:h-1.5 after:w-2/3 after:bg-orange-700"
	>
		<h6 class="text-lg sm:text-xl md:text-2xl">{$t('about.subtitle')}</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{$t('about.titleStart')}
			<span class="poppins text-orange-400">{$t('about.titleHighlight')}</span>
		</h3>
	</div>

	<p class="poppins mx-auto max-w-[800px] text-lg font-semibold sm:text-xl md:text-2xl">
		{@html $t('about.paragraph')}
	</p>

	<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
		{#each benefits as benefit, index}
			<div class="flex gap-6 sm:gap-8">
				<p class="poppins text-4xl font-semibold text-slate-500 sm:text-5xl md:text-6xl">
					0{index + 1}
				</p>
				<div class="flex flex-col gap-6 sm:gap-8">
					<h3 class="text-2xl sm:text-3xl md:text-5xl">{$t(benefit.nameKey)}</h3>
					<p>{$t(benefit.descriptionKey)}</p>
				</div>
			</div>
		{/each}
	</div>

	<h5 class="poppins text-center text-2xl font-semibold sm:text-3xl">
		{$t('about.footerTitleStart')}
		<span class="poppins text-orange-400">{$t('about.footerTitleHighlight')}</span>
		{$t('about.footerTitleEnd')}
	</h5>
	<p class="mx-auto">{$t('about.footerText')}</p>
</section>
