<template lang="">
  <div class="w-100 h-100" :style="{ backgroundImage: 'url(\'' + router.options.history.base + '/' + props.path + '\')' }"></div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const props = defineProps({
  path: String,
});
</script>
<style>
.diagram-image {
  background-size: contain;
}
</style>
