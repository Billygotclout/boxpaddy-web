<template>
  <section
    class="pt-16 flex justify-around items-center bg-gradient-to-r from-[#F7F1F5] to-white lg:justify-between px-20">
    <section class="space-y-6 font-harabara">
      <h1 class="text-4xl font-bold lg:text-6xl">
        <span class="text-primaryPurple">Deliver</span> Your Goods With
        <span class="text-primaryPurple"> <br />Ease</span>
      </h1>
      <p class="capitalize font-medium opacity-70">
        Remain at the comfort of your home and watch your <br />
        goods get delivered fast and securely
      </p>
      <img src="../assets/arrow.png" alt="" class="ml-32" />
      <section class="space-x-3 flex">
        <Button title="App Store">
          <img src="../assets/apple.png" alt="" class="mr-3" />
        </Button>
        <Button title="Play Store">
          <img src="../assets/play.png" alt="" class="mr-3" />
        </Button>
      </section>
    </section>

    <img src="../assets/phone.png" alt="" class="drop-shadow-md w-1/5 mr-52" />
  </section>
  <driver-earn />
  <expect />
  <faq />
</template>

<script setup>
import Button from "../components/Button.vue";
import DriverEarn from "../components/DriverEarn.vue";
import Expect from "../components/Expect.vue";
import Faq from "../components/Faq.vue";

</script>

<style lang="scss" scoped></style>