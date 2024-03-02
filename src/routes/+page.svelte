<script>
	import { Separator } from '$lib/components/ui/separator';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="Portfolio" content="Portfolio" />
</svelte:head>

<header class="mb-5 mt-5 gap-x-5 text-center font-mono font-bold">
	<p class="mb-5 text-5xl font-bold">vartiainen.io</p>
	<a href="/">Home</a>
	<a href="/">Projects</a>
</header>

<Separator class="my-4" />

<section class="mb-10 flex items-center justify-center font-mono">
	<div class="w-1/2 gap-5 space-y-8 p-20">
		<p>
			Lorem ipsum dolor sit amet. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
			aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
		</p>
		<p>
			Moar text. Lorem ipsum dolor sit amet. Paljon on asiaa ja silleen. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p>
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
			laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
			beatae vitae dicta sunt explicabo.
		</p>
	</div>
	<div class="flex w-1/3 items-center justify-center">
		<div>
			<img src="/profile-pic.png" alt="profile-pic" class="max-h-40 max-w-40 rounded-full" />
		</div>
	</div>
</section>

<Separator class="my-4" />

<div class="flex justify-center font-mono">Check out my socials!</div>
<div class="flex justify-center font-mono">
	<a href="https://github.com/vvartiainen">
		<img src="github-mark-white.png" alt="github-mark-white" class="m-1 max-w-12" />
	</a>

	<a href="https://www.linkedin.com/in/ville-vartiainen-9b1552112/">
		<img src="linkedin.png" alt="linkedin-icon" class="m-1 max-w-12" />
	</a>

	<a href="/">
		<img src="book-white-icon.png" alt="project-icon" class="m-1 max-w-12" />
	</a>
</div>
