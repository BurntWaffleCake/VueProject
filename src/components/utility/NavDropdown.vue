<template lang="">
  <div
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    :class="{
      'px-3': isHovering,
    }"
    class="nav-item"
  >
    <li class="dropdown h-100">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">{{
        props.label
      }}</a>
      <ul class="dropdown-menu">
        <slot></slot>
      </ul>
    </li>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isHovering = ref(false);

const props = defineProps({
  label: String,
});
</script>
<style></style>
