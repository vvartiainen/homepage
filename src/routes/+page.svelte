<script>
	import { Separator } from '$lib/components/ui/separator';
	import Timeline from '$lib/components/timeline.svelte';
	import Footer from '$lib/components/footer.svelte';
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

<Separator class="my-4" />

<About />

<Separator id="tech" class="my-4" />

<Tech />

<Separator id="projects" class="my-4" />

<Timeline />

<Separator class="my-4 mt-16" />

<ContactMe />

<Separator class="my-4 mt-36" />

<Footer />
