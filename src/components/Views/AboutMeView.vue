<script setup>
import { ref } from "vue";
const isVisible = ref(true);

window.addEventListener("scroll", () => {
  console.log("Scrolling");
  console.log(window.scrollY);
  console.log(window.scrollMaxY);
});
</script>

<template lang="">
  <div class="flex-grow-1">
    <div :class="isVisible ? 'd-block' : 'd-none'" class="container-fluid w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-danger" style="scroll-snap-align: start">
      <div class="display-1">About Me</div>
    </div>

    <div class="container-fluid w-100 h-100 bg-primary" style="scroll-snap-align: start"></div>
  </div>
</template>
