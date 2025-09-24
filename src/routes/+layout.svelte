<script lang="ts">
	import GoTopArrow from './../components/GoTopArrow.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y: number;
	let innerHeight: number = 0;
	let innerWidth: number = 0;
</script>

<div
	class="relative container mx-auto flex min-h-screen w-full max-w-screen flex-col text-sm sm:text-base"
>
	<GoTopArrow {y} />

	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
