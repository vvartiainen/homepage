<script>
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="Portfolio - Ville Vartiainen" content="Portfolio - Ville Vartiainen" />
</svelte:head>

<header class="mb-5 mt-10 gap-x-5 text-center font-mono font-bold">
	<p class="mb-5 text-4xl font-bold text-sky-400">vartiainen.io</p>
</header>

<nav class="justify-left mb-5 flex pl-12">
	<a href="/"><Button variant="link" class="underline-offset-8">ABOUT</Button></a>
	<a href="/"><Button variant="link" class="underline-offset-8">TECHNOLOGIES</Button></a>
	<a href="/"><Button variant="link" class="underline-offset-8">PROJECTS</Button></a>
</nav>

<Separator class="my-4" />

<section class="mb-10 flex items-center justify-center font-mono">
	<div class="w-3/5 justify-center gap-5 space-y-8 p-20">
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
	<div class="md:w-1/3:flex items-center justify-center sm:block">
		<img src="/profile-pic.png" alt="profile-pic" class="max-h-60 max-w-60 rounded-full" />
	</div>
</section>

<Separator class="my-4" />

<section class="mb-12 mt-20 flex items-center justify-center font-mono">
	<p class="font-mono text-2xl font-bold text-sky-400">Technologies</p>
</section>

<section class="mx-auto flex items-center justify-center font-mono">
	<div class="w-3/5 justify-center text-center">
		<p>Technology icons here</p>
	</div>
</section>

<section class="mb-12 mt-28 flex items-center justify-center font-mono">
	<p class="font-mono text-2xl font-bold text-sky-400">Projects</p>
</section>

<section class="mx-auto flex items-center justify-center font-mono">
	<div class="w-3/5 justify-center">
		<p>Project description here</p>
	</div>
</section>

<Separator class="my-4 mt-36" />

<div class="mb-3 mt-10 flex justify-center font-mono">Check out my socials!</div>
<div class="mb-10 flex justify-center gap-x-3 font-mono">
	<a href="https://github.com/vvartiainen">
		<img
			src="github-mark-white.png"
			alt="github-mark-white"
			class="m-1 max-w-12 hover:animate-bounce"
		/>
	</a>

	<a href="https://www.linkedin.com/in/ville-vartiainen-9b1552112/">
		<img src="linkedin.png" alt="linkedin-icon" class="m-1 max-w-12 hover:animate-bounce" />
	</a>

	<a href="/">
		<img src="book-white-icon.png" alt="project-icon" class="m-1 max-w-12 hover:animate-bounce" />
	</a>
</div>
