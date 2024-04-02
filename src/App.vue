<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
import ToPageTopButton from "./components/ToPageTopButton.vue";
</script>

<template>
  <div class="d-flex w-100 h-100 flex-column">
    <header class="sticky-top">
      <NavBar />
    </header>
    <main id="main" class="d-flex flex-column flex-grow-1">
      <RouterView />
      <ToPageTopButton />
    </main>
    <footer>
      <FooterComp />
    </footer>
  </div>
</template>

<style scoped></style>
