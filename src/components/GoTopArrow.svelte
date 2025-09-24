<script lang="ts">
	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<button
	on:click={goTop}
	class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-orange-400 hover:bg-slate-800 sm:px-4"
	aria-label="goTopArrow"
>
	<i class="fa-solid fa-arrow-up"></i>
</button>
