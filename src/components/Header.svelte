<script lang="ts">
	export let y: number;

	let tabs = [
		{
			name: 'Projects',
			link: '#projects'
		},
		{
			name: 'About me',
			link: '#about'
		},
		{
			name: 'CV',
			link: '#cv'
		}
	];
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between rounded-full border border-solid px-6 duration-600' +
		(y > 0 ? ' border-orange-900 bg-slate-950 py-4' : ' border-transparent bg-transparent py-6')}
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
			href="2"
			target="_blank"
			class="blueShadow group relative overflow-hidden rounded-full bg-white px-5 py-2 text-slate-950"
		>
			<div
				class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-350 group-hover:translate-x-full"
			></div>
			<h4 class="relative z-9">Get in touch</h4>
		</a>
	</div>
</header>
