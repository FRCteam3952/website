<script>
  export let slides;
	import Carousel from 'svelte-light-carousel';
  import {Image} from "astro:assets";
</script>




	<Carousel containerClass={'px-10'} {slides}>
		<!--<Slide slot="slide" let:slide {...slide} />-->
		<div class="flex-center" let:slide slot="slide">
		<img width="800" src={slide[0].src} alt={slide[1]}  />
		</div>

		<button
			slot="next"
			let:next
			let:canScrollNext
			class={`defaultr ${!canScrollNext && 'noMoreScroll'}`}
			on:click={next}
			let:a11y
			{...a11y}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="icon"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</button>
		<button
			slot="prev"
			let:prev
			let:canScrollPrev
			on:click={prev}
			class={`defaultl ${!canScrollPrev && 'noMoreScroll'}`}
			let:a11y
			{...a11y}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="icon"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</button>
	</Carousel>
