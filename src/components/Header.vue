<script setup lang="ts">
import { RouterLink } from "vue-router";
import CartNavIcon from "./icons/CartNavIcon.vue";
import ProfileNavIcon from "./icons/ProfileNavIcon.vue";

const probs = defineProps(["toggleCartOpen"]);
const linkClass =
  "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";
</script>

<template>
  <header class="bg-gray-800 flex justify-between px-12 py-6 h-16 items-center mb-2">
    <img src="../assets/logo.svg" alt="logo" class="h-48" />
    <nav class="">
      <RouterLink to="/" :class="linkClass">
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/products" :class="linkClass">
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/past-orders" :class="linkClass">
        <span>Past Orders</span>
      </RouterLink>
    </nav>

    <div class="w-48 flex justify-center ">
      <a @click="toggleCartOpen" :class="linkClass">
        <CartNavIcon />
      </a>
      <a to="#" :class="linkClass">
        <ProfileNavIcon />
      </a>
    </div>
  </header>
</template>