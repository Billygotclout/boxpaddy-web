<template>
  <nav
    class="flex opacity-90 pt-5 justify-around sm:justify-between items-center"
  >
    <router-link to="/" class="pl-16"
      ><img src="../assets/boxpaddy2.png" alt=""
    /></router-link>
    <ul class="flex mr-12 text-[18px] font-medium space-x-12 lg:mr-60">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/driver">Driver</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
    </ul>
  </nav>
  <hr class="mt-5" />
</template>

<script setup>
</script>

<style scoped>
.router-link-active {
  color: #5959cb;
}
</style>