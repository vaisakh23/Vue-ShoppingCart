<template>
  <Dialog
    class="fixed inset-0 overflow-hidden z-10"
    :open="isCartOpen"
    @close="toggleCartOpen"
  >
    <div class="absolute inset-0 bg-black/30" aria-hidden="true"></div>
    <DialogPanel
      class="bg-white fixed inset-y-0 right-0 w-full max-w-md cursor-pointer flex flex-col justify-between"
    >
      <div
        class="w-full flex justify-between items-center px-5 py-6 bg-indigo-50"
      >
        <DialogTitle class="text-xl font-bold">Shopping Cart</DialogTitle>
        <div class="">
          <button
            type="button"
            @click="probs.toggleCartOpen"
            class="relative -m-2 p-2 text-gray-500 hover:text-red-400"
          >
            <closeIconVue />
          </button>
        </div>
      </div>

      <div class="flex-grow overflow-y-scroll">
        <ul class="divide-y divide-gray-200">
          <li
            v-for="({ id, qty }, ind) in cartItems"
            :key="ind"
            class="flex p-6"
          >
            <CartItem
              :product="inventory[id]"
              :qty="qty"
            />
          </li>
        </ul>
      </div>

      <div class="mx-5 my-3">
        <button
          class="w-full p-3 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-between text-sm text-white transition duration-300"
        >
          <span class="align-middle font-medium text-lg">Proceed To Checkout</span>
          <span
            class="rounded-lg font-bold text-base py-2 px-3 bg-white text-gray-600"
          >
            ${{ cartTotalPrice }}
          </span>
        </button>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import closeIconVue from "../icons/CloseIcon.vue";
import inventory from "../../food.json";
import { useStore } from "@/store";
import { computed } from "vue";
import CartItem from "./CartItem.vue";

const probs = defineProps(["isCartOpen", "toggleCartOpen"]);
const store = useStore();
const cartItems = computed(() => {
  return store.state.cart.cartItems;
});
const cartTotalPrice = computed(() => {
  return store.getters["cart/cartTotalPrice"]
})
</script>
