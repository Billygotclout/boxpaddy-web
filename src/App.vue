<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Least from "./components/Least.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Least />
  <Footer />
</template>

<style scoped></style>
