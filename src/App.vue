<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column" style="min-height: 100%">
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
