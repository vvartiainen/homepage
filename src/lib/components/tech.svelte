<script>
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<section class="mb-12 mt-16 flex items-center justify-center font-mono">
	<p id="technologies" class="font-mono text-2xl font-bold text-sky-400">
		Technologies I'm most familiar with...
	</p>
</section>

<section class="mb-16 mt-24 flex items-center justify-center font-mono">
	<Carousel.Root class="w-80" opts={{ loop: true }}>
		<Carousel.Content>
			<Carousel.Item>
				<img src="node.png" alt="node" />
				<div class="p-1 text-center">
					<p class="text-2xl font-extrabold">NodeJS</p>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<img src="postgres.png" alt="postgres" />
				<div class="p-1 text-center">
					<p class="text-2xl font-extrabold">PostgreSQL</p>
				</div>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</section>

<section class="mb-12 mt-16 flex items-center justify-center font-mono">
	<p id="technologies" class="font-mono text-2xl font-bold text-sky-400">
		...and many more I didn't bother to mention
	</p>
</section>
