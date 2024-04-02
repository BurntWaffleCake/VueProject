<script setup>
import { ref } from "vue";
const light = ref(false);

function changeToLightTheme() {
  localStorage.setItem("saved-theme", "light");
  document.getElementsByTagName("html")[0]?.setAttribute("data-bs-theme", "light");
  light.value = true;
}

function changeToDarkTheme() {
  localStorage.setItem("saved-theme", "dark");
  document.getElementsByTagName("html")[0]?.setAttribute("data-bs-theme", "dark");
  light.value = false;
}

const savedTheme = localStorage.getItem("saved-theme");
if (savedTheme == "light") {
  changeToLightTheme();
} else {
  changeToDarkTheme();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  changeToDarkTheme();
});

function toggleTheme() {
  if (light.value) {
    changeToDarkTheme();
  } else {
    changeToLightTheme();
  }
}
</script>

<template>
  <button @click="toggleTheme" type="button" class="btn btn-outline-secondary">
    <i :class="{ 'bi-sun-fill': light, 'bi-moon-stars-fill ': !light }" class="bi"></i>
  </button>
</template>

<style scoped></style>
