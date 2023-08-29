<template>
  <div class="h-24 w-24 overflow-hidden rounded-md">
    <img
      :src="product.image"
      alt="image"
      class="h-full w-full object-cover object-center"
    />
  </div>
  <div class="ml-4 flex flex-1 flex-col py-2">
    <div class="flex justify-between">
      <h3>{{ product.name }}</h3>
      <p>${{ (qty * product.price.USD).toFixed(2) }}</p>
    </div>
    <div class="flex flex-1 items-end justify-between">
      <p class="text-gray-500">Qty {{ qty }}</p>

      <div class="flex">
        <button
          type="button"
          class="font-medium text-gray-500 hover:text-red-400"
          @click="removeAllCartItem(product.id)"
        >
          Remove
        </button>
      </div>
    </div>
    <div>
      <button class="text-4xl mr-3" @click="downItemQty(product.id)">-</button>
      <button class="text-3xl" @click="upItemQty(product.id)">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
const store = useStore();
defineProps(["product", "qty"]);

const removeAllCartItem = (id: number) => {
  store.dispatch("cart/removeCartItem", id);
};
const upItemQty = (id: number) => {
  store.dispatch("cart/upItemQty", id);
};
const downItemQty = (id: number) => {
  store.dispatch("cart/downItemQty", id);
  if (!store.getters["cart/getItemQty"](id)) {
    store.dispatch("cart/removeCartItem", id);
  }
};
</script>
