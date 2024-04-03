<template>
  <div class="pb-3">
    <div :style="{ backgroundImage: 'url(\'' + router.options.history.base + '/' + props.titleImagePath + '\')' }" class="title-display text-light w-100 h-100 d-flex flex-column justify-content-center align-items-center p-5">
      <div class="text-shadow py-5 my-5 display-1 text-center">{{ props.title }}</div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  "title-image-path": String,
});

const backgroundImg = ref(props.titleImagePath);

import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, nextTick } from "vue";
const route = useRoute();
const router = useRouter();
</script>
<style>
.title-display {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: 0px 0px 0.5rem black;
}
</style>
