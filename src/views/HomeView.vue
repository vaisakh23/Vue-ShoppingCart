<script setup lang="ts">
import { computed } from "vue";
import ProductCard from "../components/ProductCard.vue";
import Carousel from "../components/Carousel.vue";
import { useStore } from "@/store";

const store = useStore();

const inventory = computed(()=> {
  return store.getters["product/popularProducts"]
})
</script>

<template>
  <div class="h-96 px-10 mb-10">
    <Carousel />
  </div>
  <div class="flex flex-col bg-[#f7f8fa] pb-10">
    <div class="py-7  flex justify-center mb-6">
      <div class="text-center w-2/5">
        <h2 class="text-2xl font-semibold font-serif mb-2">
          Popular Products for Daily Shopping
        </h2>
        <p class="text-base text-gray-600 font-sans leading-6">
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-4 justify-center justify-items-center gap-14 px-10"
    >
      <div
        class="w-64 bg-white rounded-xl shadow-md duration-500 hover:scale-105 hover:shadow-xl"
        v-for="product in inventory"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
