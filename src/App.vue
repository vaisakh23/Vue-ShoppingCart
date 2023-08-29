<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderCp from "@/components/Header.vue";
import CartButtonVue from "@/components/CartButton/CartButton.vue";
import { ref } from "vue";

const isCartOpen = ref(false);
const toggleCartOpen = () => {
  isCartOpen.value = !isCartOpen.value;
};
</script>

<template>
  <CartButtonVue :isCartOpen="isCartOpen" :toggleCartOpen="toggleCartOpen" />
  <HeaderCp :toggleCartOpen="toggleCartOpen" />
  <main class="py-5">
    <RouterView />
  </main>
</template>
