<template>
  <div class="bg-[#f7f8fa] p-10">
    <div
      class="grid grid-cols-4 justify-center justify-items-center gap-14 px-10"
    >
      <template v-for="(product, ind) in products">
        <div
          v-if="ind < productToShow"
          class="w-64 bg-white rounded-xl shadow-md duration-500 hover:scale-105 hover:shadow-xl"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </template>
    </div>
    <div
      v-if="productToShow < products.length"
      class="w-full flex justify-center items-center mt-10"
    >
      <button
        @click="productToShow += 8"
        class="rounded-md text-gray-700 bg-indigo-100 hover:bg-gray-800 hover:text-white duration-300 px-5 h-12"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { useStore } from "@/store";
import { ref } from "vue";
const store = useStore();
const products = store.getters["product/products"];

const productToShow = ref(8);
</script>
