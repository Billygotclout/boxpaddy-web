<template>
  <button
    class="flex items-center justify-center bg-primaryPurple px-9 py-3 rounded-lg drop-shadow-sm text-white text-[18px] font-medium">
    <slot></slot>
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>