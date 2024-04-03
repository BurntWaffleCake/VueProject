<template lang="">
  <div class="offcanvas-sm offcanvas-start" data-bs-scroll="true" tabindex="-1" id="Id1" aria-labelledby="Enable both scrolling & backdrop">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">Backdrop with scrolling</h5>
      <button type="button" data-bs-target="#Id1" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="w-100 pt-5 d-flex flex-column align-items-lg-end">
        <div class="h1 text-decoration-underline">Articles</div>
        <ArticleNavLink label="Home" path="/" />
        <hr class="w-50 my-0" />
        <ArticleNavLink label="Article Home" path="/Article" />

        <ArticleNavSection label="Physics">
          <ArticleNavLink label="Introduction" path="/Article/Physics" />
          <!-- <ArticleNavLink label="Physics Engine" path="/Article/Physics/PhysicsEngine" /> -->
        </ArticleNavSection>

        <ArticleNavSection label="Graphics">
          <ArticleNavLink label="Physics" path="/Article/Physics" />
        </ArticleNavSection>

        <ArticleNavSection label="Algorithms">
          <ArticleNavLink label="Physics" path="/Article/Physics" />
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
