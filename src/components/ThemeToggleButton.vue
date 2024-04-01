<script setup>
import { ref } from "vue";
const light = ref(true);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  console.log(event);
  // const newColorScheme = event.matches ? "dark" : "light";
});

function toggleTheme() {
  if (light.value) {
    document.getElementsByTagName("html")[0]?.setAttribute("data-bs-theme", "dark");
    light.value = false;
  } else {
    document.getElementsByTagName("html")[0]?.setAttribute("data-bs-theme", "light");
    light.value = true;
  }
}
</script>

<template>
  <button @click="toggleTheme" type="button" class="btn btn-outline-secondary"><i :class="{ 'bi-sun-fill': light, 'bi-moon-stars-fill ': !light }" class="bi"></i></button>
</template>

<style scoped></style>
