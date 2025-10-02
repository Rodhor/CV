<script lang="ts">
	let benefits = [
		{
			name: 'driven and thoughtful',
			description:
				'When I take on a project, I stay with it. I like breaking problems into steps and working through them until they make sense. I’d rather build something solid than rush into quick fixes that don’t last.'
		},
		{
			name: 'clear and collaborative',
			description:
				'With a background in social work, I know how much communication matters. Whether working with colleagues or building for others, I keep ideas clear and feedback valued. The best tools come from real conversations with the people who use them.'
		},
		{
			name: 'a programmer who solves problems',
			description:
				'For me, coding is about making life easier. I’ve built scripts that save hours, apps that anyone can use, and small utilities that smooth daily work. Every project teaches me something new and expands my skillset.'
		}
	];
</script>

<section
	id="about"
	class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
>
	<div
		class="relative flex flex-col gap-2 py-4 text-center before:absolute before:top-0 before:left-0 before:h-1.5 before:w-2/3 before:bg-orange-700 after:absolute after:right-0 after:bottom-0 after:h-1.5 after:w-2/3 after:bg-orange-700"
	>
		<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			A bit <span class="poppins text-orange-400">about me</span>
		</h3>
	</div>
	<p class="poppins mx-auto max-w-[800px] text-lg font-semibold sm:text-xl md:text-2xl">
		I taught myself to <span class="poppins text-orange-400">code</span> out of curiosity for how
		things <span class="poppins text-orange-400">work</span> and how to make them
		<span class="poppins text-orange-400">better</span>. Small
		<span class="poppins text-orange-400">experiments</span> soon grew into tools that made things
		<span class="poppins text-orange-400">easier</span> and more
		<span class="poppins text-orange-400">enjoyable</span>. Here are a few things that shape how I
		<span class="poppins text-orange-400">work</span>:
	</p>

	<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
		{#each benefits as benefit, index}
			<div class="flex gap-6 sm:gap-8">
				<p class="poppins text-4xl font-semibold text-slate-500 sm:text-5xl md:text-6xl">
					0{index + 1}
				</p>
				<div class="flex flex-col gap-6 sm:gap-8">
					<h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.name}</h3>
					<p>{benefit.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<h5 class="poppins text-center text-2xl font-semibold sm:text-3xl">
		The <span class="poppins text-orange-400">Complete</span> Package
	</h5>
	<p class="mx-auto">So why not invest?</p>
</section>
