<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
	<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
		<h2 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			{$t('introSection.greeting')} <span class="poppins text-orange-400">Chris</span> Nielsen
			<br />
			{$t('introSection.roleStart')}
			<span class="poppins text-orange-400">{$t('introSection.roleHighlight')}</span>
		</h2>

		<p class="text-base sm:text-lg md:text-xl">
			{$t('introSection.favoriteTechStart')}
			<span class="poppins text-orange-400"> {$t('introSection.favoriteTechHighlight')}</span>
			{$t('introSection.favoriteTechEnd')}
		</p>

		<a
			href="mailto: chris.rahbek.nielsen@gmail.com"
			class="poppins group relative mx-auto cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:mr-auto lg:ml-0"
		>
			<div
				class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-200 group-hover:translate-x-full"
			></div>
			<h4 class="relative z-9">{$t('introSection.getInTouch')} &rarr;</h4>
		</a>
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
