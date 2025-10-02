<script lang="ts">
	import { getWorkspaceByLanguage, getEducationByLanguage } from '$lib/data/cv';

	let lang: 'en' | 'de' = 'en';

	interface CVEntry {
		type: 'work' | 'education';
		organization: string;
		location: string;
		positionOrDegree: string;
		startDate: string;
		endDate?: string;
		descriptionShort: string;
		descriptionLong?: string;
	}

	function buildTimeline(lang: 'en' | 'de'): CVEntry[] {
		const work = getWorkspaceByLanguage(lang).map((wp) => ({
			type: 'work' as const,
			organization: wp.organization,
			location: wp.location,
			positionOrDegree: wp.position,
			startDate: wp.startDate,
			endDate: wp.endDate,
			descriptionShort: wp.descriptionShort,
			descriptionLong: wp.descriptionLong
		}));

		const edu = getEducationByLanguage(lang).map((e) => ({
			type: 'education' as const,
			organization: e.organization,
			location: e.location,
			positionOrDegree: `${e.degree} – ${e.fieldOfStudy}`,
			startDate: e.startDate,
			endDate: e.endDate,
			descriptionShort: e.descriptionShort,
			descriptionLong: e.descriptionLong
		}));

		// newest first
		return [...work, ...edu].sort(
			(a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
		);
	}

	let cvEntries: CVEntry[] = buildTimeline(lang);

	let showLong = false;
</script>

<section class="bg-slate-950 py-16 text-white" id="cv">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
			<h2 class="text-3xl font-bold tracking-tight md:text-4xl">
				<span class="text-violet-400">Curriculum Vitae</span>
			</h2>

			<!-- Switch -->
			<div class="flex items-center gap-3">
				<span class="text-sm text-slate-400">Short</span>
				<button
					aria-label="toggle to switch between short or long descriptions"
					role="switch"
					aria-checked={showLong}
					on:click={() => (showLong = !showLong)}
					class="relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 {showLong
						? 'bg-violet-600'
						: 'bg-slate-700'}"
				>
					<span
						class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 {showLong
							? 'translate-x-6'
							: 'translate-x-1'}"
					></span>
				</button>
				<span class="text-sm text-slate-400">Long</span>
			</div>
		</div>

		<ul class="-my-4">
			{#each cvEntries as entry, index (entry.organization + entry.startDate)}
				<li class="relative py-6">
					<div class="grid grid-cols-1 gap-x-4 sm:grid-cols-[10rem_2.25rem_1fr]">
						<!-- Col 1: Timeframe -->
						<time
							class="mb-3 inline-flex h-7 items-center justify-center rounded-full bg-violet-900/30 px-3 text-sm font-semibold uppercase text-violet-300 sm:mb-0 sm:justify-self-start"
						>
							{entry.startDate} – {entry.endDate ?? 'Present'}
						</time>

						<!-- Col 2: Dot + Line -->
						<div class="relative hidden sm:flex sm:flex-col sm:items-center">
							<div class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700"></div>
							<span
								class="relative z-10 mt-1 h-3 w-3 rounded-full bg-violet-600 ring-4 ring-slate-950"
								aria-hidden="true"
							></span>
						</div>

						<!-- Col 3: Content -->
						<div>
							{#if entry.positionOrDegree}
								<h3 class="text-lg font-bold text-white md:text-xl">{entry.positionOrDegree}</h3>
							{/if}

							<p class="text-sm text-slate-400">{entry.organization}</p>

							<p class="mt-1 text-slate-300">
								{#if showLong && entry.descriptionLong}
									{entry.descriptionLong}
								{:else}
									{entry.descriptionShort}
								{/if}
							</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
