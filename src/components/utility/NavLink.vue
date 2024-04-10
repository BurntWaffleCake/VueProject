<template lang="">
  <div
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    :class="{
      'px-3': isHovering,
    }"
    class="nav-item"
  >
    <RouterLink class="nav-link" :to="props.to"><slot></slot></RouterLink>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isHovering = ref(false);

const props = defineProps({
  to: String,
});
</script>
<style>
.nav-item {
  transition: 0.3s;
}
</style>
