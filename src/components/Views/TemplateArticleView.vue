<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const location = useRoute();
const router = useRouter();
const routes = router.getRoutes();
console.log(routes);
</script>

<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <div class="display-1">Template Article</div>
</template>

<style scoped></style>
