<script lang="ts">
	import GoTopArrow from './../components/GoTopArrow.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y: number;
	let innerHeight: number = 0;
	let innerWidth: number = 0;
</script>

<GoTopArrow {y} />
<div
	class="max-w-1400px relative container mx-auto flex min-h-screen w-full flex-col text-sm sm:text-base"
>
	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
