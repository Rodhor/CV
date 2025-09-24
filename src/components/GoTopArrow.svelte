<script lang="ts">
	export let y: number;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200 ' +
		(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
>
	<button
		on:click={goTop}
		class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-orange-400 hover:bg-slate-800 sm:px-4"
		aria-label="goTopArrow"
	>
		<i class="fa-solid fa-arrow-up"></i>
	</button>
</div>
