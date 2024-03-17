<script>
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<section
	class="b-12 mt-16 flex justify-center pl-14 pr-14 text-center font-mono text-xl font-bold text-sky-400 md:text-2xl"
>
	<p id="technologies" class="">Technologies I'm most familiar with...</p>
</section>

<section class="mb-16 mt-24 flex items-center justify-center font-mono">
	<Carousel.Root class="max-h-sm w-1/2 max-w-sm md:w-1/3" opts={{ loop: true }}>
		<Carousel.Content>
			<Carousel.Item class="flex flex-col items-center justify-center">
				<img src="node.png" alt="node" />
			</Carousel.Item>
			<Carousel.Item class="flex flex-col items-center justify-center">
				<img src="postgres.png" alt="postgres" />
				<div class="p-1 text-center">
					<p class="text-2xl font-extrabold">PostgreSQL</p>
				</div>
			</Carousel.Item>
			<Carousel.Item class="flex flex-col items-center justify-center">
				<img src="aws.png" alt="aws" />
			</Carousel.Item>
			<Carousel.Item class="flex flex-col items-center justify-center">
				<img src="golang.png" alt="golang" />
			</Carousel.Item>
			<Carousel.Item class="flex flex-col items-center justify-center">
				<img src="react.png" alt="react" />
				<div class="mt-4 p-1 text-center">
					<p class="text-2xl font-extrabold">React</p>
				</div>
			</Carousel.Item>
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</section>

<section
	class="mb-12 mt-16 flex justify-center pl-14 pr-14 text-center font-mono text-xl md:text-2xl"
>
	<p id="technologies" class="font-mono font-bold text-sky-400">
		...and many more I didn't bother to mention
	</p>
</section>
