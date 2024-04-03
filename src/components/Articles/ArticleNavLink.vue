<template lang="">
  <RouterLink class="w-100 article-nav-link text-lg-end nav-link p-2" :to="props.path">{{ props.label }}</RouterLink>
</template>
<script setup>
const props = defineProps({
  label: String,
  path: String,
});
</script>
<style>
.article-nav-link {
  transition: 0.3s;
}

.article-nav-link:hover {
  filter: brightness(25%);
  transform: translateX(-0.5rem);
}
</style>
