<template lang="">
  <div class="offcanvas-lg offcanvas-start" data-bs-scroll="true" tabindex="-1" id="Id1" aria-labelledby="Enable both scrolling & backdrop">
    <div class="offcanvas-header pb-0">
      <button type="button" data-bs-target="#Id1" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <hr class="mt-0" />
      <div class="w-100 pt-lg-5 d-flex flex-column align-items-lg-end">
        <div class="h1 text-decoration-underline">Articles</div>
        <ArticleNavLink label="Home" path="/Article" />
        <hr class="w-50 mt-0" />

        <ArticleNavSection icon="bi-boxes" label="Physics">
          <ArticleNavLink label="Introduction" path="/Article/Physics" />
          <!-- <ArticleNavLink label="Physics Engine" path="/Article/Physics/PhysicsEngine" /> -->
        </ArticleNavSection>

        <ArticleNavSection icon="bi-box" label="Graphics">
          <ArticleNavLink label="Introduction" path="/Article/Graphics" />
        </ArticleNavSection>

        <ArticleNavSection icon="bi-grid-3x2" label="Algorithms">
          <ArticleNavLink label="Introduction" path="/Article/Algorithms" />
        </ArticleNavSection>
      </div>
    </div>
  </div>
</template>
<script setup>
import ArticleNavLink from "./ArticleNavLink.vue";
import ArticleNavSection from "./ArticleNavSection.vue";
</script>
<style lang=""></style>
