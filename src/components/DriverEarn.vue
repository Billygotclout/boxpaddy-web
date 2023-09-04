<template>
  <section class="bg-gradient-to-r from-[#F7F1F5] to-white py-48 flex items-center justify-between">
    <section class="w-1/2 relative flex items-center justify-center">
      <img src="../assets/jjj.png" alt="" class="w-1/2 z-10 absolute left-20" />
      <img src="../assets/path.png" alt="" class="absolute left-0 z-5" />
    </section>

    <section class="font-harabara flex flex-col px-20">
      <h3>Earn as you go</h3>
      <h3 class="capitalize text-5xl">
        Become a <span class="text-primaryPurple">paddy</span> and earn
        <br /><span class="text-primaryPurple">extra cash!</span>
      </h3>
      <p class="pt-5 font-Lato">
        Who doesn't want some extra cash? Make sharp money by <br />
        becoming a BoxPaddy driver. Own your decisions, be your <br />
        own boss.
      </p>
      <section class="space-x-3 flex pt-7">
        <Button title="App Store">
          <img src="../assets/apple.png" alt="" class="mr-3" />
        </Button>
        <Button title="Play Store">
          <img src="../assets/play.png" alt="" class="mr-3" />
        </Button>
      </section>
    </section>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped></style>