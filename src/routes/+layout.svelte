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
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200 ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<GoTopArrow />
	</div>
	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
