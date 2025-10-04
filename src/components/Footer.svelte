<script>
	import { t } from 'svelte-i18n';
</script>

<footer
	class="flex flex-col items-center justify-center gap-4 border-t border-solid border-orange-900 bg-black py-20 sm:gap-8 sm:py-32"
>
	<p class="bg-white px-4 py-2 font-medium text-slate-950">{$t('footer.connectWithMe')} &darr;</p>

	<div class="flex flex-col items-center justify-center gap-4">
		<p>
			<b class="pr-2">Email</b>
			<a href="mailto:chris.rahbek.nielsen@gmail.com" class="text-orange-400">
				chris.rahbek.nielsen@gmail.com
			</a>
		</p>

		<p>
			<b class="pr-2">GitHub</b>
			<a
				href="https://github.com/rodhor"
				class="text-orange-400"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chris Nielsen on GitHub (opens in a new tab)"
			>
				Chris Nielsen
				<sup>
					<span class="scale-75 pl-0.5 text-xs">
						<i class="fa-solid fa-arrow-up-right-from-square scale-[75%] text-xs"></i>
					</span>
				</sup>
			</a>
		</p>
	</div>
</footer>
