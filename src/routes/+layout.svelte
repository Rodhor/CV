<script lang="ts">
	import { onMount } from 'svelte';
	import { getPreferredLanguage, setLang } from '../lib/i18n';
	import GoTopArrow from './../components/GoTopArrow.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y: number;

	onMount(() => setLang(getPreferredLanguage()));
</script>

<GoTopArrow {y} />
<div
	class="relative container mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"
>
	<Header {y} />
	<slot />
	<Footer />
</div>
<svelte:window bind:scrollY={y} />
