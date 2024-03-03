<script>
	import { Separator } from '$lib/components/ui/separator';
	import Timeline from '$lib/components/timeline.svelte';
	import ContactMe from '$lib/components/contactme.svelte';
	import Tech from '$lib/components/tech.svelte';
	import About from '$lib/components/about.svelte';
	import Nav from '$lib/components/nav.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="Portfolio - Ville Vartiainen" content="Portfolio - Ville Vartiainen" />
</svelte:head>

<Nav />

<Separator id="about" class="mb-16 mt-6" />

<About />

<Separator id="tech" class="mb-16 mt-16" />

<Tech />

<Separator id="projects" class="mb-16 mt-16" />

<Timeline />

<Separator class="mb-16 mt-16" />

<ContactMe />
