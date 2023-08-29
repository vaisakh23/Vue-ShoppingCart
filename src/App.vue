<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import HeaderCp from "@/components/Header.vue";
import CartButtonVue from "@/components/CartButton/CartButton.vue";
import FooterVue from "@/components/Footer.vue";

const isCartOpen = ref(false);
const toggleCartOpen = () => {
  isCartOpen.value = !isCartOpen.value;
};
</script>

<template>
  <CartButtonVue :isCartOpen="isCartOpen" :toggleCartOpen="toggleCartOpen" />
  <HeaderCp :toggleCartOpen="toggleCartOpen" />
  <RouterView />
  <FooterVue />
</template>
