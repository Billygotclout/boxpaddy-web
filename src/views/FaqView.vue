<template>
  <section class="bg-faq space-y-4 flex flex-col justify-center items-center ">
    <h3 class="text-4xl font-harabara text-white">Frequently Asked Questions</h3>
    <section class="relative">
      <input type="text" placeholder="Add a question" class="pr-80 pl-3 py-4 rounded-lg">

      <img src="../assets/faq/search.png" alt="clout" class="w-1/12 absolute right-5 bottom-1 ">


    </section>

  </section>
  <section class=" px-52 mt-64 ">
    <section class="space-y-5">
      <section class="flex items-center justify-between bg-blue-100 p-6">
        <p>What is BoxPaddy?</p>
        <img src="../assets/arrow-back.png" alt="" class="w-[2%]">
      </section>
      <section class="flex items-center justify-between bg-blue-100 p-6">
        <p>What is BoxPaddy?</p>
        <img src="../assets/arrow-back.png" alt="" class="w-[2%]">
      </section>
      <section class="flex items-center justify-between bg-blue-100 p-6">
        <p>What is BoxPaddy?</p>
        <img src="../assets/arrow-back.png" alt="" class="w-[2%]">
      </section>
      <section class="flex items-center justify-between bg-blue-100 p-6">
        <p>What is BoxPaddy?</p>
        <img src="../assets/arrow-back.png" alt="" class="w-[2%]">
      </section>
    </section>




  </section>
  <section class="text-center space-y-3 pt-40 flex flex-col justify-center items-center ">
    <h3 class="text-3xl font-harabara">You still have a question?</h3>
    <p>If you cannot find the answer to your question in our FAQ, you can contact our support service <br> and we will
      answer you shortly.

    </p>
    <section class="text-center w-1/6 py-6 px-9 rounded-lg flex flex-col  bg-[#dedef5]">

      <h4 class="font-bold">Contact Support</h4>
      <h4 class="text-primaryPurple font-bold">Support@boxpaddy.com</h4>

    </section>


  </section>
</template>

<script setup>
</script>

<style  scoped>
.bg-faq {
  /* background to fit with the image in */
  background-image: url("../assets/faq/img.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 50vh;
  /* height: 100vh; */
}
</style>