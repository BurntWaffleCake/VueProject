<script setup lang="ts">
import { ref } from "vue";

const rot = ref("rotateX(0deg) rotateY(0deg)");

const maxAngle = 45;
function onMouseMove(evt: MouseEvent) {
  rot.value = `rotateY(${((evt.clientX - window.innerWidth / 2) / window.innerWidth) * maxAngle}deg) rotateX(${
    ((evt.clientY - window.innerHeight / 2) / -window.innerHeight) * maxAngle
  }deg)`;
}
</script>

<template>
  <div @mousemove="onMouseMove" class="h-100 w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
    <div
      class="bg-secondary position-absolute"
      style="
        flex: 0 0 100%;
        width: 25%;
        height: 2rem;
        top: 25%;
        right: 0;
        translate: 200%;
        border-radius: 1rem 0 0 1rem;
        animation: translate-in 0.7s forwards;
      "
    ></div>
    <div
      class="bg-warning position-absolute"
      style="
        flex: 0 0 100%;
        width: 20%;
        height: 2rem;
        top: 30%;
        right: 0;
        translate: 200%;
        border-radius: 1rem 0 0 1rem;
        animation: translate-in 0.7s 0.2s forwards;
      "
    ></div>
    <div
      class="bg-primary position-absolute"
      style="
        flex: 0 0 100%;
        width: 15%;
        height: 2rem;
        top: 35%;
        right: 0;
        translate: 200%;
        border-radius: 1rem 0 0 1rem;
        animation: translate-in 0.7s 0.3s forwards;
      "
    ></div>
    <div style="perspective: 100%">
      <div class="border border-3 rounded-4 rounded p-3 d-flex flex-column align-items-center">
        <div class="display-1">Digital Portfolio</div>
        <div class="h1">Soohan Cho</div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes translate-in {
  from {
    translate: 200% 0;
  }
  to {
    translate: 0 0;
  }
}
</style>
