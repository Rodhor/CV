<script lang="ts">
	export let y: number;

	let tabs = [
		{
			name: 'Projects',
			link: '#projects'
		},
		{
			name: 'CV',
			link: '#cv'
		},
		{
			name: 'About me',
			link: '#about'
		}
	];
</script>

<header
	class="sticky top-0 z-[10] flex items-center justify-between rounded-b-2xl border-r border-b border-l border-solid px-6 transition-all duration-300"
	class:border-orange-900={y > 0}
	class:bg-slate-950={y > 0}
	class:py-4={y > 0}
	class:border-transparent={y === 0}
	class:bg-transparent={y === 0}
	class:py-6={y === 0}
>
	<h1 class="font-medium">
		<b class="poppins font-bold">Chris</b> Nielsen
	</h1>
	<div class="hidden items-center gap-4 sm:flex">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-orange-400">
				<p>{tab.name}</p>
			</a>
		{/each}

		<a
			href="mailto: chris.rahbek.nielsen@gmail.com"
			class="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-slate-950"
		>
			<div
				class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-350 group-hover:translate-x-full"
			></div>
			<h4 class="relative z-9">Get in touch</h4>
		</a>
	</div>
</header>
