<script lang="ts">
	import { getCompleteCV, type LocalizedEntry } from '../lib/data/cv';
	import { type Lang } from '../lib/utils/languageSetup';
	import { t, locale } from '../lib/i18n';

	let cvEntries: LocalizedEntry[] = getCompleteCV('en');

	let showLong = false;

	// reactive reload when language changes
	$: cvEntries = getCompleteCV($locale as Lang);

	function entryKey(entry: LocalizedEntry, index: number) {
		return `${entry.entryType}-${entry.startDate}-${index}`;
	}
</script>

<section class="py-16" id="cv">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
			<h2 class="text-3xl font-bold tracking-tight md:text-4xl">
				<span class="text-violet-400">{$t('cvSection.header')}</span>
			</h2>

			<!-- Switch -->
			<div class="flex items-center gap-3">
				<span class="text-sm text-slate-400">{$t('cvSection.showShort')}</span>
				<button
					type="button"
					aria-label={$t('cvSection.toggleDescription')}
					role="switch"
					aria-checked={showLong}
					on:click={() => (showLong = !showLong)}
					class="relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:ring-2 focus:ring-violet-500 focus:outline-none {showLong
						? 'bg-violet-600'
						: 'bg-slate-700'}"
				>
					<span
						class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 {showLong
							? 'translate-x-6'
							: 'translate-x-1'}"
					></span>
				</button>
				<span class="text-sm text-slate-400">{$t('cvSection.showLong')}</span>
			</div>
		</div>

		<ul class="-my-4">
			{#each cvEntries as entry, index (entryKey(entry, index))}
				<li class="relative py-6">
					<div class="grid grid-cols-1 gap-x-4 sm:grid-cols-[10rem_2.25rem_1fr]">
						<!-- Col 1: Timeframe -->
						<time
							class="mb-3 inline-flex h-7 items-center justify-center rounded-full bg-violet-900/30 px-3 text-xs font-bold text-violet-300 sm:mb-0 sm:justify-self-start"
						>
							{entry.timeframe}
						</time>

						<!-- Col 2: Dot + Line -->
						<div class="relative hidden sm:flex sm:flex-col sm:items-center">
							<div class="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-slate-700"></div>
							<span
								class="relative z-10 mt-1 h-3 w-3 rounded-full bg-violet-600 ring-4 ring-slate-950"
								aria-hidden="true"
							></span>
						</div>

						<!-- Col 3: Content -->
						<div>
							<!-- Heading depends on type -->
							{#if entry.entryType === 'work'}
								<h3 class="text-lg font-bold text-white md:text-xl">{entry.position}</h3>
								<p class="text-sm text-slate-400">{entry.organization}</p>
							{:else if entry.entryType === 'education'}
								<h3 class="text-lg font-bold text-white md:text-xl">
									{entry.degree}
								</h3>
								<p class="text-sm text-slate-400">{entry.organization}</p>
							{:else if entry.entryType === 'other'}
								<h3 class="text-lg font-bold text-white md:text-xl">{entry.title}</h3>
								{#if entry.organization}
									<p class="text-sm text-slate-400">{entry.organization}</p>
								{/if}
							{/if}

							<!-- Description -->
							<p class="mt-1 text-slate-300">
								{#if showLong && entry.descriptionLong}
									{entry.descriptionLong}
								{:else}
									{entry.descriptionShort}
								{/if}
							</p>

							{#if showLong}
								<div class="mt-3 space-y-2 text-sm text-slate-300">
									{#if entry.location}
										<p>
											<span class="font-semibold text-slate-200">{$t('cvSection.location')}:</span>
											{entry.location}
										</p>
									{/if}
									{#if entry.entryType === 'education'}
										<p>
											<span class="font-semibold text-slate-200"
												>{$t('cvSection.fieldOfStudy')}:</span
											>
											{entry.fieldOfStudy}
										</p>
									{/if}
									{#if entry.highlights.length}
										<div>
											<p class="font-semibold text-slate-200">{$t('cvSection.highlights')}</p>
											<ul class="mt-1 list-inside list-disc space-y-1">
												{#each entry.highlights as highlight}
													<li>{highlight}</li>
												{/each}
											</ul>
										</div>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
