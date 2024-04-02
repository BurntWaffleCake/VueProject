<script setup>
import { ref } from "vue";
import TresScene from "../TresScene.vue";
const isVisible = ref(true);
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-auto">
    <TresScene style="z-index: -10" />
    <div
      :class="isVisible ? 'd-flex' : 'd-none'"
      class="px-0 container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
      style="scroll-snap-align: start"
    >
      <div class="display-1 text-light">Soohan Cho<br /></div>
      <div class="display-5 text-light">So who is he?</div>
    </div>

    <div class="px-0 container-fluid w-100 vh-100" style="scroll-snap-align: start"></div>
  </div>
</template>
