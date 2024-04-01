<script setup lang="ts">
import TopologyBackdrop from "../Vanta/TopologyBackdrop.vue";
</script>

<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <div class="display-1">This is the home page</div>
  <TopologyBackdrop class="w-100 h-100" />
</template>

<style scoped></style>
