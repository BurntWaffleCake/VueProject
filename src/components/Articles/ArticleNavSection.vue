<template lang="">
  <div class="w-100 text-lg-end d-flex flex-column align-items-lg-end gap-0">
    <a
      @click="onClick()"
      class="h4 text-decoration-none"
      data-bs-toggle="collapse"
      :href="'#' + uuid"
      aria-expanded="false"
      aria-controls="contentId"
    >
      <i class="bi" :class="props.icon"></i> {{ props.label }}
      <i class="h4 bi bi-caret-right" :class="{ 'rotated-90': active }"></i>
    </a>
    <div class="collapse show" :id="uuid">
      <slot></slot>
    </div>
    <hr class="w-50 mt-1" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  icon: String,
});

import ArticleNavLink from "./ArticleNavLink.vue";
import { ref } from "vue";

const active = ref(false);

function onClick() {
  active.value = !active.value;
}

const uuid = ref(Math.random().toString());
</script>

<style>
.bi-caret-right::before {
  transition: 0.3s;
}

.rotated-90::before {
  transform: rotate(90deg);
}
</style>
