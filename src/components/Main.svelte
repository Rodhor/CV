<script lang="ts">
</script>

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
			<h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-orange-400">Chris</span> Nielsen <br />
				A Selftaught <span class="poppins text-orange-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="poppins text-orange-400"> favorite tech</span> includes Python, Golang, SQLite,
				Tailwindcss and Visual Basics for Applications
			</p>
			<a
				href="blank"
				target="_blank"
				class="blueShadow poppins group relative mx-auto cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:mr-auto"
			>
				<div
					class="absolute top-0 right-full z-0 h-full w-full bg-orange-500 opacity-85 duration-200 group-hover:translate-x-full"
				></div>
				<h4 class="relative z-9">Get in touch &rarr;</h4></a
			>
		</div>
		<div class="relative grid place-items-center shadow-2xl">
			<img src="images/profile.png" alt="A Foto of me" class="z-[2] max-h-[70vh] object-cover" />
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
			<p>What the video</p>
		</a>
	</section>
</main>
