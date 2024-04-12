<template lang="">
  <div class="offcanvas-lg offcanvas-start sticky-lg-top" data-bs-scroll="true" tabindex="-1" id="Id1" aria-labelledby="Enable both scrolling & backdrop">
    <div class="offcanvas-header pb-0">
      <button type="button" data-bs-target="#Id1" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body overflow-hidden">
      <hr class="mt-0" />
      <div class="w-100 pe-3 mt-5 pt-lg-5 d-flex flex-column align-items-lg-end nav-holder">
        <div class="h1 text-decoration-underline">Articles</div>
        <ArticleNavLink label="Home" path="/Article" />
        <hr class="w-50 mt-0" />

        <ArticleNavSection icon="bi-boxes" label="Physics">
          <ArticleNavLink label="Introduction" path="/Article/Physics" />
          <ArticleNavSection icon="bi-boxes" label="Physics Engine">
            <ArticleNavLink label="Introduction" path="/Article/Physics/PhysicsEngine" />
            <ArticleNavLink label="Ball Collision" path="/Article/Physics/PhysicsEngine/BallCollision" />
            <ArticleNavLink label="Ball Collision Optimization" path="/Article/Physics/PhysicsEngine/BallCollisionOptimization" />
            <ArticleNavLink label="Box Collision" path="/Article/Physics/PhysicsEngine/BoxCollision" />
            <ArticleNavLink label="Polygon Collision" path="/Article/Physics/PhysicsEngine/PolygonCollision" />
            <ArticleNavLink label="Verlet Physics" path="/Article/Physics/PhysicsEngine/VerletPhysics" />
          </ArticleNavSection>
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
<style>
.nav-holder {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
