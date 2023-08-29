<template>
  <Carousel
    :items-to-show="1"
    :autoplay="2000"
    :wrap-around="true"
    class="relative"
  >
    <slide
      v-for="(slide, i) in slides"
      :key="i"
      class="relative h-96 overflow-hidden rounded-2xl"
    >
      <img
        :src="slide.imageSrc"
        class="block w-full object-contain"
        alt="..."
      />
      <div
        class="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center"
      >
        <div class="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
          <h1
            class="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800"
          >
            {{ slide.text1 }}
          </h1>
          <p
            class="text-base leading-6 text-gray-600 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none"
          >
            {{ slide.text2 }}
          </p>
          <a
            class="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-gray-800 text-center rounded-md text-white hover:bg-gray-700 hover:text-white"
            :href="slide.shopLink"
            >Shop Now</a
          >
        </div>
      </div>
    </slide>

    <template #addons>
      <pagination class="absolute bottom-0 left-1/2 right-1/2 text-cyan-400" />
      <navigation />
    </template>
  </Carousel>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  data() {
    return {
      slides: [
        {
          imageSrc:
            "https://kachabazar-store.vercel.app/_next/image?url=%2Fslider%2Fslider-2.jpg&w=1920&q=75",
          text1: "Best Different Type of Grocery Store",
          text2:
            "Quickly aggregate empowered networks after emerging products...",
          shopLink: "#",
        },
        {
          imageSrc: "https://kachabazar-store.vercel.app/_next/image?url=%2Fslider%2Fslider-3.jpg&w=1920&q=75",
          text1: "Quality Freshness Guaranteed!",
          text2: "Intrinsicly fashion performance based products rather than accurate benefits...",
          shopLink: "#"
        },
        {
          imageSrc: "https://kachabazar-store.vercel.app/_next/image?url=%2Fslider%2Fslider-1.jpg&w=1920&q=75",
          text1: "The Best Quality Products Guaranteed!",
          text2: "Dramatically facilitate effective total linkage for go forward processes...",
          shopLink: "#"
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
