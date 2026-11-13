<script>
	import Main from '../components/Main.svelte';
	import { t } from '../lib/i18n';
</script>

<svelte:head>
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
</svelte:head>

<Main />
