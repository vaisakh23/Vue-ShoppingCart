<script setup lang="ts">
import addToCartIcon from "@/components/icons/addToCartIcon.vue";
import { useStore } from "@/store";

const store = useStore();
const addToCart = (id: number) => {
  store.dispatch("cart/addCartItem", id);
};
defineProps(["product"]);
</script>

<template>
  <img
    :src="product.image"
    alt="Product"
    class="h-56 w-72 object-cover rounded-t-xl"
  />
  <div class="p-4">
    <div class="text-lg font-bold text-gray-600 my-0">{{ product.name }}</div>
    <div class="flex items-center">
      <div class="text-lg font-semibold text-gray-600">${{ product.price.USD }}</div>
      <button
        class="ml-auto cursor-pointer h-8 w-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-800 hover:text-white"
        @click="addToCart(product.id)"
      >
        <span class="text-xl"><addToCartIcon /></span>
      </button>
    </div>
  </div>
</template>
