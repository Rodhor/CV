<script lang="ts">
	import CVSection from './CVSection.svelte';
	import IntroSection from './IntroSection.svelte';

	import ProjectsSection from './ProjectsSection.svelte';

	import About from './AboutSection.svelte';
</script>

<main class="flex flex-1 flex-col p-4">
	<IntroSection></IntroSection>

	<ProjectsSection></ProjectsSection>
	<CVSection></CVSection>
	<About></About>
</main>
