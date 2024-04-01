<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="d-flex w-100 h-100 flex-column">
    <header class="sticky-top">
      <NavBar />
    </header>
    <main class="d-flex flex-column flex-grow-1">
      <RouterView class="" />
    </main>
  </div>
</template>

<style scoped></style>
