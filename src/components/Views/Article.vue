<template lang="">
  <div class="flex-grow-1 h-100">
    <button class="d-block d-lg-none position-fixed btn bg-secondary-subtle m-3" data-bs-toggle="offcanvas" type="button" data-bs-target="#Id1">
      <i class="bi bi-three-dots"></i>
    </button>

    <div class="row">
      <div class="d-lg-block col-lg-3">
        <ArticleMainNav />
      </div>
      <div class="col-12 col-lg-6"></div>
      <div class="d-none d-lg-block col-lg-3"></div>
    </div>
  </div>
</template>
<script setup>
import ArticleMainNav from "../Articles/ArticleMainNav.vue";
</script>
<style lang=""></style>
