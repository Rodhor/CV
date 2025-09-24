<script lang="ts">
	export let y: number;

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div
	class="fixed bottom-0 z-[10] flex w-full p-10 duration-200"
	class:opacity-0={y === 0}
	class:pointer-events-none={y === 0}
>
	<button
		on:click={goTop}
		class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-orange-400 hover:bg-slate-800 sm:px-4"
		aria-label="Scroll to top"
	>
		<i class="fa-solid fa-arrow-up"></i>
	</button>
</div>
