<script lang="ts">
	import Step from './Step.svelte';

	let steps = [
		{ name: 'Smoljames Store', icon: 'fa-solid fa-cart-shopping' },
		{ name: 'Ultimate ToDos', icon: 'fa-solid fa-list-check' },
		{ name: 'Pokedex', icon: 'fa-solid fa-diagram-project' }
	];

	let benefits = [
		{
			name: 'a selftaught developer',
			description:
				'I taught myself to code and found a whole new kind of joy in the art of finding usable solutions. Expecially solutions to make the everyday of going to work easier and much more pleasent allowing for the focus to be on the interesting and important tasks, rather than battling with outdated or halfbaked software.'
		},
		{
			name: 'a product design and ux fanatic',
			description:
				'As a developer and a user, the interaction needs to be pleasent and enjoyable with minimal friction. This for me, is a big part of finding a good solution.'
		},
		{
			name: 'an excellent communicator',
			description:
				'As an educated socialworker I know the importance of good communication and rank this very highly in my work. Developing a good and usefull tool can only succed if the communication with the enduser is treated as just as important as the writing the code for the final product.'
		}
	];
</script>

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
			<h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-orange-400">Chris</span> Nielsen <br />
				A Self-taught <span class="poppins text-orange-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="poppins text-orange-400"> favorite tech</span> includes Python, Golang, SQLite,
				Tailwindcss and Visual Basics for Applications
			</p>
			<a
				href="blank"
				target="_blank"
				class="poppins group relative mx-auto cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:mr-auto lg:ml-0"
			>
				<div
					class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-200 group-hover:translate-x-full"
				></div>
				<h4 class="relative z-9">Get in touch &rarr;</h4></a
			>
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

	<section id="projects" class="flex flex-col gap-24 py-20 lg:py-32">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-orange-400">see</span> my work?
			</h3>
		</div>
		<a
			href="blank"
			target="_blank"
			class="mx-auto -mt-10 -mb-4 flex items-center gap-2 rounded-md border border-solid border-white px-4 py-2 duration-200 hover:border-orange-700 sm:-mb-0"
			><i class="fa-regular fa-circle-play"></i>
			<p>Watch the video</p>
		</a>
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
			<Step step={steps[0]}>
				<p>
					Smoljames Store is a merchandising store created with <strong class="text-orange-400"
						>Next.js Commerce.js Stripe & Node.js + Express.js!</strong
					>
					Commerce.js is a product CMS and Stripe is used for all transaction handling.
				</p>
			</Step>
			<Step step={steps[1]}>
				<p>
					Ultimate ToDos is a Full Stack <strong class="text-orange-400"
						>Next.js, Node.js + Express.js & Firebase</strong
					> CRUD application that allows a user to login, manage a tidy efficatious todo list, and persist
					this information across devices.
				</p>
			</Step>
			<Step step={steps[2]}>
				<p>
					The Pokedex is a <strong class="text-orange-400">SvelteKit and Tailwindcss</strong>
					web application hostet on <strong class="text-orange-400">Netlify</strong> that consumes
					and caches the <strong class="text-orange-400">Pokemon API</strong> to display all pokemon
					information. Gotta catch em All!
				</p>
			</Step>
		</div>
	</section>

	<section
		id="about"
		class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
	>
		<div
			class="relative flex flex-col gap-2 py-4 text-center before:absolute before:top-0 before:left-0 before:h-1.5 before:w-2/3 before:bg-orange-700 after:absolute after:right-0 after:bottom-0 after:h-1.5 after:w-2/3 after:bg-orange-700"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-orange-400">about</span>
			</h3>
		</div>
		<p class="poppins mx-auto text-lg font-semibold sm:text-xl md:text-2xl">I am . . .</p>
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
		<div class="mx-auto flex w-full max-w-[800px] flex-col gap-10 overflow-x-scroll rounded">
			<table class="rounded bg-slate-300 text-center text-slate-700">
				<thead class="border-b border-solid border-slate-200">
					<tr>
						<th />
						<th class="p-2 px-4 whitespace-nowrap">Candidate #1 </th>
						<th class="p-2 px-4 whitespace-nowrap">Candidate #2 </th>
						<th class="p-2 px-4 whitespace-nowrap">Candidate #3 </th>
						<th class="bg-orange-400 p-4 px-8 whitespace-nowrap">Me</th>
					</tr></thead
				>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td
							class=" border-r border-solid border-white py-4 pr-8 pl-4 text-sm font-semibold whitespace-nowrap"
							>Dedication</td
						>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white py-4 pr-8 pl-4 text-sm font-semibold whitespace-nowrap"
							>Critical Thinking</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white py-4 pr-8 pl-4 text-sm font-semibold whitespace-nowrap"
							>Interpersonal Skills</td
						>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid border-white py-4 pr-8 pl-4 text-sm font-semibold whitespace-nowrap"
							>Programming Ability</td
						>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-xmark text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-slate-500"></i></td>
						<td><i class="fa-solid fa-check text-green-500"></i></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic opacity-50 sm:hidden">
			<p>Scroll to see more &rarr;</p>
		</div>
		<p class="mx-auto">So why not invest?</p>
	</section>
</main>
